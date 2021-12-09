function wining () {

  document.getElementById('hintCard').remove();
  document.getElementById("picture").src = "Good_Job.png";
  document.getElementById('wordCard').remove();
  mainCard.innerHTML +='\
    <div class="card-header" id="wordCard">\
      <a href="#" class="btn btn-outline-dark" onclick="return location.reload();">Play again</a>\
    </div>';
  return false;
}
