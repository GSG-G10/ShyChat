const router = require('express').Router();
const { verifySMS, sendSMS } = require('../controllers/utilities');
const { checkUserExist, checkAuth } = require('../controllers/middlewares');
const {
  signup, login, logout, editProfile,
} = require('../controllers/auth');
const { searchUsersByPhonehandler } = require('../controllers/user');
const getContacts = require('../controllers/auth/getContacts');
const getMessages = require('../controllers/chat/getMessages');

router.get('/logout', logout);

router.post('/login', login);
router.post('/signup', checkUserExist, signup, sendSMS);
router.post('/verify', verifySMS);
router.get('/search/:phone', searchUsersByPhonehandler);
router.use(checkAuth);
router.get('/contacts', getContacts);
router.put('/editprofile', editProfile);
router.post('/messages', getMessages);

module.exports = router;
