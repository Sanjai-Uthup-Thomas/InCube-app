const express = require('express');
const router =express.Router();
const auth = require('../middleware/auth')
const controller = require('../controllers/userController')
const upload = require('../middleware/multer')
//signup router
router.post('/signup',controller.doSignup)
//login router
router.post('/login',controller.doLogin)
//check if token is valid
router.post('/tokenIsValid',auth,controller.doTokenIsValid)
router.get('/',auth,controller.doGet)
router.post('/form',auth,upload.single("Logo"),controller.doForm)


module.exports = router;