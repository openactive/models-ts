
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const WearableSizeSystemEnumeration = s.intersection([
  s.type({'@type': s.literal('WearableSizeSystemEnumeration')}),
  s.partial({
  })
])

module.exports = {
  WearableSizeSystemEnumeration,
};