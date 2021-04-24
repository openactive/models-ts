
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const ActionStatusType = s.intersection([
  s.type({'@type': s.literal('ActionStatusType')}),
  s.partial({
  })
])

module.exports = {
  ActionStatusType,
};