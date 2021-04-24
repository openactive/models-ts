const s = require('@imin/speck');

/**
 * A list of possible levels for the legal validity of a legislation.
 */
const LegalValueLevel = s.literalStringEnum([
  'https://schema.org/AuthoritativeLegalValue',
  'https://schema.org/UnofficialLegalValue',
  'https://schema.org/DefinitiveLegalValue',
  'https://schema.org/OfficialLegalValue',
]);