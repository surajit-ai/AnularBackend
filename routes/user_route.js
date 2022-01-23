const express = require('express');
const router = express.Router();
const UserCTRL = require('../controllers/user_controller');

router.post('/signup',UserCTRL.signup);
router.post('/signin',UserCTRL.signin);
router.post('/admin/list',UserCTRL.userList);

module.exports = router;
