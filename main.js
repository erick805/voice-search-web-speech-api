const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("Your Browser supports speech recognition");

  searchForm.insertAdjacentHTML(
    "beforeend",
    '<button type="button"><i class="fa fa-microphone"></i></button>'
  );

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.querySelector("i");
} else {
  console.log("Your Browser does not support speech recognition");
}
