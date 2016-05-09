var express = require('express');
var router = express.Router();


// router.use('/users', require('./users'));

router.get('/userjson', function(req, res, next) {
  res.json({'respond with a resource': 123});
  console.log('hit test');
});


router.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });





module.exports = router;

