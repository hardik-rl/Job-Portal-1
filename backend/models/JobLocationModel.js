const mongoose = require('mongoose');

const JobLocationSchema = new mongoose.Schema({
    name: String,
});

const JobLocation = mongoose.model('job_locations', JobLocationSchema);

module.exports = JobLocation;
