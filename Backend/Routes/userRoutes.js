const express = require('express');
const router = express.Router();
const {signupUser} = require('../Controllers/userController')

router.post('/signup',signupUser);

module.exports = router;