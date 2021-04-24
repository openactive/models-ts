
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/ImageObject, which means that any of this type's properties within schema.org may also be used.
 */
const ImageObject = s.intersection([
  s.type({'@type': s.literal('ImageObject')}),
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
      * The URL for a thumbnail image for an image.
      */
      thumbnail: s.array(oa.ImageObject),
      /**
      * The URL for the display resolution image.
      *
      * ```json
      * "url": "http://example.com/static/image/speedball_large.jpg"
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
  })
])

module.exports = {
  ImageObject,
};