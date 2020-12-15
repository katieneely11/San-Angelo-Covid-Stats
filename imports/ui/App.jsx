import React from 'react';
import { maleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { femaleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { totalAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { AgeGenderGroup } from '/imports/ui/AgeGender.jsx';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {
  const totalCases = useTracker(() => totalAgeGenderCollection.find({}).fetch());
  return (
  <div>
  <h1 id ="header">San Angelo COVID-19 Statistics</h1>
     <div id = "headertwo">
     <h1>
     Insert Graph Here
     </h1>
    </div>
	
	<div id = "demographics">
		<div id = "demo-labels">
		<h2>Total Cases (Age Ranges/Number Of Cases): </h2>
		   <ul>
			<li>0-10: </li>
			<li>11-20: </li>
			<li>21-30: </li> 
			<li>31-40: </li>
			<li>41-50: </li>
			<li>51-60: </li>
			<li>61+: </li>
			<li>Total: </li>
			</ul>
		</div>
		<div id = "demos">
			<ul>
			{ totalCases.map(agegendergroup => <AgeGenderGroup key={ agegendergroup._id } agegendergroup = { agegendergroup }/>) }
			</ul>
		</div>
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
  };