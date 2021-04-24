
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const WearableSizeGroupEnumeration = s.intersection([
  s.type({'@type': s.literal('WearableSizeGroupEnumeration')}),
  s.partial({
  })
])

module.exports = {
  WearableSizeGroupEnumeration,
};