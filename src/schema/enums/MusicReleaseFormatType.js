const s = require('@imin/speck');

/**
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
const MusicReleaseFormatType = s.literalStringEnum([
  'https://schema.org/DVDFormat',
  'https://schema.org/DigitalAudioTapeFormat',
  'https://schema.org/VinylFormat',
  'https://schema.org/CDFormat',
  'https://schema.org/CassetteFormat',
  'https://schema.org/LaserDiscFormat',
  'https://schema.org/DigitalFormat',
]);