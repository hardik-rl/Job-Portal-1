// seed.js
const Company = require("../models/CompanyModel");
const connectDb = require("../config/dbConnection");

connectDb();

// Insert Company static data
try {
  Company.insertMany([
    {
      name: "Company1",
      logo_url: "https://picsum.photos/100/100",
      description: "Company1 description",
      website: "https://www.company1.com",
      email_id: "company1@company.com",
    },
    {
      name: "Company2",
      logo_url: "https://picsum.photos/100/100",
      description: "Company2 description",
      website: "https://www.company2.com",
      email_id: "company2@company.com",
    },
    {
      name: "Company3",
      logo_url: "https://picsum.photos/100/100",
      description: "Company3 description",
      website: "https://www.company3.com",
      email_id: "company3@company.com",
    },
    {
      name: "Company4",
      logo_url: "https://picsum.photos/100/100",
      description: "Company4 description",
      website: "https://www.company4.com",
      email_id: "company4@company.com",
    },
    {
      name: "Company5",
      logo_url: "https://picsum.photos/100/100",
      description: "Company5 description",
      website: "https://www.company5.com",
      email_id: "company5@company.com",
    },
  ]);
  console.log("Static data inserted successfully");
} catch (error) {
  console.error("Error inserting static data:", error);
}
