import { Mongo } from 'meteor/mongo';

// goes in imports\db\AgeGenderCollection.jsx
export const maleAgeGenderCollection = new Mongo.Collection('agegendergroup4');
export const femaleAgeGenderCollection = new Mongo.Collection('agegendergroup2');
export const totalAgeGenderCollection = new Mongo.Collection('agegendergroup3');

