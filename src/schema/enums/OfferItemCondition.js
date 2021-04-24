const s = require('@imin/speck');

/**
 * A list of possible conditions for the item.
 */
const OfferItemCondition = s.literalStringEnum([
  'https://schema.org/DamagedCondition',
  'https://schema.org/UsedCondition',
  'https://schema.org/NewCondition',
  'https://schema.org/RefurbishedCondition',
]);