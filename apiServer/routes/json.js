const express = require('express');
const router = express.Router();

const fs = require('fs');
let tree = JSON.parse(fs.readFileSync( './json/tree.json'));
/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('json');
});

router.get('/tree', (req, res, next) => {
  res.json(tree);
});

exports = module.exports = router;
