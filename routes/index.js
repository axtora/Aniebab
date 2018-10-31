var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/signin', (req, res) => {
	res.render('signin');
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

module.exports = router;
