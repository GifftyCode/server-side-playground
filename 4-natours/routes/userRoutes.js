const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Users route working',
  });
});

module.exports = router;
