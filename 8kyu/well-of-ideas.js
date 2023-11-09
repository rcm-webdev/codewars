//Name: Well of Ideas
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, strings

//-------------------------------------------------------------------------------------------------------------------------
// Description

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function well(x) {
  let goodCount = 0;

  //we run through the array through a loop to see how many times good ideas or bad ideas are present
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodCount++;
    }
  }

  if (goodCount === 1 || goodCount === 2) {
    return "Publish!";
  } else if (goodCount > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
