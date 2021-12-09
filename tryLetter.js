function tryLetter () {
  var testLetter = document.getElementById("testLetter").value;
  var word = document.getElementById("word").value;
  var letterPosition = 0;
  var letterFound = 0;
  while(letterPosition < word.length) {
    if (testLetter === word[letterPosition] ) {
      document.getElementById(letterPosition).innerHTML = testLetter;
      letterFound = 1;
      ++document.getElementById("discovered").value;
    }
    if (document.getElementById("discovered").value == word.length) {
      return wining();
   }
    ++letterPosition;
  }
  if(!letterFound) {
    ++document.getElementById("failures").innerHTML;
    document.getElementById("picture").src = document.getElementById("failures").innerHTML+".png";
    triedLetters.innerHTML +=testLetter;
    if(document.getElementById("failures").innerHTML == 7) {
      triedLetters.innerHTML +=". ";
      return gameOver();
    } else {
      triedLetters.innerHTML +=", ";
    }
  }
  return false;
}
