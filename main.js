const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");
const micBtn = searchForm.querySelector("button");
const micIcon = micBtn.querySelector("i");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("Your Browser supports speech recognition");
} else {
  console.log("Your Browser does not support speech recognition");
}
