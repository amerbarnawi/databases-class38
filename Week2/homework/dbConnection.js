import {
  createAuthorTable,
  addMentorColumn,
  createMentorsTable,
} from "./exercise-1.js";

import {
  createResearchPaperTable,
  createAuthorsPapersTable,
} from "./exercise-2.js";

import { joinQueries } from "./exercise-3.js";

import { queries } from "./exercise-4.js";

import { insertData } from "./insertData.js";

import { createDatabase, dropDatabase, useDatabase } from "./database.js";

import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Research_Papers",
});

connection.connect();

// Create, use and drop the database:
executeQuery(dropDatabase);
executeQuery(createDatabase);
executeQuery(useDatabase);

// Exercise - 1:
executeQuery(createAuthorTable);
executeQuery(createMentorsTable);
executeQuery(addMentorColumn);

// Exercise - 2:
executeQuery(createResearchPaperTable);
executeQuery(createAuthorsPapersTable);

// Insert data into tables:
executeQuery(insertData);

// Exercise - 3:
executeQuery(joinQueries);

// Exercise - 4:
executeQuery(queries);

connection.end();

function executeQuery(queriesArray) {
  queriesArray.forEach((queryElement) => {
    connection.query(queryElement.query, function (error, results) {
      if (error) {
        throw error;
      } else {
        console.log(queryElement.title);
        console.log("....................");
        console.table(results);
        console.log("=========================================");
      }
    });
  });
}
