const s = require('@imin/speck');

/**
 * A type of permission which can be granted for accessing a digital document.
 */
const DigitalDocumentPermissionType = s.literalStringEnum([
  'https://schema.org/WritePermission',
  'https://schema.org/ReadPermission',
  'https://schema.org/CommentPermission',
]);