
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalTrialDesign = s.intersection([
  s.type({'@type': s.literal('MedicalTrialDesign')}),
  s.partial({
  })
])

module.exports = {
  MedicalTrialDesign,
};