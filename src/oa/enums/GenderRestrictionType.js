const s = require('@imin/speck');

/**
 * Enumerated types for gender restrictions that are applied to Events
 */
const GenderRestrictionType = s.literalStringEnum([
  'https://openactive.io/NoRestriction',
  'https://openactive.io/MaleOnly',
  'https://openactive.io/FemaleOnly',
]);