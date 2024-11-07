export function prepareDB(db) {
  db.exec(`
  CREATE TABLE IF NOT EXISTS molecules (
    moleculeID INTEGER PRIMARY KEY AUTOINCREMENT,
    value data_type TEXT NOT NULL
);
`);
}
