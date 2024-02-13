const mongoose = require('mongoose');
const JobCategory = require('./JobCategoryModel');
const Company = require('./CompanyModel');
const JobLocation = require('./JobLocationModel');
const mongoosePaginate = require('mongoose-paginate-v2');

const jobSchema = new mongoose.Schema({
  description: String,
  education_description: [String],
  knowledge_description: [String],
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: JobCategory
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Company
  },
  job_location_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: JobLocation
  },
  vacancy: Number,
  nature: String,
  annual_salary: Number,
  position: {
    name: String,
    salary_range: String
  }
});

jobSchema.plugin(mongoosePaginate);

const Job = mongoose.model('jobs', jobSchema);

module.exports = Job;
