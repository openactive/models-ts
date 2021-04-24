const s = require('@imin/speck');

/**
 * RefundTypeEnumeration enumerates several kinds of product return refund types.
 */
const RefundTypeEnumeration = s.literalStringEnum([
  'https://schema.org/FullRefund',
  'https://schema.org/StoreCreditRefund',
  'https://schema.org/ExchangeRefund',
]);