const s = require('@imin/speck');

/**
 * Indicates whether this game is multi-player, co-op or single-player.
 */
const GamePlayMode = s.literalStringEnum([
  'https://schema.org/SinglePlayer',
  'https://schema.org/CoOp',
  'https://schema.org/MultiPlayer',
]);