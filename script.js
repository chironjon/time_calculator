const allButtons = document.getElementsByClassName('numpad-button');

const allDisplays = document.getElementsByClassName('time-display');
for(let i = 0; i < allDisplays.length; i++) {
  console.log(allDisplays[i].id)
}
const hourInput = document.getElementById('hour-display');
const minInput = document.getElementById('min-display');
const secInput = document.getElementById('sec-display');

const times = {
  0: ["00", "00", "00"]
}

const buttonPressed = {
  'type': '',
  'unit': '',
  'value': ''
}

console.log("value ->", hourInput.value + ":" + minInput.value + ":" + secInput.value);



const equate = (timeObj, pressedID, pressedValue) => {
  // console.log(pressedID.startsWith("ones"), pressedID.endsWith("Hour"), parseInt(pressedValue));
  console.log(pressedID.startsWith("ones")||pressedID.startsWith("five")||pressedID.startsWith("fift")||pressedID.startsWith("none"))
  switch (pressedID) {
    
    case "add":

      console.log("add");
      break;
    case "sub":
      console.log('sub');
      break;
    case "mult":
      console.log('mult');
      break;
    case "div":
      console.log('div');
      break;
    case "equals":
    case "clear":
      hourInput.value = timeObj[0][0];
      // minInput.value = timeObj[0][1];
      // secInput.value = timeObj[0][2];
      console.log('clear');
      break;
    default:
      // let 
      // console.log(parseInt(pressedValue))
      if(pressedID.startsWith("ones"|"five")){
console.log('win')
      }
      
  //     hourInput.value += parseInt(pressedValue) + parseInt(hourInput.value)
  //     break;
  // }
  // timeObj[0][0] === hourInput.value;
}
}

for(let i = 0; i < allButtons.length; i++){
  console.log(allButtons[i]);
  allButtons[i].addEventListener('click', () => {
    // let {type} = buttonPressed;
    // type = allButtons[i].id;
    equate(times, allButtons[i].id, allButtons[i].innerHTML)
  });
}



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