
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const InfectiousAgentClass = s.intersection([
  s.type({'@type': s.literal('InfectiousAgentClass')}),
  s.partial({
  })
])

module.exports = {
  InfectiousAgentClass,
};