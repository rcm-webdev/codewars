//Name: Safen User Input Part I - htmlspecialchars
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
// Mission

// Your mission is to implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: formData are strings
//results: replace '<', '>', '"', '&' to '&lt;', '&gt;' '&quot;' '&amp;'
//example: htmlspecialchars('>') ==> '&gt;'

function htmlspecialchars(formData) {
  const specialChars = {
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "&": "&amp;",
  };

  // Replace special characters one by one
  let result = "";
  for (let i = 0; i < formData.length; i++) {
    const char = formData[i];
    result += specialChars[char] || char;
  }

  return result;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
