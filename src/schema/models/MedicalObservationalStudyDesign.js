
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalObservationalStudyDesign = s.intersection([
  s.type({'@type': s.literal('MedicalObservationalStudyDesign')}),
  s.partial({
  })
])

module.exports = {
  MedicalObservationalStudyDesign,
};