/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: 
   Date:  

   Filename:   ph_clock.js     

*/

var minsLeft = 30;
// step 5
var secsLeft = 0;
// step 6
var timeLeft = minsLeft * 60 + secsLeft;
// step 7

var clockID = setInterval("countdown()", 1000);

function countdown(){
   var minsLeft = Math.floor(timeLeft / 60);
   var secsLeft = timeLeft  - 60 * minsLeft; 
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   timeLeft--;
}
// step 8 A-G
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend","<br />(Order Expired)");
   clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
