const s = require('@imin/speck');

/**
 * A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
 */
const RestrictedDiet = s.literalStringEnum([
  'https://schema.org/VegetarianDiet',
  'https://schema.org/LowCalorieDiet',
  'https://schema.org/GlutenFreeDiet',
  'https://schema.org/KosherDiet',
  'https://schema.org/VeganDiet',
  'https://schema.org/LowFatDiet',
  'https://schema.org/LowLactoseDiet',
  'https://schema.org/DiabeticDiet',
  'https://schema.org/HinduDiet',
  'https://schema.org/LowSaltDiet',
  'https://schema.org/HalalDiet',
]);