const numOne = document.getElementById('num-one');
const numTwo = document.getElementById('num-two');
const numThree = document.getElementById('num-three');
const numFour = document.getElementById('num-four');
const numFive = document.getElementById('num-five');
const numSix = document.getElementById('num-six');
const numSeven = document.getElementById('num-seven');
const numEight = document.getElementById('num-eight');
const numNine = document.getElementById('num-nine');
const numZero = document.getElementById('num-zero');

const divButton = document.getElementById('div');
const multButton = document.getElementById('mult');
const subButton = document.getElementById('sub');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

const timeInput = document.getElementById('time-input');


const arrayToTimeString = (arr) => {
  let output = []
  for (let i = 0; i < arr.length; i++){
    output.push(arr[i])
    if (i % 2 === 1 && i < 5) {
      output.push(":")
    }
  }
  //returns string "00:00:00"
  return output.join('');
}

let currentInput = [0,0,0,0,0,0];
let numArr = ["00:00:00", arrayToTimeString(currentInput)];

const timeToSeconds = (time) => {
  let hours = parseInt(time.split(':')[0]) * 60 * 60;
  let minutes = hours + parseInt(time.split(':')[1]) * 60;
  let seconds = minutes + parseInt(time.split(':')[2]);
  // console.log(seconds);
  return seconds;
}

const secondsToTime = (seconds) => {
  let min = Math.floor(seconds / 60);
  let hour = Math.floor(min / 60);
  let realmin = min - hour * 60
  let sec = seconds - min * 60;
  return hour + ":" + realmin + ":" + sec;
}

const add = (arr) => {
  // console.log(arrayToTimeString(arr));
  numArr[0] = secondsToTime(timeToSeconds(numArr[0]) + timeToSeconds(arrayToTimeString(arr)));
  numArr[1] = secondsToTime(timeToSeconds(arrayToTimeString(arr)));
  console.log(numArr);
  timeInput.value = numArr[0];
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum = sum + timeToSeconds(arr[i])
  // }
  // return secondsToTime(sum);
}

const sub = () => console.log('sub');
const mult = () => console.log('mult');
const div = () => console.log('div');
const clear = () => currentInput = [0,0,0,0,0,0];
const equal = () => {
  console.log(arrayToTimeString(currentInput), numArr, currentInput);
}

const one = () => {
  console.log('1');
  currentInput.shift();
  currentInput.push(1);
  timeInput.value = arrayToTimeString(currentInput);
};
const two = () => {
  console.log('2');
  currentInput.shift();
  currentInput.push(2);
  timeInput.value = arrayToTimeString(currentInput);
};
const three = () => {
  console.log('3');
  currentInput.shift();
  currentInput.push(3);
  timeInput.value = arrayToTimeString(currentInput);
};
const four = () => {
  console.log('4');
  currentInput.shift();
  currentInput.push(4);
  timeInput.value = arrayToTimeString(currentInput);
};
const five = () => {
  console.log('5');
  currentInput.shift();
  currentInput.push(5);
  timeInput.value = arrayToTimeString(currentInput);
};
const six = () => {
  console.log('6');
  currentInput.shift();
  currentInput.push(6);
  timeInput.value = arrayToTimeString(currentInput);
};
const seven = () => {
  console.log('7');
  currentInput.shift();
  currentInput.push(7);
  timeInput.value = arrayToTimeString(currentInput);
};
const eight = () => {
  console.log('8');
  currentInput.shift();
  currentInput.push(8);
  timeInput.value = arrayToTimeString(currentInput);
};
const nine = () => {
  console.log('9');
  currentInput.shift();
  currentInput.push(9);
  timeInput.value = arrayToTimeString(currentInput);
};
const zero = () => {
  console.log('0');
  currentInput.shift();
  currentInput.push(0);
  timeInput.value = arrayToTimeString(currentInput);
};

numOne.addEventListener('click', () => one());
numTwo.addEventListener('click', two);
numThree.addEventListener('click', three);
numFour.addEventListener('click', four);
numFive.addEventListener('click', five);
numSix.addEventListener('click', six);
numSeven.addEventListener('click', seven);
numEight.addEventListener('click', eight);
numNine.addEventListener('click', nine);
numZero.addEventListener('click', zero);
addButton.addEventListener('click', () => add(currentInput));
subButton.addEventListener('click', () => sub(currentInput));
divButton.addEventListener('click', () => div(currentInput));
multButton.addEventListener('click', () => mult(currentInput));
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', equal);


// console.log(add(["00:02:35", "00:07:47", "0:2:2"]))