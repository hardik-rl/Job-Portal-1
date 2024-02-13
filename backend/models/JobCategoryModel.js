const mongoose = require('mongoose');

const JobCategorySchema = new mongoose.Schema({
    name: String,
});

const JobCategory = mongoose.model('job_categories', JobCategorySchema);

module.exports = JobCategory;
