export async function createDocuments(client, data) {
  const result = await client
    .db("databaseWeek4")
    .collection("accounts")
    .insertMany(data);

  if (result.insertedCount >= 1) {
    console.log(`Importing the data into "accounts" collection is done!`);
    console.log(`( ${result.insertedCount} ) documents has been inserted.`);
  } else {
    throw new error("Something went wrong with inserting the data!");
  }
}
