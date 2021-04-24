const s = require('@imin/speck');

/**
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
const MerchantReturnEnumeration = s.literalStringEnum([
  'https://schema.org/MerchantReturnUnspecified',
  'https://schema.org/MerchantReturnNotPermitted',
  'https://schema.org/MerchantReturnFiniteReturnWindow',
  'https://schema.org/MerchantReturnUnlimitedWindow',
]);