
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const EnergyStarEnergyEfficiencyEnumeration = s.intersection([
  s.type({'@type': s.literal('EnergyStarEnergyEfficiencyEnumeration')}),
  s.partial({
  })
])

module.exports = {
  EnergyStarEnergyEfficiencyEnumeration,
};