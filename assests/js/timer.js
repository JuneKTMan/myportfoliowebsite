"use strict";


 /* call the show clock function and repeat */
showClock();
setInterval("showClock()", 1000);

/* Creat a function show Clock */
/* store the current date and time */
function showClock() {
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   
   /* Display the local date and local time */
   document.getElementById("currentTime").innerHTML =
   "<span>"+localDate+localTime+"</span>";
   


   /* Create a var for this day */
   var A31Date = nextAug31(thisDay);
   A31Date.setHours(24);

   var days = (A31Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

   /* Change and display the text content by ID*/
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textcontent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
 }

 function nextAug31(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("Aug 31, 2023");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 2);
   return jDate;
}