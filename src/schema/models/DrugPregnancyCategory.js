
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const DrugPregnancyCategory = s.intersection([
  s.type({'@type': s.literal('DrugPregnancyCategory')}),
  s.partial({
  })
])

module.exports = {
  DrugPregnancyCategory,
};