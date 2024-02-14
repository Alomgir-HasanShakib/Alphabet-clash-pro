function handleKeyPress(event) {
  // capture the player pressed key

  const playerPressed = event.key;

  //  contain expected alphabets

  const currentAlphabetsElement = document.getElementById("current-alphabet");
  const currentAlphabets = currentAlphabetsElement.innerText;
  const expectedAlphabet = currentAlphabets.toLowerCase();

  // match the player pressed alphabet and the expected alphabet

  if (playerPressed === expectedAlphabet) {
    // update scores
    // get the current scores

    const currentScores = getTextValueById("live-scores");

    const newScores = currentScores + 1;

    setTextValueById("live-scores", newScores);

    // start a new round

    removeBgColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextValueById("life");
    const newLife = currentLife - 1;
    setTextValueById("life", newLife);

    if (newLife <= 0) {
      gameOver();
    }
  }
}
// capture the keyboard key pressed
document.addEventListener("keyup", handleKeyPress);

function continueGame() {
  // generate random alphabet
  const alphabet = getARandomAlphabet();
  // getting the rcurrent alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  setBgColorById(alphabet);
}

function play() {
  // hide everything without playgoround 
  
  hideElementsById("home-section");
  hideElementsById("scores-section");
  showElementById("playground-section");

  // reset scores and life 
  setTextValueById("life", 5);
  setTextValueById("live-scores", 0);

  continueGame();
}
function gameOver() {
  hideElementsById("playground-section");
  showElementById("scores-section");
}
