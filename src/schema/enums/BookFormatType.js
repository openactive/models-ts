const s = require('@imin/speck');

/**
 * The publication format of the book.
 */
const BookFormatType = s.literalStringEnum([
  'https://schema.org/EBook',
  'https://schema.org/AudiobookFormat',
  'https://schema.org/Hardcover',
  'https://schema.org/Paperback',
  'https://schema.org/GraphicNovel',
]);