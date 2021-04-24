const s = require('@imin/speck');

/**
 * An enumeration of several kinds of Map.
 */
const MapCategoryType = s.literalStringEnum([
  'https://schema.org/ParkingMap',
  'https://schema.org/TransitMap',
  'https://schema.org/VenueMap',
  'https://schema.org/SeatingMap',
]);