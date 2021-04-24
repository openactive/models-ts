
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const OrderStatus = s.intersection([
  s.type({'@type': s.literal('OrderStatus')}),
  s.partial({
  })
])

module.exports = {
  OrderStatus,
};