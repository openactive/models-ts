const s = require('@imin/speck');

/**
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
const SizeSystemEnumeration = s.literalStringEnum([
  'https://schema.org/SizeSystemImperial',
  'https://schema.org/SizeSystemMetric',
]);