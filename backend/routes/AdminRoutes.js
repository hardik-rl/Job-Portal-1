const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/AdminModel');
const authMiddleware = require('../middleware/AuthMiddleware');
const JobCategory = require('../models/JobCategoryModel');
const Application = require('../models/ApplicationModel');
const Job = require('../models/JobModel');
const JobLocation = require('../models/JobLocationModel');
const path = require('path');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/pdf/:filename', authMiddleware, (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../uploads', filename);
  res.sendFile(filePath);
});

router.get('/get-categories', authMiddleware, async (req, res) => {
  try {
    const { filter } = req.query;
    
    let aggregationPipeline = [];

    if (filter) {
      aggregationPipeline.push({
        $match: { name: { $regex: new RegExp(filter, 'i') } }
      });
    }

    aggregationPipeline.push({
      $lookup: {
        from: 'applications',
        localField: '_id',
        foreignField: 'category_id',
        as: 'applications',
      }
    });

    aggregationPipeline.push({
      $project: {
        category: "$name",
        applicationCount: { $size: '$applications' }
      }
    });

    const jobCategories = await JobCategory.aggregate(aggregationPipeline);

    res.json(jobCategories);
  } catch (error) {
    console.error("Error occurred while fetching job categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/get-category-application/:category_id?', authMiddleware, async(req, res) => {
  try {
    let query = {};

    if (req.params.category_id) {
        query = { category_id: req.params.category_id };
    }

    const applications = await Application.find(query);

    res.json({category_applications: applications});
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get-application/:application_id', authMiddleware, async(req, res) => {
  try {

    const applicationId = req.params.application_id;

    const applications = await Application.findById(applicationId);

    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/add-job', authMiddleware, async(req, res) => {
  try {
    const jobData = req.body;
    const newJob = await Job.create(jobData);
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Edit Job API
router.put('/edit-job/:id', authMiddleware, async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedData = req.body;
    
    // Find the job by ID and update its data
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    console.error('Error editing job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete Job API
router.delete('/delete-job/:id', authMiddleware, async (req, res) => {
  try {
    const jobId = req.params.id;
    
    // Find the job by ID and delete it
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all job
router.get('/get-jobs', authMiddleware, async(req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get specific job
router.get('/get-job/:id', authMiddleware, async(req, res) => {
  const jobId = req.params.id;
  try {
    const job = await Job.findById(jobId);
    res.json(job);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all job locations
router.get('/jobs-locations', authMiddleware, async (req, res) => {
  try {
    const jobLocations = await JobLocation.find({});

    res.json(jobLocations);
  } catch (error) {
    console.error('Error fetching job location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all job categories
router.get('/jobs-categories', authMiddleware, async (req, res) => {
  try {
    const jobCategories = await JobCategory.find({});

    res.json(jobCategories);
  } catch (error) {
    console.error('Error fetching job categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});


module.exports = router;
