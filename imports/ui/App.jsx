import React from 'react';
import { maleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { femaleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { totalAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { AgeGenderGroup } from '/imports/ui/AgeGender.jsx';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => (
  const maleAgeGenderData =  useTracker(() => maleAgeGenderCollection.find({}).fetch());
 const femaleAgeGenderData =  useTracker(() => femaleAgeGenderCollection.find({}).fetch());
 const totalAgeGenderData =  useTracker(() => totalAgeGenderCollection.find({}).fetch());
 
 // collect references to user input boxes
 var button = document.getElementById("button");
 var button2 = document.getElementById("button2");
 var email = document.getElementById("emailBox");
 var emailType = document.getElementById("emailType");

 // style the email input box
 email.style.height = "20px";
 email.style.width = "200px";

 // Function to collect info from "Enter Info" box
 var onButtonClick = function() {
   var age = document.getElementById("age").value;
   var gender = document.getElementById("gender").value;
   calculateResults(age,gender);
 };
 // Function to collect info from email submit box
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
 var calculateResults = function(age, gender) {
   var results = document.getElementById("results");
   var posInArray = 0;
    if (age === "11-20") {
	    posInArray = 1;
    }
    else if (age === "21-30") {
		posInArray = 2;
    }
	else if (age === "31-40") {
		posInArray = 3;
	}
	else if (age === "41-50") {
		posInArray = 4;
	}
	else if (age === "51-60") {
		posInArray = 5;
	}
	else if (age === "61+") {
		posInArray = 6;
	}
	
   if (gender === "male") {
	   results.textContent = " " + toString((maleAgeGenderData[posInArray] / totalAgeGenderData[posInArray]) * 100) + "%";
   }
   else {
	   results.textContent = " " + toString((femaleAgeGenderData[posInArray] / totalAgeGenderData[posInArray]) * 100) + "%";
   }
 };
 
 // event listener for "Enter Info" submit button
 button.addEventListener("click",onButtonClick);

 // event listener for email submit button
 button2.addEventListener("click",onButton2Click);
 
  return (
  <div>
  <h1 id ="header">San Angelo COVID-19 Statistics</h1>
     <div id = "headertwo">
     <h1>
     Insert Graph Here
     </h1>
    </div>
	
	<div id = "demographics">
    <h1>Insert More Graphs Here</h1>
    </div>
	
	<div id="info-input">
      <h2>Enter Info</h2>
      <label>What is your age?
      <select id="age">
        <option value="0-10">0-10</option>
        <option value="11-20">11-20</option>
        <option value="21-30">21-30</option>
        <option value="31-40">31-40</option>
        <option value ="41-50">41-50</option>
        <option value="51-60">51-60</option>
        <option value="61+">61+</option>
        </select>
      </label>
      <br></br>
	  <br></br>
      <label>What is your gender?
      <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
		</label>
        <br></br>
        <br></br>
        <button id="button" type="button">Submit</button>
        <br></br>
		<br></br>
        <span>Percentage of total COVID-19 cases in San Angelo from your age/gender group:</span><span id="results"></span>
        </div>
		
		<div id="email">
      <h2>Sign Up With Email</h2>
      <div class="emailSelect">
      <input id ="emailBox" type="text"></input>
      </div>
      <div class = "emailSelect">
      <select id="emailType">
        <option value="alerts">New Case Alerts</option>
        <option value="charts">Receive Graphical Charts</option>
      </select>
      </div>
      <br></br>
      <button id ="button2">Submit</button>
      <br></br><br></br>
      <p id = "emailText">Sign up to keep up to date with San Angelo COVID-19 cases or to receive the charts on this site.</p>
    </div>
  </div>
  );
);