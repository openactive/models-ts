
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const WearableMeasurementTypeEnumeration = s.intersection([
  s.type({'@type': s.literal('WearableMeasurementTypeEnumeration')}),
  s.partial({
  })
])

module.exports = {
  WearableMeasurementTypeEnumeration,
};