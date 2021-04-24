
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 */
const Brand = s.intersection([
  s.type({'@type': s.literal('Brand')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "BR1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the brand.
      *
      * ```json
      * "name": "Play Ball!"
      * ```
      */
      name: s.string,
      /**
      * A plain text description for the brand, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Play Ball! is a series of games for people of all abilities."
      * ```
      */
      description: s.string,
      /**
      * The logo associated with the brand.
      *
      * ```json
      * "logo": {
      *   "@type": "ImageObject",
      *   "url": "http://example.com/static/image/speedball_large.jpg"
      * }
      * ```
      */
      logo: oa.ImageObject,
      /**
      * A url where further information can be found for the brand.
      *
      * ```json
      * "url": "http://example.com/play_ball"
      * ```
      */
      url: s.urlString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
      * 
      * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
      */
      formattedDescription: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A related video object.
      * 
      * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
      */
      video: s.array(oa.VideoObject),
  })
])

module.exports = {
  Brand,
};