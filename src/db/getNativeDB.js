import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { DatabaseSync } from "node:sqlite";

import { prepareDB } from "./prepareDB.js";
import { getDBPathAndDeleteExisting } from "./getDBPathAndDeleteExisting.js";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export function getNativeDB() {
  const dbPath = getDBPathAndDeleteExisting();
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA journal_mode = WAL");
  prepareDB(db);
  return db;
}
