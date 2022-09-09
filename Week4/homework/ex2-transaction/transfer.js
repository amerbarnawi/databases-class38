import {
  AddChangesItem,
  deductionMoney,
  isAccountFound,
  isSenderBalanceEnough,
  receivingMoney,
  isTransferringValid,
} from "./transferController.js";

// Transfer money function ( the transaction ):
export async function transferMoney(transferInfo) {
  const { client, acCollection, fromAccount, toAccount, amount } = transferInfo;

  const isTransferValid = await isTransferringValid(transferInfo);

  if (!isTransferValid) {
    return;
  }

  // Starting the session and the transaction:
  const session = client.startSession();

  try {
    const transactionResults = await session.withTransaction(async () => {
      console.log("1- Start the transaction.");

      await deductionMoney(transferInfo, session);
      console.log("2- Deduction the money from the sender is done!");

      await AddChangesItem(transferInfo, session, "Sending");
      console.log("3- Adding account changes to sender account is done!");

      await receivingMoney(transferInfo, session);
      console.log("4- Receiving the money to recipient account is done!");

      await AddChangesItem(transferInfo, session, "Receiving");
      console.log("5- Adding account changes to recipient account is done!");
    });

    if (transactionResults.ok === 1) {
      console.log("6- The transaction is successfully done!");
    }
  } catch (error) {
    console.log(`Aborted: Something went wrong, the transaction is failed!`);
    console.log(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
}
