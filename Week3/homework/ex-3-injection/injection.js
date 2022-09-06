import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
});

conn.connect();

try {
  await getPopulation("country", "Syria", "SYR", console.log);
} catch (error) {
  console.log(error);
}

conn.end();

/* 
To make SQL injection, for example: 
We can make a query from the variable ( name or code ) with ( OR 1=1 ) in the input.

To solve this problem:
I changed the following to make the function no longer vulnerable to SQL injection:
This code: `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`

And I did not add ( multipleStatements: true ) in the connection code.
 */

async function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?;`,
    [name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) {
        cb(new Error("Not found"));
      } else {
        cb(name, result);
      }
    }
  );
}
