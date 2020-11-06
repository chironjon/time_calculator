const allButtons = document.getElementsByClassName('numpad-button');

// const allDisplays = document.getElementsByClassName('time-display');
const hourInput = document.getElementById('hour-display');
const minInput = document.getElementById('min-display');
const secInput = document.getElementById('sec-display');

const displayedValues = {
  'hr': 0,
  'mn': 0,
  'sc': 0
};


const times = {
  0: ["00", "00", "00"],
  1: ["00", "00", "00"]
}

const buttonPressed = {
  'type': '',
  'last': ''
}

hourInput.value = 0;
minInput.value = 0;
secInput.value = 0;

console.log("value ->", hourInput.value + ":" + minInput.value + ":" + secInput.value);

const equate = (pressedValue) => {
  console.log(buttonPressed, 'top of function')
  switch (buttonPressed.type) {
    
    case "add":
      times[0] = [hourInput.value, minInput.value, secInput.value];
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      buttonPressed.last = 'op';
      console.log("add inside case value", times);
      break;
    case "sub":
      console.log('sub inside case');
      buttonPressed.last = 'op';
      break;
    case "mul":
      console.log('mul inside case');
      buttonPressed.last = 'op';
      break;
    case "div":
      console.log('div inside case');
      buttonPressed.last = 'op';
      break;
    case "nonHr":
      hourInput.value = 0;
      break;
    case "oneHr":
    case "fivHr":
    case "fifHr":
      if (hourInput.value == 0) {
        hourInput.value = parseInt(pressedValue);
      } else {
        hourInput.value = parseInt(hourInput.value) + parseInt(pressedValue);
      }
      buttonPressed.last = 'num';
      break;
    case "nonMn":
      minInput.value = 0;
      break;
    case "oneMn":
    case "fivMn":
    case "fifMn":
      if (minInput.value == 0) {
        minInput.value = parseInt(pressedValue);
      } else {
        minInput.value = parseInt(minInput.value) + parseInt(pressedValue);
      }
      buttonPressed.last = 'num';
      break;
    case "nonSc":
      secInput.value = 0;
      break;
    case "oneSc":
    case "fivSc":
    case "fifSc":
      if (secInput.value == 0) {
        secInput.value = parseInt(pressedValue);
      } else {
        secInput.value = parseInt(secInput.value) + parseInt(pressedValue);
      }
      buttonPressed.last = 'num';
      break;
    case "equ":
      console.log('equ inside case');
    case "clr":
      hourInput.value = 0;
      minInput.value = 0;
      secInput.value = 0;
      buttonPressed.last = '';
      break;
    default:
      console.log('error')
      break;
  }
}
// Button listener assignment loop
for(let i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', (e) => {
    buttonPressed.type = e.target.id;
    equate(allButtons[i].innerHTML);
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

// let currentInput = [0,0,0,0,0,0];
// let numArr = defaults.numberArray;

// const timeToSeconds = (time) => {
//   let hours = parseInt(time.split(':')[0]) * 60 * 60;
//   let minutes = hours + parseInt(time.split(':')[1]) * 60;
//   let seconds = minutes + parseInt(time.split(':')[2]);
//   return seconds;
// }

// const secondsToTime = (seconds) => {
//   let min = Math.floor(seconds / 60);
//   let hour = Math.floor(min / 60);
//   let realmin = min - hour * 60
//   let sec = seconds - min * 60;
//   return hour + ":" + realmin + ":" + sec;
// }



// const one = () => {
//   console.log('1');
//   currentInput.shift();
//   currentInput.push(1);
//   timeInput.value = arrayToTimeString(currentInput);
// };