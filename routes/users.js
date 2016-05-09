var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userjson', function(req, res, next) {
  res.json({'respond with a resource': 123});
  console.log('hit test');
});

module.exports = router;
