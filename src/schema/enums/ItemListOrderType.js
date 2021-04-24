const s = require('@imin/speck');

/**
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
const ItemListOrderType = s.literalStringEnum([
  'https://schema.org/ItemListOrderAscending',
  'https://schema.org/ItemListUnordered',
  'https://schema.org/ItemListOrderDescending',
]);