/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    const unit = this.getUnit(input);
    const number = input.toLowerCase().split(unit).shift().trim();

    if (number === '') {
      return 1;
    }

    const re = /(\d+(\.\d+)?)/g;
    const matches = number.match(re);

    if (!matches || matches.length > 2) {
      return 'invalid number';
    } else if (matches.length == 2) {
      const [numerator, denominator] = matches;
      return parseFloat(numerator) / parseFloat(denominator);
    }

    return parseFloat(matches[0]);
  };

  this.getUnit = function (input) {
    const re = /(?<unit>gal|L|lbs|kg|mi|km)$/i;
    const matches = input.match(re);

    if (!matches) {
      return 'invalid unit';
    }

    return matches[1].toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
    }
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
    const speltInitUnit = this.spellOutUnit(initUnit);
    const speltReturnUnit = this.spellOutUnit(returnUnit);
    const result = `${initNum} ${speltInitUnit} converts to ${returnNum} ${speltReturnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
