// seed.js
const Job = require("../models/JobModel");
const connectDb = require('../config/dbConnection');
const { default: mongoose } = require("mongoose");

connectDb();

// Insert Job static data
try {
  Job.insertMany([
    {
      title: "job title 1",
      description: 'Sample job description 1',
      education_description: 
        "education description 1",
      knowledge_description: 
        "knowledge description 1",
      // category_id: new mongoose.Types.ObjectId('65c26377b786a6aacd920c5c'),
      company_name: "Company 1",
      company_description: "company 1 description",
      company_website: "https://www.company1.com",
      company_email: "company1@mail.com",
      job_location_id: new mongoose.Types.ObjectId('65c26385e45c200d244195e0'),
      vacancy: 3,
      nature: 'Full-time',
    },
    {
      title: "job title 2",
      description: 'Sample job description 2',
      education_description: 
        "education description 1",
      knowledge_description: 
        "knowledge description 1",
      // category_id: new mongoose.Types.ObjectId('65c26377b786a6aacd920c5e'),
      company_name: "Company2",
      company_description: "company 2 description",
      company_website: "https://www.company2.com",
      company_email: "company2@mail.com",
      job_location_id: new mongoose.Types.ObjectId('65c26385e45c200d244195e2'),
      vacancy: 6,
      nature: 'Full-time',
    },
    {
      title: "job title 3",
      description: 'Sample job description 3',
      education_description: 
        "education description 1",
      knowledge_description: 
        "knowledge description 1",
      // category_id: new mongoose.Types.ObjectId('65c26377b786a6aacd920c5d'),
      company_name: "Company3",
      company_description: "company 3 description",
      company_website: "https://www.company3.com",
      company_email: "company3@mail.com",
      job_location_id: new mongoose.Types.ObjectId('65c26385e45c200d244195e1'),
      vacancy: 2,
      nature: 'Part-time',
    },
    {
      title: "job title 4",
      description: 'Sample job description 4',
      education_description: 
        "education description 1",
      knowledge_description: 
        "knowledge description 1",
      // category_id: new mongoose.Types.ObjectId('65c26377b786a6aacd920c5e'),
      company_name: "Company4",
      company_description: "company 4 description",
      company_website: "https://www.company4.com",
      company_email: "company4@mail.com",
      job_location_id: new mongoose.Types.ObjectId('65c26385e45c200d244195e2'),
      vacancy: 6,
      nature: 'Full-time',
    },
    
  ]);
  console.log('Static data inserted successfully');
} catch (error) {
  console.error('Error inserting static data:', error);
}
