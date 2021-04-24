
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const EventStatusType = s.intersection([
  s.type({'@type': s.literal('EventStatusType')}),
  s.partial({
  })
])

module.exports = {
  EventStatusType,
};