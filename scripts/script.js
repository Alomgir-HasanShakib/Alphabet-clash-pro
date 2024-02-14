function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

   setBgColorById(alphabet);
}

function play() {
  hideElementsById("home-section");
  showElementById("playground-section");
  continueGame();
}
