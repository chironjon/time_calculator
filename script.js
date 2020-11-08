const allButtons = document.getElementsByClassName('numpad-button');
// const allDisplays = document.getElementsByClassName('time-display');
const hourInput = document.getElementById('hour-display');
const minInput = document.getElementById('min-display');
const secInput = document.getElementById('sec-display');
const equationDisplay = document.getElementById('equation-display');
const answerDisplay = document.getElementById('answer-display');

// defaults
let termsArr = ["0:0:0"];
let buttonPressed = {'type': '', 'last': ''};
hourInput.value = 0;
minInput.value = 0;
secInput.value = 0;
equationDisplay.value = termsArr[0];
answerDisplay.value = termsArr[0];

const timeToSeconds = (time) => {
  let hours = parseInt(time.split(':')[0]) * 60 * 60;
  let minutes = hours + parseInt(time.split(':')[1]) * 60;
  let seconds = minutes + parseInt(time.split(':')[2]);
  return seconds;
}

const secondsToTime = (seconds) => {
  let min = Math.floor(seconds / 60);
  let hour = Math.floor(min / 60);
  let realmin = min - hour * 60
  let sec = seconds - min * 60;
  return hour + ":" + realmin + ":" + sec;
}

const equate = (pressedButton, buttonValue) => {
  let pressedValue = parseInt(buttonValue);
  switch (pressedButton) {
    
    case "add":
      termsArr.push(buttonValue);
      termsArr.push(`${hourInput.value}:${minInput.value}:${secInput.value}`);
      equationDisplay.value = termsArr.join(' ');
      answerDisplay.value = secondsToTime(timeToSeconds(termsArr[0]) + timeToSeconds(termsArr[2]));
      for (let i = 0; i < termsArr.length; i++){}
      termsArr = [answerDisplay.value];
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      console.log("add inside case");
      break;
    case "sub":
      termsArr.push(buttonValue);
      termsArr.push(`${hourInput.value}:${minInput.value}:${secInput.value}`);
      equationDisplay.value = termsArr.join(' ');
      answerDisplay.value = secondsToTime(timeToSeconds(termsArr[0]) - timeToSeconds(termsArr[2]));
      termsArr = [answerDisplay.value];
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      console.log('sub inside case');
      break;
    case "mul":
      console.log('mul inside case');
      break;
    case "div":
      console.log('div inside case');
      break;
    case "oneHr":
    case "fivHr":
    case "fifHr":
      if (hourInput.value == 0) {
        hourInput.value = pressedValue;
        
      } else {
        hourInput.value = parseInt(hourInput.value) + pressedValue;
      }
      break;
    case "oneMn":
    case "fivMn":
    case "fifMn":
      if (minInput.value == 0) {
        minInput.value = pressedValue;
        
      } else {
        minInput.value = parseInt(minInput.value) + pressedValue;
      }
      if (minInput.value > 59){
        minInput.value = parseInt(minInput.value) - 60;
        equate('oneHr', 1);
      }
      break;
    case "oneSc":
    case "fivSc":
    case "fifSc":
      if (secInput.value == 0) {
        secInput.value = pressedValue;
        
      } else {
        secInput.value = parseInt(secInput.value) + pressedValue;
      }
      if (secInput.value > 59){
        secInput.value = parseInt(secInput.value) - 60;
        equate('oneMn', 1);
      }
      break;
    case "nonHr":
      hourInput.value = 0;
      break;
    case "nonMn":
      minInput.value = 0;
      break;
    case "nonSc":
      secInput.value = 0;
      break;
    case "equ":
      console.log('equ inside case');
    case "clr":
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      termsArr = ["0:0:0"];
      equationDisplay.value = termsArr[0];
      answerDisplay.value = termsArr[0];
      buttonPressed = {
        'type': '',
        'last': ''
      }
      break;
    default:
      console.log('error')
      break;
  }
}
// Button listener assignment loop
for(let i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', (e) => {
    equate(e.target.id, e.target.innerHTML);
  });
}

// display listener loop
// for(let i = 0; i < allDisplays.length; i++) {
//   console.log(allDisplays[i].id)
// }

// const arrayToTimeString = (arr) => {
//   let output = []
//   if(arr.length===0)"00:00:00";
//   for (let i = 0; i < arr.length; i++){
//     output.push(arr[i])
//     if (i % 2 === 1 && i < 5) {
//       output.push(":")
//     }
//   }
//   return output.join('');
// }
