
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const ReservationStatusType = s.intersection([
  s.type({'@type': s.literal('ReservationStatusType')}),
  s.partial({
  })
])

module.exports = {
  ReservationStatusType,
};