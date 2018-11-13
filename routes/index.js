const express = require('express');
const router = express.Router();

// what is this?
// router.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

router.use('/', require('./application.js'));
router.use('/user', require('./user.js'));


// what is this?
// router.all('*', (req, res) => {
//   res.status(400).send();
// });

module.exports = router;