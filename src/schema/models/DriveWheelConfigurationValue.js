
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const DriveWheelConfigurationValue = s.intersection([
  s.type({'@type': s.literal('DriveWheelConfigurationValue')}),
  s.partial({
  })
])

module.exports = {
  DriveWheelConfigurationValue,
};