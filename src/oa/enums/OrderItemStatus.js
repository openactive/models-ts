const s = require('@imin/speck');

/**
 */
const OrderItemStatus = s.literalStringEnum([
  'https://openactive.io/SellerCancelled',
  'https://openactive.io/CustomerCancelled',
  'https://openactive.io/OrderItemProposed',
  'https://openactive.io/OrderItemConfirmed',
  'https://openactive.io/CustomerAttended',
]);