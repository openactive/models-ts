const s = require('@imin/speck');

/**
 */
const OrderCreationStatus = s.literalStringEnum([
  'https://openactive.io/OrderCreationPaymentAuthorized',
  'https://openactive.io/OrderCreationPaymentCaptured',
  'https://openactive.io/OrderCreationComplete',
  'https://openactive.io/OrderCreationPaymentDue',
]);