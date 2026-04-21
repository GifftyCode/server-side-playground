const express = require('express');

const {
  getAllUsers,
  createUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllerFS');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
