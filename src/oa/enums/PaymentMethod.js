const s = require('@imin/speck');

/**
 */
const PaymentMethod = s.literalStringEnum([
  'http://purl.org/goodrelations/v1#Cash',
  'http://purl.org/goodrelations/v1#PaymentMethodCreditCard',
]);