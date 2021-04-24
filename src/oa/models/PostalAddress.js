
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PostalAddress, which means that any of this type's properties within schema.org may also be used.
 */
const PostalAddress = s.intersection([
  s.type({'@type': s.literal('PostalAddress')}),
  s.partial({
      /**
      * The country, expressed as a two-letter ISO 3166-1 alpha-2 country code.
      *
      * ```json
      * "addressCountry": "GB"
      * ```
      */
      addressCountry: s.string,
      /**
      * The locality, a suburb within a city or a town within a county or district.
      *
      * ```json
      * "addressLocality": "Shoreditch"
      * ```
      */
      addressLocality: s.string,
      /**
      * The region, either a city or a county or district.
      *
      * ```json
      * "addressRegion": "London"
      * ```
      */
      addressRegion: s.string,
      /**
      * The postal code.
      *
      * ```json
      * "postalCode": "EC2A 4JE"
      * ```
      */
      postalCode: s.string,
      /**
      * The street address.
      *
      * ```json
      * "streetAddress": "Open Data Institute, Floor 3, 65 Clifton St"
      * ```
      */
      streetAddress: s.string,
  })
])

module.exports = {
  PostalAddress,
};