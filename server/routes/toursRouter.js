const { Router } = require('express');
const { toursController } = require('../controllers/index');

const toursRouter = Router();

toursRouter
  .route('/')
  .get(toursController.getTours)
  .post(toursController.createTour);

toursRouter
  .route('/:tourId')
  .get(toursController.getTourById)
  .patch(toursController.updateTourById)
  .delete(toursController.deleteTourById);

module.exports = toursRouter;
