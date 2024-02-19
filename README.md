# Job-Portal

# How to Set Up Backend

## Step 1: Set up MongoDB

## Step 2: npm install

## Step 3: Setup Environment Variables

Set the following environment variables:
- MONGODB_URI=mongodb://localhost:27017/job-portal
- PORT=3000
- JWT_SECRET=secret

## Step 4: Run the following commands
```bash
npm run seed:job-category
npm run seed:job-location
npm run seed:admin
npm run start
