const input = "00:00:00"

const timeToSeconds = (time) => {
  let hours = parseInt(time.split(';')[0]) * 60 * 60;
  let minutes = hours + parseInt(time.split(':')[1]) * 60
  let seconds = minutes + parseInt(time.split(':')[2])
  console.log(seconds)
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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + timeToSeconds(arr[i])
  }
  return secondsToTime(sum);
}

// const howLongWillThisAllTake = (timeArr) => {


//   addMinSec(timeArr);
// }
console.log(add(["00:02:35", "00:07:47", "0:2:2"]))
// timeToSeconds("00:07:47");
// howLongWillThisAllTake(["00:02:35", "00:07:47"]);