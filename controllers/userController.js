const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');
const {check, validationResult} = require('express-validator').check;


const User = require('../models/User');

exports.createUser = async (req, res) =>{
    await User.create(req.body);
}