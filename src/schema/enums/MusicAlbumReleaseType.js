const s = require('@imin/speck');

/**
 * The kind of release which this album is: single, EP or album.
 */
const MusicAlbumReleaseType = s.literalStringEnum([
  'https://schema.org/BroadcastRelease',
  'https://schema.org/AlbumRelease',
  'https://schema.org/EPRelease',
  'https://schema.org/SingleRelease',
]);