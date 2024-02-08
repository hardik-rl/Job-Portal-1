const mongoose = require('mongoose');
const Job = require('./JobModel');

const ApplicationSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Job
  },
  first_name: String,
  last_name: String,
  email: String,
  pan_number: String,
  mobile_number: Number,
  education: String,
  ctc: Number,
  expected_ctc: Number,
  notice_period: Number,
  total_work_experience: Number,
  gender: String,
  state: String,
  resume_file: String
});

const Application = mongoose.model('applications', ApplicationSchema);

module.exports = Application;