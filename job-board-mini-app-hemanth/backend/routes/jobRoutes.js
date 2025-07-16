const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/list', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

module.exports = router;
