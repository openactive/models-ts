
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalEvidenceLevel = s.intersection([
  s.type({'@type': s.literal('MedicalEvidenceLevel')}),
  s.partial({
  })
])

module.exports = {
  MedicalEvidenceLevel,
};