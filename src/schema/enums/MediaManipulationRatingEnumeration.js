const s = require('@imin/speck');

/**
 *  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
 */
const MediaManipulationRatingEnumeration = s.literalStringEnum([
  'https://schema.org/OriginalMediaContent',
  'https://schema.org/TransformedContent',
  'https://schema.org/StagedContent',
  'https://schema.org/EditedOrCroppedContent',
  'https://schema.org/DecontextualizedContent',
  'https://schema.org/SatireOrParodyContent',
]);