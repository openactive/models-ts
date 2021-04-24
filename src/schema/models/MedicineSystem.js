
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicineSystem = s.intersection([
  s.type({'@type': s.literal('MedicineSystem')}),
  s.partial({
  })
])

module.exports = {
  MedicineSystem,
};