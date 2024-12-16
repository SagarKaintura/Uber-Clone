const express = require('express')
const captainController = require('../controllers/captain.controller')
const router = express.Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/captain.middleware')

router.post('/register',[
  body('fullname.firstname').isLength({min : 3}).withMessage('First name must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min : 6 }).withMessage('password must be at least 6 characters long'),
  body('vehicle.color').isLength({min : 3}).withMessage('Color must be atlest 3 character long'),
  body('vehicle.plate').isLength({min : 3}).withMessage('Plate must be atlest 3 character long'),
  body('vehicle.capacity').isLength({min : 1}).withMessage('Capacity must be atlest 1 '),
  body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle'),
], captainController.registerCaptain)

router.post('/login',[
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min : 6}).withMessage('password must be at least 6 characters long')
], captainController.loginCaptain)

router.get('/profile',authMiddleware.authCaptain , captainController.getCaptainProfile )

router.get('/logout',captainController.logoutCaptain);

module.exports = router;