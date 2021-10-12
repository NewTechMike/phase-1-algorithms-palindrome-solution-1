function isPalindrome(word) {
  // Write your algorithm here
  const myArray = word.split("")
  const backwards = myArray.slice().reverse()
  for(let i in myArray){
    if(myArray[i] !== backwards[i]){     
      return false      
    }
    else {
      return true
    }
  }
}


/* 
  Add your pseudocode here

  The function "isPalindrome", takes a string (a word)
  and returns true if it is a Palindrome

  A word is considered a Palindrome if its the same forward
  and backward

  The code should compare the given word, to the word typed
  out backwards. If these two are the same, return true
  return false otherwise

  To write it backwards, turn the word into an Array
  then map it to another array starting from the last
  letter then iterate backwards
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("avenger"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
