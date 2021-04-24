
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 */
const GeoCoordinates = s.intersection([
  s.type({'@type': s.literal('GeoCoordinates')}),
  s.partial({
      /**
      * The latitude of a location. For example 51.522338 (WGS 84).
      *
      * ```json
      * "latitude": "51.522338"
      * ```
      */
      latitude: s.nonNegativeFloat,
      /**
      * The longitude of a location. For example -0.083437 (WGS 84).
      *
      * ```json
      * "longitude": "-0.083437"
      * ```
      */
      longitude: s.nonNegativeFloat,
  })
])

module.exports = {
  GeoCoordinates,
};