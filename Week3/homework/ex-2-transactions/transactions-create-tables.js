export const createTables = [
  {
    title: "Creating the account table:",
    query: `CREATE TABLE IF NOT EXISTS account (
            account_number INT NOT NULL PRIMARY KEY,
            balance REAL
            );`,
  },
  {
    title: "Creating the account_changes table:",
    query: `CREATE TABLE IF NOT EXISTS account_changes (
            change_number INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            account_number INT NOT NULL, 
            amount REAL, 
            changed_date DATE, 
            remark TEXT,
            FOREIGN KEY (account_number) REFERENCES account (account_number)
            );`,
  },
];
