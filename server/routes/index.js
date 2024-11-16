const { Router } = require('express');
const toursRouter = require('./toursRouter');
const transportsRouter = require('./transportsRouter');

const router = Router();

router.use('/tours', toursRouter);

router.use('/transportations', transportsRouter);

module.exports = router;
