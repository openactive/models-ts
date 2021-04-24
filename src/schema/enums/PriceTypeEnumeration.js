const s = require('@imin/speck');

/**
 * Enumerates different price types, for example list price, invoice price, and sale price.
 */
const PriceTypeEnumeration = s.literalStringEnum([
  'https://schema.org/SalePrice',
  'https://schema.org/InvoicePrice',
  'https://schema.org/MinimumAdvertisedPrice',
  'https://schema.org/ListPrice',
  'https://schema.org/SRP',
  'https://schema.org/MSRP',
]);