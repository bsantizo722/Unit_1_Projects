"use strict";
// step 4^
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Brandon santizo
   Date:   01/16/2020 

*/
// step 5
var thisTime = new Date ();
// step 6
var timeStr = thisTime.toLocaleString();
// step 7
document.getElementById("timeStamp").innerHTML = timeStr;
// step 8 
var thisHour = thisTime.getHours();
// step 9 
var thisMonth = thisTime.getMonth();
// step 10
var mapNum = (2 * thisMonth + thisHour) % 24;
// step 11
var imgStr = "<img src= 'sd_sky" + mapNum + ".png'/>";
 
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
