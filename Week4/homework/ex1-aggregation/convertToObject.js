import { data } from "./data.js";

export function convertDataToArrayOfObjects() {
  const splitByLine = data.split(/\n/);

  const splitByComma = splitByLine.map((countryArr) =>
    countryArr.trim().split(",")
  );

  const dataAsObjects = splitByComma.map((countryData) => {
    // The (+) is to convert the string to number.
    return {
      Country: countryData[0],
      Year: +countryData[1],
      Age: countryData[2],
      M: +countryData[3],
      F: +countryData[4],
    };
  });

  return dataAsObjects;
}
