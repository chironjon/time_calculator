const allButtons = document.getElementsByClassName('numpad-button');

// const allDisplays = document.getElementsByClassName('time-display');
const hourInput = document.getElementById('hour-display');
const minInput = document.getElementById('min-display');
const secInput = document.getElementById('sec-display');
const equationDisplay = document.getElementById('equation-display');
const answerDisplay = document.getElementById('answer-display');
// defaults
hourInput.value = 0;
minInput.value = 0;
secInput.value = 0;
equationDisplay.value = "equation here"
answerDisplay.value = "answer here"
// sample equation string --> downtoseconds(inputOne) + downtoseconds(inputTwo) = upfromseconds(seconds)
// const displayedValues = {
//   'hr': 0,
//   'mn': 0,
//   'sc': 0
// };
const termsArr = [];

const buttonPressed = {
  'type': '',
  'last': ''
}

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
  console.log(pressedButton, buttonValue, 'top of function')
  let pressedValue = parseInt(buttonValue);
  // switch(buttonPressed.last){
  //   case "op":
  //     console.log('op pressed last');
  //     break;
  //   case "num":
  //     console.log('num pressed last')
  //     break;
  //   default:
  //     console.log('last button pressed error');
  //     break;
  // }
  switch (pressedButton) {
    
    case "add":
      // buttonPressed.last = 'op';
      termsArr.push(`${hourInput.value}:${minInput.value}:${secInput.value}`);
      termsArr.push(buttonValue);
      console.log(termsArr[termsArr.length-1])
      if(termsArr[termsArr.length-1].length < 2){
        console.log('adding here')
      }
      equationDisplay.value = termsArr.join(' ');
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      console.log("add inside case", timeToSeconds(termsArr[0]));
      break;
    case "sub":
      // buttonPressed.last = 'op';
      termsArr.push(`${hourInput.value}:${minInput.value}:${secInput.value}`);
      termsArr.push(buttonValue);
      equationDisplay.value = termsArr.join(' ');
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      console.log('sub inside case');
      break;
    case "mul":
      // buttonPressed.last = 'op';
      console.log('mul inside case');
      break;
    case "div":
      // buttonPressed.last = 'op';
      console.log('div inside case');
      break;
    case "oneHr":
    case "fivHr":
    case "fifHr":
      // buttonPressed.last = 'num';
      if (hourInput.value == 0) {
        hourInput.value = pressedValue;
        
      }else {
        hourInput.value = parseInt(hourInput.value) + pressedValue;
       }
      console.log('hours', hourInput.value)
      break;
    case "oneMn":
    case "fivMn":
    case "fifMn":
      // buttonPressed.last = 'num';
      if (minInput.value == 0) {
        minInput.value = pressedValue;
        
      }else {
        minInput.value = parseInt(minInput.value) + pressedValue;
       }
      if (minInput.value > 59){
        minInput.value = parseInt(minInput.value) - 60;
        equate('oneHr', 1);
      }
      console.log('minutes', minInput.value)
      break;
    case "oneSc":
    case "fivSc":
    case "fifSc":
      // buttonPressed.last = 'num';
      if (secInput.value == 0) {
        secInput.value = pressedValue;
        
      }else {
        secInput.value = parseInt(secInput.value) + pressedValue;
       }
      if (secInput.value > 59){
        secInput.value = parseInt(secInput.value) - 60;
        equate('oneMn', 1);
      }
      console.log('seconds', secInput.value)
      break;
    case "nonHr":
      // buttonPressed.last = 'num';
      hourInput.value = 0;
      break;
    case "nonMn":
      // buttonPressed.last = 'num';
      minInput.value = 0;
      break;
    case "nonSc":
      // buttonPressed.last = 'num';
      secInput.value = 0;
      break;
    case "equ":
      console.log('equ inside case');
    case "clr":
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      equationDisplay.value = "equation here"
      answerDisplay.value = "answer here"
      timeArr = [];
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


// const one = () => {
//   console.log('1');
//   currentInput.shift();
//   currentInput.push(1);
//   timeInput.value = arrayToTimeString(currentInput);
// };