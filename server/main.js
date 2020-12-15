import { Meteor } from 'meteor/meteor';
import { maleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { femaleAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { totalAgeGenderCollection } from '/imports/db/AgeGenderCollection';
import { AgeGenderGroup } from '/imports/ui/AgeGender.jsx';
import { useTracker } from 'meteor/react-meteor-data';

// goes in server\main.js
const initializeMaleAgeGender = count => maleAgeGenderCollection.insert({ amountOfCases: count });
const initializeFemaleAgeGender = count => femaleAgeGenderCollection.insert({ amountOfCases: count });
const initializeTotalAgeGender = count => totalAgeGenderCollection.insert({ amountOfCases: count });

Meteor.startup(() => {
	if (maleAgeGenderCollection.find().count() === 0) {
		[
		 20,
		 27,
		 72,
		 36,
		 49,
		 26,
		 54,
		 284
		].forEach(initializeMaleAgeGender);
	}
    if (femaleAgeGenderCollection.find().count() === 0) {
		[
		 20,
		 27,
		 89,
		 61,
		 48,
		 44,
		 44, 
		 333
		].forEach(initializeFemaleAgeGender);
	}
	if (totalAgeGenderCollection.find().count() === 0) {
		[
		 40,
		 54,
		 161,
		 97,
		 97,
		 70,
		 98,
		 617
		].forEach(initializeTotalAgeGender);
	}
});