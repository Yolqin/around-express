const express = require('express');

const router = express.Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', createUser);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
