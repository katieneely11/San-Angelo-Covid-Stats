// Software Engineering Project 
// Kaitlyn Neely and Darian Espinoza 

/* document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   
}, false); */
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var email = document.getElementById("emailBox");
email.style.height = "20px";
email.style.width = "200px";
var emailType = document.getElementById("emailType");

// Function to collect info from "Enter Info" box
var onButtonClick = function() {
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  calculateResults(age,gender);
};
// Function to collect data from 
var onButton2Click = function() {
   var userEmail = document.getElementById("emailBox").value;
   var userEmailChoice = document.getElementById("emailType").value;
   var emailText = document.getElementById("emailText");
   if (userEmailChoice === "alerts") {
     // call function for adding email to email list (not made yet)
     emailText.textContent = userEmail + " added to emailing list! You will be notified when new COVID-19 data is received by us.";
   }
   else {
     // call function for sending one time email to user containing graphical data (not made yet)
     emailText.textContent = "Graphical charts sent to " + userEmail + "!";
   }
};
// Function will take the age and gender and determine 
var calculateResults = function(age, gender) {
  var results = document.getElementById("results");
  results.textContent = " 5%"; // just a test to make sure it actually adds results to the page
};

// event listener for "Enter Info" submit button
button.addEventListener("click",onButtonClick);

// event listener for email submit button
button2.addEventListener("click",onButton2Click);