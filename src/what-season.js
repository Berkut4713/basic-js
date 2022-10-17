const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
  function getSeason(date) {
    if (date === undefined) {return "Unable to determine the time of year!";}
     else if (date.hasOwnProperty("toString") || !(date instanceof Date)) {
      throw new Error("Invalid date!");
    } else {
      monthYear = date.getMonth();
      if (monthYear < 2) {
        return "winter";
      } else if (monthYear < 5) {
        return "spring";
      } else if (monthYear < 8) {
        return "summer";
      } else if (monthYear < 11) {
        return "autumn";
      } else return "winter";
    }
  }


module.exports = {
  getSeason
};
