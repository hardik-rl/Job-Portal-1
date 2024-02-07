// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to the Node.js MongoDB API');
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


console.log('I am in express project');

const express = require('express')
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/dbConnection');
const Job = require('./models/JobModel');
const JobLocation = require('./models/JobLocationModel');

connectDb();
const app = express();

const PORT = process.env.PORT || 9900;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173' // Allow requests only from this origin
}));

// add application
app.post('/applications', async (req, res) => {
  try {
    const applicationData = req.body; // Assuming request body contains application data
    const newApplication = await Application.create(applicationData);
    res.status(201).json(newApplication);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all job locations
app.get('/jobs-locations', async (req, res) => {
  try {
    const jobLocations = await JobLocation.find({});

    res.json(jobLocations);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific job by ID
app.get('/job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    // Find the job by its ID and populate the related fields
    const job = await Job.findById(jobId)
      .populate('category_id')
      .populate('company_id')
      .populate('job_location_id')
      .exec();

    // Check if the job exists
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Return the job
    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//get all jobs 
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find({})
      .populate('category_id')
      .populate('company_id')
      .populate('job_location_id')
      .exec();

    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js MongoDB API');
});

app.listen(PORT, function () {
  console.log('Express server listening on port: ' + PORT)
})