
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/VideoObject, which means that any of this type's properties within schema.org may also be used.
 */
const VideoObject = s.intersection([
  s.type({'@type': s.literal('VideoObject')}),
  s.partial({
      /**
      * Actual bytes of the media object, for example the image file or video file.
      *
      * ```json
      * "contentUrl": "https://example.com/media/stayin/getfit"
      * ```
      */
      contentUrl: s.urlString,
      /**
      * A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag.
      *
      * ```json
      * "embedUrl": "https://example.com/media/stayin/getfit"
      * ```
      */
      embedUrl: s.urlString,
      /**
      * The height of the media in pixels.
      *
      * ```json
      * "height": 300
      * ```
      */
      height: s.nonNegativeInt,
      /**
      * The URL for a thumbnail image for the video.
      */
      thumbnail: s.array(oa.ImageObject),
      /**
      * The URL for the video.
      *
      * ```json
      * "url": "https://www.youtube.com/watch?v=3fbCs0GVjgQ"
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
  VideoObject,
};