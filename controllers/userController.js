const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user)
            return res.status(400).json("کاربری با این ایمیل ثبت نشده");
        
        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch)
            return res.status(400).json("کلمه عبور اشتباه است");
        
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, "secret", 
            {
                expiresIn: 3600
            }, (err, token) =>{
                if(err) throw err;
                res.status(200).json(token);
            });
    } catch (err) {
        console.log(err);
        res.status(500).json("خطایی وجود دارد");
    }
}

exports.getList = async (req, res) => {
    try {
        const list = await User.find();
        if(list.length == 0)
            return res.status(400).json("کاربری در پایگاه داده نیست");
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json("خطایی وجود دارد");
    }
}

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