
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalProcedureType = s.intersection([
  s.type({'@type': s.literal('MedicalProcedureType')}),
  s.partial({
  })
])

module.exports = {
  MedicalProcedureType,
};