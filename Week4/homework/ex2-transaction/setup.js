import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { createDocuments } from "./createDocuments.js";
import { accountsData } from "./data.js";
import { transferMoney } from "./transfer.js";
dotenv.config();

async function main() {
  const client = new MongoClient(process.env.MONGODB_URL);
  const acCollection = client.db("databaseWeek4").collection("accounts");

  try {
    await client.connect();

    await createDocuments(client, accountsData);

    await transferMoney({
      acCollection: acCollection,
      client: client,
      fromAccount: "ABC_000111",
      toAccount: "ABC_000113",
      amount: 100,
      remark: "Course cost",
    });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

await main().catch((error) => console.log(error));
