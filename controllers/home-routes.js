const { restore } = require('../models/user');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router;