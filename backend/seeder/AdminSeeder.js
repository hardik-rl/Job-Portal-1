// seed.js
const Admin = require("../models/AdminModel");
const connectDb = require("../config/dbConnection");
const bcrypt = require('bcryptjs');

async function seedAdmin() {
  try {
    connectDb();

      const hashedPassword = await bcrypt.hash('12345678', 10);

      const newAdmin = new Admin({
        email: 'admin@mail.com',
        password: hashedPassword
      });

      await newAdmin.save();
      console.log('Admin seeded successfully');
  } catch (error) {
    console.error("Error inserting static data:", error);
  }
}

seedAdmin(); 
