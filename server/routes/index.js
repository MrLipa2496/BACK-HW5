const { Router } = require('express');
const toursRouter = require('./toursRouter');

const router = Router();

router.use('/tours', toursRouter);

router.get('/', (req, res) => {
  res.status(200).send('API root');
});

module.exports = router;
