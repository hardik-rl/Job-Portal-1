const express = require('express')
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/dbConnection');
const Job = require('./models/JobModel');
const JobLocation = require('./models/JobLocationModel');
const Application = require('./models/ApplicationModel');
const adminRoutes = require('./routes/AdminRoutes.js');
const bodyParser = require('body-parser');
const JobCategory = require('./models/JobCategoryModel.js');
const multer = require('multer');

connectDb();
const app = express();

const PORT = process.env.PORT || 9900;

app.use(express.json());
app.use(cors());

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);

// add application api
// ----------------------

// Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Uploads will be stored in the 'uploads/' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Rename the file to avoid overwriting
//   }
// });

// // Define file filter
// const fileFilter = (req, file, cb) => {
//   // Allow only certain file types (e.g., pdf, docx)
//   if (file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only PDF documents are allowed.'));
//   }
// };

// // Initialize multer upload middleware
// const upload = multer({ storage: storage, fileFilter: fileFilter });
// app.post('/apply', upload.single('resume_file'), async (req, res) => {
//   try {
//     const applicationData = req.body;
//     const filePath = req.file.path;
    
//     const newApplication = await Application.create({
//       ...applicationData,
//       resume_file: filePath 
//     });
    
//     res.status(201).json(newApplication);
//   } catch (error) {
//     console.error('Error creating application:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

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
    console.error('Error fetching job location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all job categories
app.get('/jobs-categories', async (req, res) => {
  try {
    const jobCategories = await JobCategory.find({});

    res.json(jobCategories);
  } catch (error) {
    console.error('Error fetching job categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific job by ID
app.get('/job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
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
  const { search, category, location } = req.query;
  const page = parseInt(req.query.page) || 1;
  const perPage = 3;

  
  let filter = {}
  if (search) {
    filter.category_id = await JobCategory.findOne({ name: { $regex: search, $options: 'i' } }).select('_id');
  }
  else {
    if (category) {
      const exactCategory = await JobCategory.findOne({ name: category });
      filter.category_id = exactCategory ? exactCategory._id : null
    }
  
    if (location) {
      const exactLocation = await JobLocation.findOne({ name: location });
      filter.job_location_id = exactLocation ? exactLocation._id : null;
    }
  }
  try {
    const jobs = await Job
      .paginate(filter,{
        populate: "category_id job_location_id",
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