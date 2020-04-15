const express = require('express');
const router = require('express').Router();
const userController = require('../controllers/user.controller');
const {check} = require('express-validator');
const auth = require('../middlewares/auth');

router.post('/register', [
    check('email', 'Please enter email')
        .not()
        .isEmpty()
        .isEmail(),
    check('password', 'Password must be at least six charactres long')
        .isLength({min: 6}),
    check('username', 'Please enter username')
        .not()
        .isEmpty(),
    check('phonenumber', 'Please enter phonenumber')
        .not()
        .isEmpty(),
    check('firstname', 'Please enter firstname')
        .not()
        .isEmpty(),
    check('lastname', 'Please enter lastname')
        .not()
        .isEmpty()
], userController.register);

router.put('/update', [
    check('_id', 'Please enter id')
        .not()
        .isEmpty(),
    check('email', 'Please enter email')
        .not()
        .isEmpty()
        .isEmail(),
    check('password', 'Password must be at least six charactres long')
        .isLength({min: 6}),
    check('username', 'Please enter username')
        .not()
        .isEmpty(),
    check('phonenumber', 'Please enter phonenumber')
        .not()
        .isEmpty(),
    check('firstname', 'Please enter firstname')
        .not()
        .isEmpty(),
    check('lastname', 'Please enter lastname')
        .not()
        .isEmpty()
], userController.updateProfile);

router.post('/login', [
    check('email', 'Please enter email')
        .not()
        .isEmpty(),
    check('password', 'Please enter password')
        .not()
        .isEmpty(),
], userController.login);

router.post('/forgotpassword', [
    check('email', 'Please enter email')
        .not()
        .isEmpty()
        .isEmail()
], userController.forgotPassword);

router.get('/resetpassword/:token', userController.resetPassword);

router.post('/updatepassword', auth, userController.updatePassword);

router.get('/getuser/:token', userController.getUser);

module.exports = router;