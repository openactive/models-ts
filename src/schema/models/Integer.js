
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Integer = s.intersection([
  s.type({'@type': s.literal('Integer')}),
  s.partial({
  })
])

module.exports = {
  Integer,
};