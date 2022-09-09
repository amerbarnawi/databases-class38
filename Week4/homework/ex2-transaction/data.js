export const accountsData = [
  {
    account_number: "ABC_000111",
    balance: 3500,
    account_changes: [
      {
        change_number: 1,
        process: "Sending",
        account: "To account ABC_000115",
        amount: 1000,
        change_date: new Date("2022 - 05 - 16"),
        remark: "HYF course cost.",
      },
      {
        change_number: 2,
        process: "Sending",
        account: "To account ABC_000116",
        amount: 50,
        change_date: new Date("2022 - 06 - 12"),
        remark: "Gift for friend.",
      },
      {
        change_number: 3,
        process: "Sending",
        account: "To account ABC_000118",
        amount: 100,
        change_date: new Date("2022 - 06 - 15"),
        remark: "Energy cost.",
      },
    ],
  },
  {
    account_number: "ABC_000112",
    balance: 2300,
    account_changes: [
      {
        change_number: 1,
        process: "Receiving",
        account: "From account ABC_000115",
        amount: 15,
        change_date: new Date("2022 - 07 - 10"),
        remark: "Travel cost.",
      },
    ],
  },
  {
    account_number: "ABC_000113",
    balance: 5000,
    account_changes: [],
  },
];
