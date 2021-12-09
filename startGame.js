function startGame () {
  const hintDetail = document.getElementById("hintInput").value;
  hintLabel.innerHTM +=  hintDetail;
  var word = document.getElementById("word").value;
  document.getElementById('wordCard').remove();
  document.getElementById('hintInput').remove();

  hintCard.innerHTML += '<h5 class="form-label">'+hintDetail+' </h4>';

  var charPosition = 0;
  mainCard.innerHTML +='\
    <label for="letter" class="form-label" id="firstLabel">The word is:</label>\
    <div class="btn-group me-5" role="group" aria-label="First group" id="lettersList"></div>';

  while (charPosition < word.length) {
    lettersList.innerHTML += '\
    <div class="card text-dark bg-light mb-3" id="letterCard"'+charPosition+'" style="max-width: 18rem;">\
      <div class="card-body" id="letter">\
        <h5 class="card-title" id='+charPosition+'>_</h5>\
        <param name="letter" id="'+charPosition+'"x" value="'+word[charPosition]+'">\
      </div>\
    </div>';
    ++charPosition;
  }

  mainCard.innerHTML += '\
  <div class="card-header" id="resultCard">\
    <img src="'+0+'.png" id ="picture" class="rounded mx-auto d-block" alt="picture">\
    <div class="card-header" id=failuresCard>Failures:\
      <label for="letter" class="form-label" id="failures">'+0+'</label>\
      <param name="discovered" id="discovered" value="'+0+'">\
    </div>\
    <label for="letter" class="form-label" id="triedLetters">Tried letters: </label>\
  </div>';

  mainCard.innerHTML +='\
    <div class="card-header" id="wordCard">\
      <param name="word" id="word" value="'+word+'">Try a letter:\
      <input type="Text" id="testLetter"  maxlength="1" title="Please enter only one letter" size="1"/>\
      <a href="#" class="btn btn-outline-dark" onclick="return tryLetter();">Try letter</a>\
    </div>';

  return false;
}
