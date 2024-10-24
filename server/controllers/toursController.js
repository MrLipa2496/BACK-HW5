const _ = require('lodash');
const { Tour } = require('../models');
const createHttpError = require('http-errors');

module.exports.createTour = async (req, res, next) => {
  const { body } = req;

  if (body.TR_Price) {
    body.TR_Price = parseFloat(body.TR_Price);
  }

  try {
    const createdTour = await Tour.create(body);

    const preparedTour = _.omit(createdTour.get(), ['createdAt', 'updatedAt']);

    res.status(201).send({ data: preparedTour });
  } catch (err) {
    next(err);
    console.error(err);
  }
};

module.exports.getTours = async (req, res, next) => {
  const {
    query: { page = 1, limit = 10 },
  } = req;

  const parsedPage = Number(page);
  const parsedLimit = Number(limit);

  if (isNaN(parsedPage) || parsedPage < 1) {
    return res.status(400).json({ error: 'Invalid page number' });
  }
  if (isNaN(parsedLimit) || parsedLimit < 1) {
    return res.status(400).json({ error: 'Invalid limit number' });
  }

  const offset = (parsedPage - 1) * parsedLimit;

  try {
    const foundTours = await Tour.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit: parsedLimit,
      offset,
      order: [['TR_Price', 'DESC']],
      raw: true,
    });
    res.status(200).send({ data: foundTours });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

module.exports.getTourById = async (req, res, next) => {
  try {
    const { tourId } = req.params;

    const foundTour = await Tour.findByPk(tourId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      raw: true,
    });

    if (!foundTour) {
      return next(createHttpError(404, 'Tour Not Found'));
    }

    res.status(200).send({ data: foundTour });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTourById = async (req, res, next) => {
  const {
    body,
    params: { tourId },
  } = req;

  try {
    const [, [updatedTour]] = await Tour.update(body, {
      where: { TR_ID: tourId },
      raw: true,
      returning: true,
    });

    if (!updatedTour) {
      return next(createHttpError(404, 'Tour Not Found'));
    }

    const preparedTour = _.omit(updatedTour, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedTour });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTourById = async (req, res, next) => {
  const {
    params: { tourId },
  } = req;

  try {
    const deletedCount = await Tour.destroy({
      where: { TR_ID: tourId },
    });

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Tour Not Found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
