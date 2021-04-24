const s = require('@imin/speck');

/**
 * A type of boarding policy used by an airline.
 */
const BoardingPolicyType = s.literalStringEnum([
  'https://schema.org/GroupBoardingPolicy',
  'https://schema.org/ZoneBoardingPolicy',
]);