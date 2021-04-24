
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalStudyStatus = s.intersection([
  s.type({'@type': s.literal('MedicalStudyStatus')}),
  s.partial({
  })
])

module.exports = {
  MedicalStudyStatus,
};