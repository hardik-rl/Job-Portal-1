// seed.js
const JobCategory = require('../models/JobCategoryModel');
const connectDb = require('../config/dbConnection');

connectDb();

// Insert Category static data
try {
  JobCategory.insertMany([
    { name: 'Account and Finance' },
    { name: 'Production' },
    { name: 'Maintenance' },
    { name: 'Human Resources' },
    { name: 'Sales & Business Development' },
    { name: 'Packaging' },
    { name: 'Procurement' },
    { name: 'Administration' },
    { name: 'Logistics' },
    { name: 'Compliance' },
    { name: 'R&D' },
    { name: 'Quality' },
    { name: 'Documentation' },
    { name: 'Raw Material Yard (RMY)/Stores' },
    { name: 'Marketing & Corporate Communication' },
    { name: 'Operations' },
    { name: 'Information Technology' },
    { name: 'Projects' },
    { name: 'Strategy & Business Analytics' },
  ]);
  console.log('Static data inserted successfully');
} catch (error) {
  console.error('Error inserting static data:', error);
}
