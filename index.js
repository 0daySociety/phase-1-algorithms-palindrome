function isPalindrome(word) {
  // Write your algorithm here

  let variable =''

  for(i =word.length-1;i>=0 ;i--){
    variable +=word[i]
  }
  if(variable ===word){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

isPalindrome("racecar")

/* 
  Add your pseudocode here
*/
// isPalindrome takes in a string and returns true if the string is palindrome
// initialize an empty variable
// i have an expression that loops through the length of the string  and assign's the new value to the empty string 
// if the new value of the string is the same as the input string then the function returns true else false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs







// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
