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
  // recognition.continuous = true;

  micBtn.addEventListener("click", micBtnClick);

  function micBtnClick() {
    if (micIcon.classList.contains("fa-microphone")) {
      // start speech recognition

      recognition.start();
    } else {
      // stop speech recognition

      recognition.stop();
    }
  }
  recognition.addEventListener("start", startSpeechRecognition); // recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Speech Recognition Active");
  }
  recognition.addEventListener("end", endSpeechRecognition);
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech Recognition Disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition);

  function resultOfSpeechRecognition(event) {
    const transcript = event.results[0][0].transcript;
    searchFormInput.value = transcript;
  }
} else {
  console.log("Your Browser does not support speech recognition");
}
