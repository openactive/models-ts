
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 */
const Place = s.intersection([
  s.type({'@type': s.literal('Place')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the Place
      *
      * ```json
      * "name": "Raynes Park High School"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Place, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Raynes Park High School in London"
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/place/12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * A structured PostalAddress object for the Place.
      * Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires https://schema.org/PostalAddress and will not accept plain text addresses.
      *
      * ```json
      * "address": {
      *   "@type": "PostalAddress",
      *   "streetAddress": "Raynes Park High School, 46A West Barnes Lane",
      *   "addressLocality": "New Malden",
      *   "addressRegion": "London",
      *   "postalCode": "NW5 3DU",
      *   "addressCountry": "GB"
      * }
      * ```
      */
      address: s.union([s.string,oa.PostalAddress]),
      /**
      * An array listing the Ammenities of the Place.
      *
      * ```json
      * "amenityFeature": [
      *   {
      *     "name": "Changing Facilities",
      *     "value": true,
      *     "@type": "ChangingFacilities"
      *   },
      *   {
      *     "name": "Showers",
      *     "value": false,
      *     "@type": "Showers"
      *   },
      *   {
      *     "name": "Lockers",
      *     "value": true,
      *     "@type": "Lockers"
      *   },
      *   {
      *     "name": "Towels",
      *     "value": false,
      *     "@type": "Towels"
      *   },
      *   {
      *     "name": "Creche",
      *     "value": false,
      *     "@type": "Creche"
      *   },
      *   {
      *     "name": "Parking",
      *     "value": true,
      *     "@type": "Parking"
      *   }
      * ]
      * ```
      */
      amenityFeature: s.array(oa.LocationFeatureSpecification),
      /**
      * The place within which this Place exists
      *
      * ```json
      * "containedInPlace": {
      *   "@type": "Place",
      *   "url": "https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village",
      *   "name": "Middlesbrough Sports Village"
      * }
      * ```
      */
      containedInPlace: oa.Place,
      /**
      * Places that exist within this place
      *
      * ```json
      * "containsPlace": {
      *   "@type": "Place",
      *   "url": "https://www.everyoneactive.com/centres/Center-Parcs-Sports-Plaza",
      *   "name": "Center Parcs Sports Plaza"
      * }
      * ```
      */
      containsPlace: s.array(oa.Place),
      /**
      * The geo coordinates of the Place.
      *
      * ```json
      * "geo": {
      *   "latitude": 51.4034423828125,
      *   "longitude": -0.2369088977575302,
      *   "@type": "GeoCoordinates"
      * }
      * ```
      */
      geo: oa.GeoCoordinates,
      /**
      * An image or photo that depicts the place, e.g. a photo taken at a previous event.
      *
      * ```json
      * "image": [
      *   {
      *     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",
      *     "@type": "ImageObject",
      *     "url": "http://example.com/static/image/speedball_large.jpg"
      *   }
      * ]
      * ```
      */
      image: s.array(oa.ImageObject),
      /**
      * The times the Place is open
      */
      openingHoursSpecification: s.array(oa.OpeningHoursSpecification),
      /**
      * Explicitly override general opening hours brought in scope by `schema:openingHoursSpecification`.
      */
      specialOpeningHoursSpecification: s.array(oa.OpeningHoursSpecification),
      /**
      * The telephone number for the Place
      *
      * ```json
      * "telephone": "01253 473934"
      * ```
      */
      telephone: s.string,
      /**
      * The website for the Place
      *
      * ```json
      * "url": "http://www.rphs.org.uk/"
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
  })
])

module.exports = {
  Place,
};