import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { convertDataToArrayOfObjects } from "./convertToObject.js";
import {
  createDocuments,
  findContinentsInformation,
  findTotalPopulation,
} from "./controller.js";
dotenv.config();

async function main() {
  const client = new MongoClient(process.env.MONGODB_URL);

  try {
    await client.connect();

    /*
  Please note:
  In this exercise, I did not import the data to mongoDB by using ( mongoimport tool ),
  instead of that, I converted the data to be a string and I created a function to convert them to an objects.
  But if you want from me to use ( mongoimport tool ) I will edit my homework.
  */

    // Exercise-1: Creating the database:
    const documents = convertDataToArrayOfObjects();
    await createDocuments(client, documents);
    console.log("---------------------------------");

    // Exercise-2: Find the total population:
    await findTotalPopulation(client, "Netherlands");
    console.log("---------------------------------");

    // Exercise-3: Find continents information depending on the year and age:
    await findContinentsInformation(client, 2020, "100+");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

await main().catch((error) => console.log(error));
