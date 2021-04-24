
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalImagingTechnique = s.intersection([
  s.type({'@type': s.literal('MedicalImagingTechnique')}),
  s.partial({
  })
])

module.exports = {
  MedicalImagingTechnique,
};