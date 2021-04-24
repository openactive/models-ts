const s = require('@imin/speck');

/**
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 */
const RsvpResponseType = s.literalStringEnum([
  'https://schema.org/RsvpResponseMaybe',
  'https://schema.org/RsvpResponseNo',
  'https://schema.org/RsvpResponseYes',
]);