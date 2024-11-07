import { existsSync, mkdirSync, unlinkSync } from "node:fs";
import { join, resolve } from "node:path";

export function getDBPathAndDeleteExisting() {
  const path = new URL("../../sqlite/", import.meta.url).pathname;
  if (!existsSync(path)) {
    mkdirSync(path);
  }

  const dbPath = join(resolve(path), "db.sqlite");

  // delete if exists
  if (existsSync(dbPath)) {
    unlinkSync(dbPath);
  }
  return dbPath;
}
