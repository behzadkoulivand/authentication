const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');


const User = require('../models/User');

exports.createUser = async (req, res) =>{
    try {
        const {email} = req.body;
        await userValidation(req.body);
        const user = await User.find({ email });
        if(user) return res.status(400).json("کاربری با این ایمیل قبلا ثبت شده است");

        await User.create(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).json("خطایی وجود دارد");
    }
    
}