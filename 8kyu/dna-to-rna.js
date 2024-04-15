//Name: DNA to RNA
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//Parameters: dna is a string and all values will always be capitalized and there will always be a value
//Results: replace all 'T' within dna string with 'U'
//Examples: 'TTGCAT' ==> 'UUGCAU'
//Pseudo code:
//use replaceAll method for string

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//as mentioned above
