
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalSpecialty = s.intersection([
  s.type({'@type': s.literal('MedicalSpecialty')}),
  s.partial({
  })
])

module.exports = {
  MedicalSpecialty,
};