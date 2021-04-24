
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const USNonprofitType = s.intersection([
  s.type({'@type': s.literal('USNonprofitType')}),
  s.partial({
  })
])

module.exports = {
  USNonprofitType,
};