var REGEXP = /^\d+(\.\d+)?$/

function addUnit(value) {
  if (value == null) {
    return undefined;
  }

  return REGEXP.test('' + value) ? value + 'px' : value;
}

module.exports = {
  addUnit: addUnit
};
