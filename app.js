// // var min = 00;
// // var sec = 00;
// // var msec = 00;
// // var interval;
// // var getmin = document.getElementById("min");
// // var getsec = document.getElementById("sec");
// // var getmsec = document.getElementById("msec");
// // var a
// // function started() {
// //   interval = setInterval(function () {
// //     msec++;
// //     getmsec.innerHTML = msec;
// //     if (msec >= 100) {
// //       sec++;
// //       getsec.innerHTML = sec;
// //       msec = 0;
// //     } else if (sec >= 60) {
// //       min++;
// //       getmin.innerHTML = min;
// //       sec = 0;
// //     }
// //   }, 10);
// //   document.getElementById("stop").disabled = false;

// // }

// // function pause() {
// //   clearInterval(interval);
// //   document.getElementById("play").disabled = true;
// // }


// // function reset() {
// //   min = 00;
// //   sec = 00;
// //   msec = 00;

// //   getmin.innerHTML = min;
// //   getsec.innerHTML = sec;
// //   getmsec.innerHTML = msec;
// //   pause()
// //   document.getElementById("start").disabled =false
// // }




var min = 00;
var sec = 00;
var msec = 00;
var interval;
var lapCount = 0;
var lapArray = [];
var getmin = document.getElementById("min");
var getsec = document.getElementById("sec");
var getmsec = document.getElementById("msec");
var lapList = document.getElementById("lapList");

function started() {
  interval = setInterval(function () {
    msec++;
    getmsec.innerHTML = (msec < 10) ? "0" + msec : msec;
    if (msec >= 100) {
      sec++;
      getsec.innerHTML = (sec < 10) ? "0" + sec : sec;
      msec = 0;
    } else if (sec >= 60) {
      min++;
      getmin.innerHTML = (min < 10) ? "0" + min : min;
      sec = 0;
    }
  }, 10);
  document.getElementById("stop").disabled = false;
  document.getElementById("animateCircle").classList.add("addanimation");
  document.getElementById("lap").disabled = true;
  document.getElementById("play").disabled = true;


  
}

function pause() {
  clearInterval(interval);
  document.getElementById("play").disabled = true;
  document.getElementById("animateCircle").classList.remove("addanimation");
}

function reset() {
  min = '00';
  sec =  '00';
  msec = '00';
  lapCount = '0';
  lapArray = [];

  getmin.innerHTML = min;
  getsec.innerHTML = sec;
  getmsec.innerHTML = msec;
  lapList.innerHTML = "";
  pause();
  document.getElementById("start").disabled = false;
  document.getElementById("animateCircle").classList.remove("addanimation");
}

function lap() {
  lapArray[lapCount] = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
  var lapItem = document.createElement("li");
  lapItem.innerHTML = "Lap " + (lapCount + 1) + ": " + lapArray[lapCount];
  lapList.appendChild(lapItem);

  lapCount++;
}
