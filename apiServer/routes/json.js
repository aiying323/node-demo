const express = require('express');
const router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('json');
});

router.get('/data', (req, res, next) => {
  res.send('jsondata');
});

exports = module.exports = router;
