import { openAsBlob } from "node:fs";
import { MoleculeStream } from "./MoleculeStream.js";
import { getBetterDB as getDB } from "./db/getBetterDB.js";
//import { getNativeDB as getDB } from "./db/getNativeDB.js";
import { insertMolecule } from "./db/insertMolecule.js";
const blob = await openAsBlob(new URL("../data.sdf.gz", import.meta.url));

const byteStream = blob.stream();

const decompressionStream = byteStream.pipeThrough(
  new DecompressionStream("gzip")
);

const db = await getDB();

const textStream = decompressionStream.pipeThrough(new TextDecoderStream());

const moleculeStream = textStream.pipeThrough(new MoleculeStream());

console.time("Process time");
let count = 0;
for await (const molecule of moleculeStream) {
  count++;
  insertMolecule(molecule, db);
  //  if (count === 2) break;
}
console.log("Processed %i molecules", count);
console.timeEnd("Process time");
