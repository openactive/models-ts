
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const NLNonprofitType = s.intersection([
  s.type({'@type': s.literal('NLNonprofitType')}),
  s.partial({
  })
])

module.exports = {
  NLNonprofitType,
};