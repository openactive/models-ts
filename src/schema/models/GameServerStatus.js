
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const GameServerStatus = s.intersection([
  s.type({'@type': s.literal('GameServerStatus')}),
  s.partial({
  })
])

module.exports = {
  GameServerStatus,
};