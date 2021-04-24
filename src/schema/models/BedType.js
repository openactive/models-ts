
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const BedType = s.intersection([
  s.type({'@type': s.literal('BedType')}),
  s.partial({
  })
])

module.exports = {
  BedType,
};