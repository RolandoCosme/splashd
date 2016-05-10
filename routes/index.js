var express = require('express');
var router = express.Router();


// router.use('/users', require('./users'));


router.get('/register', function(req, res, next) {
  var newUser = req.body;
  console.log(newUser);
  models.User.create(newUser)
  .then(function(result){
    res.redirect('/?msg=New User Created!');
    }).catch(function(err){
      console.log(err);
      res.redirect('/msg=Something Went Wrong! Please Try Again');
    });
});

router.get('/bathrooms', function(req, res, next) {

});

router.get('/userjson', function(req, res, next) {
  res.json({'respond with a resource': 123});
  console.log('hit test');
});


router.get('*', function(req, res, next) {
    res.sendFile(process.cwd() + '/views/index.html');
  });





module.exports = router;

