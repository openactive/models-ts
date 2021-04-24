
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalAudienceType = s.intersection([
  s.type({'@type': s.literal('MedicalAudienceType')}),
  s.partial({
  })
])

module.exports = {
  MedicalAudienceType,
};