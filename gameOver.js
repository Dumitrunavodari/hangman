function gameOver () {
  var word = document.getElementById("word").value;
  document.getElementById('hintCard').remove();
  document.getElementById('wordCard').remove();
  var letterPosition = 0;
  while(letterPosition < word.length) {
      document.getElementById(letterPosition).innerHTML = word[letterPosition];
    ++letterPosition;
  }
  mainCard.innerHTML +='\
    <div class="card-header" id="wordCard">\
      <a href="#" class="btn btn-outline-dark" onclick="return location.reload();">Play again</a>\
    </div>';
  return false;
}
