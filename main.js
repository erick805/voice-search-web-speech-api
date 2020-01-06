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

  const recognition = new SpeechRecognition();

  micBtn.addEventListener("click", micBtnClick);

  function micBtnClick() {
    if (micIcon.classList.contains("fa-microphone")) {
      // start speech recognition
      micIcon.classList.remove("fa-microphone");
      micIcon.classList.add("fa-microphone-slash");
    } else {
      // stop speech recognition
      micIcon.classList.remove("fa-microphone-slash");
      micIcon.classList.add("fa-microphone");
    }
  }
} else {
  console.log("Your Browser does not support speech recognition");
}
