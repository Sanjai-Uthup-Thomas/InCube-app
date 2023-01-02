const express = require('express');
const router =express.Router();
const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');
const auth = require('../middleware/adminAuth');



router.post('/signup',adminController.adminCraete) 
router.post('/adminlogin',adminController.adminLogin)
router.post('/tokenIsValid',adminController.doTokenIsValid)
router.get('/',auth,adminController.doGet)
router.get('/applications',adminController.doApplications)
router.get('/approved',adminController.doApproved)
router.get('/declined',adminController.doDeclined)


router.post('/accept/:id',adminController.doAccept)
router.post('/decline/:id',adminController.doDecline)
router.get('/view/:id',adminController.doView)


router.post('/slotCraeting',adminController.doSlotCraeting)
router.get('/slots',adminController.doSlots)
router.post('/booking',adminController.doBooking)
router.get('/status',adminController.doStatus)



module.exports = router;