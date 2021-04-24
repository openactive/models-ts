const s = require('@imin/speck');

/**
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 * An enumeration of settings in which a facility can exist.
 */
const FacilitySettingType = s.literalStringEnum([
  'https://openactive.io/ns-beta#IndoorFacility',
  'https://openactive.io/ns-beta#OutdoorFacility',
]);