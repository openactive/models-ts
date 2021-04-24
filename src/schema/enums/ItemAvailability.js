const s = require('@imin/speck');

/**
 * A list of possible product availability options.
 */
const ItemAvailability = s.literalStringEnum([
  'https://schema.org/PreOrder',
  'https://schema.org/SoldOut',
  'https://schema.org/BackOrder',
  'https://schema.org/PreSale',
  'https://schema.org/InStoreOnly',
  'https://schema.org/OutOfStock',
  'https://schema.org/OnlineOnly',
  'https://schema.org/Discontinued',
  'https://schema.org/LimitedAvailability',
  'https://schema.org/InStock',
]);