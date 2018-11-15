const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

// router.get('/login', userController.login);
// router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
// router.get('/logout', userController.logout);
router.get('/:id', userController.show);
router.get('/delete/:id', userController.delete)



module.exports = router;
