const express = require('express')
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/dbConnection');
const Job = require('./models/JobModel');
const JobLocation = require('./models/JobLocationModel');
const Application = require('./models/ApplicationModel');

connectDb();
const app = express();

const PORT = process.env.PORT || 9900;

app.use(express.json());

app.use(cors());

// add application
app.post('/apply', async (req, res) => {
  try {
    const applicationData = req.body;
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

    const job = await Job.findById(jobId)
      .populate('category_id')
      .populate('company_id')
      .populate('job_location_id')
      .exec();

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//get all jobs
app.get("/jobs", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 3;

  try {
    const jobs = await Job
      .paginate({},{
        populate: "category_id company_id job_location_id",
        lean: true,
        page:page,
        limit: perPage,
        customLabels:{
          docs:'jobs'
        }
      });

    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js MongoDB API');
});

app.listen(PORT, function () {
  console.log('Express server listening on port: ' + PORT)
})