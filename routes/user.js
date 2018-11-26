const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/sign-in', userController.signIn);
router.post('/sign-in', userController.createSignIn);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/:id', userController.show);
router.get('/delete/:id', userController.delete)
router.get('/dashboard/:id', userController.showDashboard)

module.exports = router;
