const s = require('@imin/speck');

/**
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 */
const MusicAlbumProductionType = s.literalStringEnum([
  'https://schema.org/SpokenWordAlbum',
  'https://schema.org/SoundtrackAlbum',
  'https://schema.org/StudioAlbum',
  'https://schema.org/RemixAlbum',
  'https://schema.org/DemoAlbum',
  'https://schema.org/MixtapeAlbum',
  'https://schema.org/LiveAlbum',
  'https://schema.org/DJMixAlbum',
  'https://schema.org/CompilationAlbum',
]);