const mongoose = require('mongoose');
const Job = require('../models/Job');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const jobs = [
  { title: 'Frontend Developer', company: 'Google', location: 'Remote', description: 'React Developer', type: 'Full-time' },
  { title: 'Backend Engineer', company: 'Amazon', location: 'New York', description: 'Node.js Engineer', type: 'Part-time' },
  { title: 'UI/UX Designer', company: 'Apple', location: 'San Francisco', description: 'Design mobile apps', type: 'Contract' }
];

async function seed() {
  await Job.deleteMany();
  await Job.insertMany(jobs);
  console.log('Jobs seeded');
  mongoose.disconnect();
}
seed();
