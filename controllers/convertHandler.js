/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.re = /^(?<num>(\d+\.)?\d+(\/\d+)?)?\s?(?<unit>gal|L|lbs|kg|mi|km)$/i;

  this.getNum = function (input) {
    const matches = input.match(this.re);

    if (!matches) {
      return 'invalid number';
    }

    const num = matches[1];

    if (!num) {
      return 1;
    }

    return matches[1];
  };

  this.getUnit = function (input) {
    const matches = input.match(this.re);

    if (!matches) {
      return 'invalid unit';
    }

    return matches[matches.length - 1];
  };

  this.getReturnUnit = function (initUnit) {
    const isLowerCase = initUnit === initUnit.toLowerCase();

    let result;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
    }

    if (!isLowerCase) {
      return result.toUpperCase;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        return parseFloat((initNum * galToL).toFixed(5));
      case 'l':
        return parseFloat((initNum / galToL).toFixed(5));
      case 'mi':
        return parseFloat((initNum * miToKm).toFixed(5));
      case 'km':
        return parseFloat((initNum / miToKm).toFixed(5));
      case 'lbs':
        return parseFloat((initNum * lbsToKg).toFixed(5));
      case 'kg':
        return parseFloat((initNum / lbsToKg).toFixed(5));
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
