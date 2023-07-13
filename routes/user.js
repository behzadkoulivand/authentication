const {Router} = require('express');

const usercontroller = require('../controllers/userController');

const router = Router();

router.post("/users/register", usercontroller.createUser);

module.exports = router;