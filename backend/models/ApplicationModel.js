const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  pan_number: String,
  mobile_number: String,
  education: String,
  ctc: Number,
  expected_ctc: Number,
  notice_period: Number,
  total_work_experience: Number,
  gender: String,
  state: String,
  resume_file: String
});

const Application = mongoose.model('applications', applicationSchema);

module.exports = Application;