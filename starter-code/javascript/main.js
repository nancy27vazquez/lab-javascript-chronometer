var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  return chronometer;
}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  btnLeft.innerText = "STOP";
  btnLeft.setAttribute("class", "btn stop");
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split");
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start");
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset");
});
