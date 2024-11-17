const { Router } = require('express');
const toursRouter = require('./toursRouter');
const transportsRouter = require('./transportsRouter');
const hotelRouter = require('./hotelsRouter');

const router = Router();

router.use('/tours', toursRouter);

router.use('/transportations', transportsRouter);

router.use('/hotels', hotelRouter);

module.exports = router;
