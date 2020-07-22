/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.re = /^(?<num>(\d+\.)?\d+(\/\d+)?)?\s?(?<unit>gal|L|lbs|kg|mi|km)$/;

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
    const matches = input.match(this.reUnit);

    if (!matches) {
      return 'invalid unit';
    }

    return matches[0];
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
