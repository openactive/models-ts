
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const PaymentStatusType = s.intersection([
  s.type({'@type': s.literal('PaymentStatusType')}),
  s.partial({
  })
])

module.exports = {
  PaymentStatusType,
};