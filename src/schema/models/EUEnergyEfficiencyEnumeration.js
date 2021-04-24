
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const EUEnergyEfficiencyEnumeration = s.intersection([
  s.type({'@type': s.literal('EUEnergyEfficiencyEnumeration')}),
  s.partial({
  })
])

module.exports = {
  EUEnergyEfficiencyEnumeration,
};