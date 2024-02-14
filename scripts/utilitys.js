function hideElementsById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
  return element;
}

function getARandomAlphabet() {
  // step1: get or create a random alphabet
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   step2: generate a random numbers between 1-25 for accessing alphabets index numbers
  const randomNumbers = Math.random() * 25;
  const index = Math.round(randomNumbers);
  const alphabet = alphabets[index];
  return alphabet;
}
