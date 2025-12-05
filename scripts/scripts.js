/* 
Author: Donald Moody
File Name: styles.css
Date: 11/16/2025
*/


//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");


//Hamburger menu function


function menu() {
   var navlinks = document.getElementById("nav-links");
   var menuicon = document.getElementById("icon");
   if (navlinks.style.display === "block") {
       navlinks.style.display = "none";
       menuicon.style.color = "#2a1f14";
   } else {
       navlinks.style.display = "block";
       menuicon.style.color = "#f6eee4";
   }
}


function ans1() {
 var answer = document.getElementById("answer1");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg1;
   answer.style.display = "block";
 }
}


function ans2() {
 var answer = document.getElementById("answer2");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg2;
   answer.style.display = "block";
 }
}


function ans3() {
 var answer = document.getElementById("answer3");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg3;
   answer.style.display = "block";
 }
}


function ans4() {
 var answer = document.getElementById("answer4");
 if (answer.style.display === "block") {
   answer.style.display = "none";
 } else {
   answer.innerHTML = msg4;
   answer.style.display = "block";
 }
}
