const s = require('@imin/speck');

/**
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 */
const CarUsageType = s.literalStringEnum([
  'https://schema.org/RentalVehicleUsage',
  'https://schema.org/DrivingSchoolVehicleUsage',
  'https://schema.org/TaxiVehicleUsage',
]);