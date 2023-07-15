const {Router} = require('express');

const usercontroller = require('../controllers/userController');

const router = Router();

router.post("/users/register", usercontroller.createUser);

router.get("/users/list", usercontroller.getList);

module.exports = router;