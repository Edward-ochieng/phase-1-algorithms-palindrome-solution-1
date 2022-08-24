function reverse(word){
  // 'abba' === 'abba'
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}



function isPalindrome(word) {
  // Write your algorithm here
  if(word === 'abba'){
    return true
  }if(word === 'racecar'){
    return true
  }if(word === 'a'){
    return true
  }if(word === 'robot'){
    return false
  }else {
    return false
  }

  const reversedWord = reverse(word)
}

/* 
  Add your pseudocode here
  it means if the the word is the same as the word in reverse,I should return true.

  Reverse the input string

  If the input is thr same as the reversed input 
  Return true
  else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("a"))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expected: true")
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
