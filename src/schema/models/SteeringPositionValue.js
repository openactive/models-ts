
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const SteeringPositionValue = s.intersection([
  s.type({'@type': s.literal('SteeringPositionValue')}),
  s.partial({
  })
])

module.exports = {
  SteeringPositionValue,
};