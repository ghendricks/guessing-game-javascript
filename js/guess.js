var random;
console.log("Starting");
random = Math.floor(Math.random() * 100);

function doGuess(){
  console.log("clicked " + random);
  var guess = parseInt(document.getElementById('guess').value);
  console.log(guess);
  if (guess === random) {
    document.getElementById('output').className = "correct";
    document.getElementById('output').innerHTML = "Congratulations!!!";
  }
  else if (guess > random){
    document.getElementById('output').className = "incorrect";
    document.getElementById('output').innerHTML = "Try lower";
  }
  else {
    document.getElementById('output').className = "incorrect";
    document.getElementById('output').innerHTML = "Try higher";
  }
  document.getElementById('guess').focus();
  document.getElementById('guess').select();
}

