
const checkVoices = () =>{
  const voices = synth.getVoices();
  const voicesName = voices.reduce((acc, item)=>{
    if(item.lang !='ko-KR') return acc
    console.log(item)
    acc.push(item.name)
    return acc
  }, [])
  console.log(voicesName)
  // const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  // const selectedOption =
  //   voiceSelect.selectedOptions[0].getAttribute("data-name");
  // for (let i = 0; i < voices.length; i++) {
  //   if (voices[i].name === selectedOption) {
  //     utterThis.voice = voices[i];
  //   }
  // }
}


const textInputField = document.querySelector("#text-input")
const form = document.querySelector("#form")
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()

form.onsubmit = (event) => {
  event.preventDefault()
  ourText = textInputField.value
  utterThis.text = ourText
  synth.speak(utterThis)
  textInputField.value = ""
}