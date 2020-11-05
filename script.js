const allButtons = document.getElementsByClassName('numpad-button');

const hourInput = document.getElementById('hour-display');
const minInput = document.getElementById('min-display');
const secInput = document.getElementById('sec-display');

const times = {
  0: ["00", "00", "00"]
}

const buttonPressed = {
  'type': '',
  'value': ''
}

// const timeMath = buttonPressed;

console.log("value ->", hourInput.value);

const equate = (timeObj, button) => {
  console.log(timeObj, button)
}

for(let i = 0; i < allButtons.length; i++){
  console.log(allButtons[i]);
  allButtons[i].addEventListener('click', () => {
    const {type, value} = buttonPressed;

    equate(times, buttonPressed)
  });
}
  // switch (obj['type']) {
  //   case "add":
  //     console.log("add", timeInput.value);
  //     break;
  //   case "sub":
  //     console.log('sub');
  //     break;
  //   case "mult":
  //     console.log('mult');
  //     break;
  //   case "div":
  //     console.log('div');
  //     break;
  //   case "equals":
  //   case "clear":
  //   default:
  //     timeInput.value = obj.timeArray[0]
  //     console.log('how');
  //     return;
  // }
  // switch (obj['buttonPressed']){
  //   case 0:
  //     break;
  //   case 1:
  //     break;
  //   case 2:
  //     break;
  //   case 3:
  //     break;
  //   case 4:
  //     break;
  //   case 5:
  //     break;
  //   case 6:
  //     break;
  //   case 7:
  //     break;
  //   case 8:
  //     break;
  //   case 9:
  //     break;
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


// const clear = () => {
//   // numArr = defaults.numberArray;
//   timeInput.value = numArr[0]
//   console.log('clear', numArr)
// };

// const equal = () => {
//   console.log(arrayToTimeString(currentInput), numArr, currentInput);
// };

// const one = () => {
//   console.log('1');
//   currentInput.shift();
//   currentInput.push(1);
//   timeInput.value = arrayToTimeString(currentInput);
// };



// numOne.addEventListener('click', () => one());
// addButton.addEventListener('click', () => {
//   timeMath.operator = "add"
//   equate(timeMath)
// });


// console.log(add(["00:02:35", "00:07:47", "0:2:2"]))