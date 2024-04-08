//Name: Trilingual Democracy
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

//     When all three are native speakers of the same language, it also becomes their group's language.5a

//     When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

//     When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

// Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

// Examples:9

//     The language for a group of three native French speakers is French: FFF → F

//     A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K

//     When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I

//-------------------------------------------------------------------------------------------------------------------------

//Code + Pseudo Code

function trilingualDemocracy(group) {
  // Count occurrences of each language in the group
  let languageCounts = {
    D: 0, // German
    F: 0, // French
    I: 0, // Italian
    K: 0, // Romansh
  };

  // Loop through the group and count occurrences of each language
  for (let i = 0; i < group.length; i++) {
    let language = group[i];
    languageCounts[language]++;
  }

  // Find the majority language(s) and minority language
  let majorityLanguage = null;
  let minorityLanguage = null;
  let majorityCount = 0;

  for (let language in languageCounts) {
    if (languageCounts[language] > majorityCount) {
      majorityLanguage = language;
      majorityCount = languageCounts[language];
    }
    if (languageCounts[language] === 1) {
      minorityLanguage = language;
    }
  }

  // Implement the rules

  // When all three are native speakers of the same language
  if (majorityCount === 3) {
    return majorityLanguage;
  }

  // When two are native speakers of the same language, but the third person speaks a different language
  if (majorityCount === 2 && minorityLanguage !== null) {
    return minorityLanguage;
  }

  // When native speakers of three different languages meet
  // Find the remaining language
  let remainingLanguage = null;
  for (let language in languageCounts) {
    if (languageCounts[language] === 0) {
      remainingLanguage = language;
      break;
    }
  }
  return remainingLanguage;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//clever way of using XOR operation
function trilingualDemocracy(group) {
  return String.fromCharCode(
    group.charCodeAt(0) ^ group.charCodeAt(1) ^ group.charCodeAt(2)
  );
}
