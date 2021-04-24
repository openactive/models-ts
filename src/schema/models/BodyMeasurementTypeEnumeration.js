
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const BodyMeasurementTypeEnumeration = s.intersection([
  s.type({'@type': s.literal('BodyMeasurementTypeEnumeration')}),
  s.partial({
  })
])

module.exports = {
  BodyMeasurementTypeEnumeration,
};