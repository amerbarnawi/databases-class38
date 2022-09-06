export const insertDataIntoTables = [
  {
    title: "Insert data into account table:",
    query: `INSERT INTO account (account_number, balance )
            VALUES  (101, 6000 ),
                    (102, 3000),
                    (103, 1000),
                    (104, 5000),
                    (105, 1500);`,
  },
  {
    title: "Insert data into account_changes table:",
    query: `INSERT INTO account_changes (account_number, amount, changed_date, remark)
            VALUES (103, 50, "2022-09-03", "Gift from friend "),
                   (104, 50, "2022-09-03", "Send to friend ");`,
  },
];
