const s = require('@imin/speck');

/**
 * Categories of physical activity, organized by physiologic classification.
 */
const PhysicalActivityCategory = s.literalStringEnum([
  'https://schema.org/Balance',
  'https://schema.org/AnaerobicActivity',
  'https://schema.org/Flexibility',
  'https://schema.org/StrengthTraining',
  'https://schema.org/AerobicActivity',
  'https://schema.org/OccupationalActivity',
  'https://schema.org/LeisureTimeActivity',
]);