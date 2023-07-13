const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {schema} = require('./secure/userValidation');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.statics.userValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

userSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

const model = mongoose.model("User", userSchema);
module.exports = model;