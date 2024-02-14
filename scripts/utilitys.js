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
function removeBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementTextValue = element.innerText;
  const value = parseInt(elementTextValue);
  return value;
}
function setTextValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
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
