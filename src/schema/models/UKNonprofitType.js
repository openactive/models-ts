
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const UKNonprofitType = s.intersection([
  s.type({'@type': s.literal('UKNonprofitType')}),
  s.partial({
  })
])

module.exports = {
  UKNonprofitType,
};