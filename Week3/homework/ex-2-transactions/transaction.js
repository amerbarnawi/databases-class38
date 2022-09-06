import mysql from "mysql";

import {
  dropDatabase,
  createDatabase,
  useDatabase,
  transactionQueries,
} from "./queries.js";
import { createTables } from "./transactions-create-tables.js";
import { insertDataIntoTables } from "./transactions-insert-values.js";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "bank_accounts",
});

connection.connect();

try {
  // Using the database:
  await executeQuery(dropDatabase);
  await executeQuery(createDatabase);
  await executeQuery(useDatabase);

  // Creating the tables and the data:
  await executeQuery(createTables);
  await executeQuery(insertDataIntoTables);

  // Executing transaction queries:
  await executeQuery(transactionQueries);
  connection.commit();
} catch (error) {
  connection.rollback();
  console.log(error);
}

connection.end();

async function executeQuery(queriesArray) {
  queriesArray.forEach((queryElement) => {
    connection.query(queryElement.query, function (error, results) {
      if (error) {
        throw new error();
      } else {
        console.log(queryElement.title);
        console.log("....................");
        console.table(results);
        console.log("=========================================");
      }
    });
  });
}
