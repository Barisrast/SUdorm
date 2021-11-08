const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

let options = {

};
router.use(express.static("landingpage", options));

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.sendFile('index.html', {root: './views/landing_page/'}));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;