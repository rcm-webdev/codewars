//Name: L1: Bartender, drinks!
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//my initial code: but no DRY

function getDrinkByProfession(param) {
  //Parameters: strings, case sensitive
  //Results: input string and return the associated value as mentioned on the table above.
  //Example: pRogRAMmer ==> 'Hispter Craft Beer'
  //Psuedo Code: toLoweCase to deal with case sensitivity, then returning appropriate responses (conditionals?), but lets try to make this code DRY

  if (param.toLowerCase() === "jabroni") {
    return "Patron Tequila";
  } else if (param.toLowerCase() === "school counselor") {
    return "Anything with Alcohol";
  } else if (param.toLowerCase() === "programmer") {
    return "Hipster Craft Beer";
  } else if (param.toLowerCase() === "bike gang member") {
    return "Moonshine";
  } else if (param.toLowerCase() === "politician") {
    return "Your tax dollars";
  } else if (param.toLowerCase() === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}

//conditionals made this hard to read and not maintainable
//Refactor Pseudo Code: create an object library that way we can always add a new profession or remove one without worrying about the following code

//param (string): The profession of the person as a string. It's expected to possibly have varying cases (uppercase, lowercase, mixed).
//Returns (string): The drink associated with the given profession. If the profession isn't listed, the function returns "Beer".
//Examples: mentioned above
//Psuedo code:
//create an object mapping each profession with corresponding drink
//create a variable that will lookup the lowercase profession in recently created object
//if object (profession) exists then return corresponding drink, otherwise, return 'Beer'

function getDrinkByProfession(param) {
  const drinkByProfession = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };

  const drink = drinkByProfession[param.toLowerCase()];

  return drink || "Beer";
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

const getDrinkByProfession = (profession) =>
  drinks[profession.toLowerCase()] || "Beer";
