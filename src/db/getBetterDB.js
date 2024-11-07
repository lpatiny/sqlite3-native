import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getDBPathAndDeleteExisting } from "./getDBPathAndDeleteExisting.js";

import sqLite from "better-sqlite3";
import { prepareDB } from "./prepareDB.js";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export function getBetterDB() {
  const dbPath = getDBPathAndDeleteExisting();
  const db = sqLite(dbPath);
  db.pragma("journal_mode = WAL");
  prepareDB(db);
  return db;
}
