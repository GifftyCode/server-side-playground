const express = require('express');
const tourController = require('../controllers/tourContollerFS');
const router = express.Router();

router.param('id', tourController.checkId);

// Param Middleware - Middleware that only runs for certain parameter in our URL
router.param('id', (req, res, next, val) => {
  console.log(`Tour id: ${val}`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
