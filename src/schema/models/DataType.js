
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const DataType = s.intersection([
  s.type({'@type': s.literal('DataType')}),
  s.partial({
  })
])

module.exports = {
  DataType,
};