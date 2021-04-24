
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const LegalForceStatus = s.intersection([
  s.type({'@type': s.literal('LegalForceStatus')}),
  s.partial({
  })
])

module.exports = {
  LegalForceStatus,
};