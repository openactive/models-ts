
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Barcode, which means that any of this type's properties within schema.org may also be used.
 */
const Barcode = s.intersection([
  s.type({'@type': s.literal('Barcode')}),
  s.partial({
      /**
      * The height of the media in pixels.
      *
      * ```json
      * "height": 300
      * ```
      */
      height: s.nonNegativeInt,
      /**
      * The barcode number
      *
      * ```json
      * "text": "0123456789"
      * ```
      */
      text: s.string,
      /**
      * The URL for a thumbnail image for an image.
      */
      thumbnail: s.array(oa.ImageObject),
      /**
      * A fallback rendered barcode image url in addition to the raw barcode details.
      *
      * ```json
      * "url": "https://fallback.image.example.com/476ac24c694da79c5e33731ebbb5f1"
      * ```
      */
      url: s.urlString,
      /**
      * The width of the media in pixels.
      *
      * ```json
      * "width": 400
      * ```
      */
      width: s.nonNegativeInt,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Type of barcode, e.g. 'Code39'
      * 
      * If you are using this property, please join the discussion at proposal [#130](https://github.com/openactive/open-booking-api/issues/130).
      */
      codeType: s.string,
  })
])

module.exports = {
  Barcode,
};