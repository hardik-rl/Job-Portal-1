const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: String,
    logo_url: String,
    description: String,
    website: String,
    email_id: String,
});

const Company = mongoose.model('companies', CompanySchema);

module.exports = Company;
