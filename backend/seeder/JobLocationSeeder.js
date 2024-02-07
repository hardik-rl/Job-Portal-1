// seed.js
const JobLocation = require("../models/JobLocationModel");
const connectDb = require('../config/dbConnection');

connectDb();

// Insert JobLocation static data
try {
  JobLocation.insertMany([
    { name: 'Mumbai - HO' },
    { name: 'Akkalkot Road - Solapur' },
    { name: 'Chincholi - Solapur' },
    { name: 'Ankhleshwar' },
    { name: 'Panoli' },
    { name: 'Indore' },
    { name: 'Dahej' },
  ]);
  console.log('Static data inserted successfully');
} catch (error) {
  console.error('Error inserting static data:', error);
}
