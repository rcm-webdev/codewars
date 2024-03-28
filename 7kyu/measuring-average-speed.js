//Name: Measuring Average Speed
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

//-------------------------------------------------------------------------------------------------------------------------

//Code + Pseudo Code

function calculateSpeed(distance, time) {
  const conversion = 2.23694; //one metre per second is 2.23694 miles per hour

  //parse strings into numerical values (integer)

  let distanceInput = parseFloat(distance);
  let timeInput = parseFloat(time);

  //need to handle units
  let distanceInMetres = distance.includes("km")
    ? distanceInput * 1000
    : distanceInput;
  let timeInSeconds = time.includes("min") ? timeInput * 60 : timeInput;

  //calculate metric speed
  let metricSpeed = distanceInMetres / timeInSeconds;
  let imperialSpeed = metricSpeed * conversion;

  //round value
  return `${Math.round(imperialSpeed)}mph`;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//  same as mentioned above
