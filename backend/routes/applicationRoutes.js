const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

router.post('/', async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json({ message: 'Application submitted successfully' });
});

module.exports = router;
