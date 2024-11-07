# Benchmark native sqlite3

We are testing here the insertion of 300'000 records in a sqlite3 database from a WebStream.

To run

`npm start`

To switch from bettersqlite3 to native edit `index.js`

```js
//import { getBetterDB as getDB } from "./db/getBetterDB.js";
import { getNativeDB as getDB } from "./db/getNativeDB.js";
```
