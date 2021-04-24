
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const CssSelectorType = s.intersection([
  s.type({'@type': s.literal('CssSelectorType')}),
  s.partial({
  })
])

module.exports = {
  CssSelectorType,
};