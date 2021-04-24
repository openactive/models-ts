
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Float = s.intersection([
  s.type({'@type': s.literal('Float')}),
  s.partial({
  })
])

module.exports = {
  Float,
};