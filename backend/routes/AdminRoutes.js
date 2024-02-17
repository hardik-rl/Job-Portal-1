const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/AdminModel');
const authMiddleware = require('../middleware/AuthMiddleware');
const JobCategory = require('../models/JobCategoryModel');
const Application = require('../models/ApplicationModel');

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

router.get('/get-categories', authMiddleware, async (req, res) => {
  try {
    const { filter } = req.query;

    console.log({filter});
    
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

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});


module.exports = router;
