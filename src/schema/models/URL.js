
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const URL = s.intersection([
  s.type({'@type': s.literal('URL')}),
  s.partial({
  })
])

module.exports = {
  URL,
};