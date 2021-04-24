
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const XPathType = s.intersection([
  s.type({'@type': s.literal('XPathType')}),
  s.partial({
  })
])

module.exports = {
  XPathType,
};