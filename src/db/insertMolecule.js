let insertStmt;

export function insertMolecule(entry, db) {
  if (!insertStmt) {
    insertStmt = db.prepare(`INSERT INTO 
          molecules(value) 
          VALUES (?)`);
  }
  insertStmt.run(entry);
}
