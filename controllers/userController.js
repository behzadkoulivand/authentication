const jwt = require('jsonwebtoken');


const User = require('../models/User');

exports.createUser = async (req, res) =>{
    try {
        const {userName, email, password} = req.body;
        await User.userValidation(req.body);
        const user = await User.findOne({ email });
        if(user) return res.status(400).json("کاربری با این ایمیل قبلا ثبت شده است");

        await User.create({userName, email, password});
        res.status(200).json("کاربر با موفقیت ثبت شد");
    } catch (err) {
        console.log(err);
        res.status(500).json("خطایی وجود دارد");
    }
    
}