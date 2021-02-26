const express = require('express');

const router = express.Router();

const { getUsers, getSingleUser } = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/users/:id', getSingleUser);

module.exports = router;
