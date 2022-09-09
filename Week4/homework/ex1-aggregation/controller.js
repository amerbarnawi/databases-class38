export async function createDocuments(client, data) {
  const result = await client
    .db("databaseWeek4")
    .collection("countries")
    .insertMany(data);

  console.log("Exercise-1: Creating the documents is done!");
}

export async function findTotalPopulation(client, country) {
  const pipeline = [
    {
      $match: {
        Country: country,
      },
    },
    {
      $group: {
        _id: "$Year",
        TotalPopulation: {
          $sum: {
            $sum: ["$M", "$F"],
          },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];

  const aggCursor = client
    .db("databaseWeek4")
    .collection("countries")
    .aggregate(pipeline);

  const aggResult = await aggCursor.toArray();

  console.log(`Exercise-2: The total population in ${country}`);
  console.log(aggResult);
}

export async function findContinentsInformation(client, year, age) {
  const pipeline = [
    {
      $match: {
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
      },
    },
    {
      $match: {
        Year: year,
      },
    },
    {
      $match: {
        Age: age,
      },
    },
    {
      $addFields: {
        TotalPopulation: {
          $sum: ["$M", "$F"],
        },
      },
    },
    {
      $sort: {
        Country: 1,
      },
    },
  ];

  const aggCursor = client
    .db("databaseWeek4")
    .collection("countries")
    .aggregate(pipeline);

  const aggResult = await aggCursor.toArray();

  console.log(
    `Exercise-3: The continents information in ${year} and age ${age}:`
  );
  console.log(aggResult);
}
