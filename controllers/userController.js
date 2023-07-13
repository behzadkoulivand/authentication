const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');


const User = require('../models/User');

exports.createUser = async (req, res) =>{
    await User.create(req.body);
}