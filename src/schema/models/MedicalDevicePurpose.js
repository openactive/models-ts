
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalDevicePurpose = s.intersection([
  s.type({'@type': s.literal('MedicalDevicePurpose')}),
  s.partial({
  })
])

module.exports = {
  MedicalDevicePurpose,
};