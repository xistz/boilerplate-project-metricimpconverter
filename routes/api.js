/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

const expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  const convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    const { input } = req.query;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    if (typeof initNum === 'string' && initUnit.includes('invalid')) {
      res.status(400).json({ error: 'invalid number and unit' });
      return;
    }

    if (typeof initNum === 'string') {
      res.status(400).json({ error: initNum });
      return;
    }

    if (initUnit.includes('invalid')) {
      res.status(400).json({ error: initUnit });
      return;
    }

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    //res.json
    res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
  });
};
