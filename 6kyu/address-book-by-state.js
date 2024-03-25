//Name: Address Book By State
//Difficulty: 6kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Given a string with friends to visit in different states:

// ad3="John Daggett, 341 King Road, Plymouth MA
// Alice Ford, 22 East Broadway, Richmond VA
// Sal Carpenter, 73 6th Street, Boston MA"

// we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

// Massachusetts
// .....^John Daggett 341 King Road Plymouth Massachusetts
// .....^Sal Carpenter 73 6th Street Boston Massachusetts
// ^Virginia
// .....^Alice Ford 22 East Broadway Richmond Virginia

// Spaces not being always well seen, in the above result ^ means a white space.

// The resulting string (when not printed) will be:

// "Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"

// or (the separator is \n or \r\n depending on the language)

// "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"

// Notes

//     There can be a blank last line in the given string of addresses.
//     The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
//     You can see another example in the "Sample tests".

// States

// For the lazy ones:

// 'AZ': 'Arizona',
// 'CA': 'California',
// 'ID': 'Idaho',
// 'IN': 'Indiana',
// 'MA': 'Massachusetts',
// 'OK': 'Oklahoma',
// 'PA': 'Pennsylvania',
// 'VA': 'Virginia'

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ Pseudo Code

function byState(str) {
  const states = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia",
  };

  const addresses = str.trim().split("\n");
  const groupedAddresses = {};

  addresses.forEach((address) => {
    const [name, street, cityState] = address.split(", ");
    const [city, stateAbbreviation] = cityState.split(" ");

    const state = states[stateAbbreviation];
    if (!groupedAddresses[state]) {
      groupedAddresses[state] = [];
    }
    groupedAddresses[state].push(`${name} ${street} ${city} ${state}`);
  });

  for (const state in groupedAddresses) {
    groupedAddresses[state].sort();
  }

  let result = "";
  for (const state in groupedAddresses) {
    result += `${state}\n`;
    groupedAddresses[state].forEach((address) => {
      result += `..... ${address}\n`;
    });
  }

  return result.trim();
}

// Example usage:
const inputString = `
  John Daggett, 341 King Road, Plymouth MA
  Alice Ford, 22 East Broadway, Richmond VA
  Sal Carpenter, 73 6th Street, Boston MA
  `;

const organizedResult = byState(inputString);
console.log(organizedResult);

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

let states = {
  CA: "California",
  MA: "Massachusetts",
  OK: "Oklahoma",
  PA: "Pennsylvania",
  VA: "Virginia",
  AZ: "Arizona",
  ID: "Idaho",
  IN: "Indiana",
};

function byState(str) {
  let lines = str
    .trim()
    .split("\n")
    .map((x) => {
      x = x.split(", ");
      let last = x.pop().split(" ");
      let state = states[last.pop()];
      return [x.concat(last).join(" "), state];
    })
    .sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
  let result = [],
    lastState = "";
  lines.forEach((x) => {
    if (lastState != x[1]) {
      result.push(" " + x[1]);
      lastState = x[1];
    }
    result.push("..... " + x.join(" "));
  });
  return result.join("\r\n").trim();
}
