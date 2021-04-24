
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const DrugPrescriptionStatus = s.intersection([
  s.type({'@type': s.literal('DrugPrescriptionStatus')}),
  s.partial({
  })
])

module.exports = {
  DrugPrescriptionStatus,
};