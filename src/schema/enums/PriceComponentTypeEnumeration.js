const s = require('@imin/speck');

/**
 * Enumerates different price components that together make up the total price for an offered product.
 */
const PriceComponentTypeEnumeration = s.literalStringEnum([
  'https://schema.org/Downpayment',
  'https://schema.org/CleaningFee',
  'https://schema.org/DistanceFee',
  'https://schema.org/ActivationFee',
  'https://schema.org/Installment',
  'https://schema.org/Subscription',
]);