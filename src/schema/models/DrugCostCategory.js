
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const DrugCostCategory = s.intersection([
  s.type({'@type': s.literal('DrugCostCategory')}),
  s.partial({
  })
])

module.exports = {
  DrugCostCategory,
};