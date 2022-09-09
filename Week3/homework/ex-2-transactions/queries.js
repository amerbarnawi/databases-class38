export const createDatabase = [
  {
    title: "Create the database:",
    query: "CREATE DATABASE bank_accounts;",
  },
];

export const dropDatabase = [
  {
    title: "Drop the database:",
    query: "DROP DATABASE bank_accounts;",
  },
];

export const useDatabase = [
  {
    title: "Use The database:",
    query: "USE bank_accounts;",
  },
];

export const transactionQueries = [
  {
    title: "Start the transaction:",
    query: `START TRANSACTION;`,
  },
  {
    title: "Update the sender account",
    query: `UPDATE account
            SET balance = balance - 1000
            WHERE account_number = 101;`,
  },
  {
    title: "Insert data into account_changes table ( sender info ):",
    query: `INSERT INTO account_changes (account_number, amount, changed_date, remark)
            VALUES (101, 1000, "2022-09-05", "Sending the course cost");`,
  },
  {
    title: "Update the recipient account:",
    query: `UPDATE account
            SET balance = balance + 1000
            WHERE account_number = 102;`,
  },
  {
    title: "Insert data into account_changes table ( recipient info ):",
    query: `INSERT INTO account_changes (account_number, amount, changed_date, remark)
            VALUES (102, 1000, "2022-09-05", "Receiving the course cost.");`,
  },
];
