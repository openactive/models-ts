const s = require('@imin/speck');

/**
 * ReturnFeesEnumeration expresses policies for return fees.
 */
const ReturnFeesEnumeration = s.literalStringEnum([
  'https://schema.org/ReturnShippingFees',
  'https://schema.org/OriginalShippingFees',
  'https://schema.org/RestockingFees',
]);