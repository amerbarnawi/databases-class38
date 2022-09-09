// Deduction money from the sender account:
export async function deductionMoney(transferInfo, session) {
  const { acCollection, fromAccount, amount } = transferInfo;

  await acCollection.updateOne(
    { account_number: fromAccount },
    { $inc: { balance: amount * -1 } },
    { session }
  );
}

// Adding money to recipient account:
export async function receivingMoney(transferInfo, session) {
  const { acCollection, toAccount, amount } = transferInfo;

  await acCollection.updateOne(
    { account_number: toAccount },
    { $inc: { balance: amount } },
    { session }
  );
}

// Adding account changes to the sender and recipient accounts:
export async function AddChangesItem(transferInfo, session, process) {
  const { acCollection, fromAccount, toAccount, amount, remark } = transferInfo;
  let account = "";
  let fromToAccount = "";

  if (process === "Sending") {
    account = fromAccount;
    fromToAccount = `To account: ${toAccount}`;
  } else if (process === "Receiving") {
    account = toAccount;
    fromToAccount = `From account: ${fromAccount}`;
  }

  const changesNumber = await getAccountChangeNumber(acCollection, account);

  await acCollection.updateOne(
    { account_number: account },
    {
      $push: {
        account_changes: {
          change_number: changesNumber,
          process: process,
          account: fromToAccount,
          amount: amount,
          change_date: new Date(),
          remark: `The reason is: ${remark}`,
        },
      },
    },
    { session }
  );
}

// Checking if it is possible to transfer money:
export async function isTransferringValid(transferInfo) {
  const { client, acCollection, fromAccount, toAccount, amount } = transferInfo;

  const isSenderAccountFound = await isAccountFound(acCollection, fromAccount);

  if (!isSenderAccountFound) {
    console.log(`Sorry, can not find this account number: ${fromAccount}`);
    return false;
  }

  // Checking if the accounts are available and the sender balance is enough:
  const isBalanceEnough = await isSenderBalanceEnough(
    acCollection,
    fromAccount,
    amount
  );

  if (!isBalanceEnough) {
    console.log(`The transferring is failed, your balance is not enough!`);
    return false;
  }

  const isRecipientAccountFound = await isAccountFound(acCollection, toAccount);

  if (!isRecipientAccountFound) {
    console.log(`Sorry, can not find this account number: ${toAccount}`);
    return false;
  }

  return true;
}

// Getting the changes number:
export async function getAccountChangeNumber(acCollection, accountNumber) {
  const accountResult = await acCollection.findOne({
    account_number: accountNumber,
  });

  if (accountResult.account_changes.length >= 1) {
    const changesNumber =
      accountResult.account_changes[accountResult.account_changes.length - 1]
        .change_number + 1;

    return changesNumber;
  } else {
    return 1;
  }
}

// Checking if the sender and recipient account are available:
export async function isAccountFound(acCollection, accountNumber) {
  const result = await acCollection.findOne({ account_number: accountNumber });

  return result;
}

// Checking if the balance of the sender is enough:
export async function isSenderBalanceEnough(
  acCollection,
  accountNumber,
  amount
) {
  const result = await acCollection.findOne({ account_number: accountNumber });

  if (result.balance >= amount) {
    return true;
  } else {
    return false;
  }
}
