
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * 
 * 
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based almost entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 * 
 * 
 * 
 * This type is derived from https://schema.org/Dataset, which means that any of this type's properties within schema.org may also be used.
 */
const Dataset = s.intersection([
  s.type({'@type': s.literal('Dataset')}),
  s.partial({
      /**
      * The name of the `Dataset`
      *
      * ```json
      * "name": "Acme Leisure Sessions and Facilities"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the `Dataset`, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://opendata.fusion-lifestyle.com/OpenActive/12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Information about the Open Booking API. Note this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE.
      */
      accessService: oa.WebAPI,
      /**
      * A background image for the `Dataset`.
      *
      * ```json
      * "backgroundImage": {
      *   "@type": "ImageObject",
      *   "url": "http://example.com/static/image/speedball_large.jpg"
      * }
      * ```
      */
      backgroundImage: oa.ImageObject,
      /**
      * Information about the Booking System or publishing platform
      */
      bookingService: oa.BookingService,
      /**
      * The date this `Dataset` was last updated. For RPDE feeds this may simply be the date and time that the Dataset Site was rendered, which may be cached.
      *
      * ```json
      * "dateModified": "2018-01-27T12:00:00Z"
      * ```
      */
      dateModified: s.isoDateTimeString,
      /**
      * The date this `Dataset` was first published. Can be specified as a schema:Date or schema:DateTime.
      *
      * ```json
      * "datePublished": "2018-01-27T12:00:00Z"
      * ```
      */
      datePublished: s.union([s.string,s.isoDateTimeString]),
      /**
      * A URL that can be used to raise issues related to the `Dataset` via a public forum.
      *
      * ```json
      * "discussionUrl": "https://github.com/gladstonemrm/FusionLifestyle/issues"
      * ```
      */
      discussionUrl: s.urlString,
      /**
      * An array of feeds within the dataset
      *
      * ```json
      * "distribution": [
      *   {
      *     "@type": "DataDownload",
      *     "name": "FacilityUse",
      *     "additionalType": "https://openactive.io/FacilityUse",
      *     "encodingFormat": "application/vnd.openactive.rpde+json; version=1",
      *     "contentUrl": "https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-facility-uses"
      *   }
      * ]
      * ```
      */
      distribution: s.array(oa.DataDownload),
      /**
      * A link to documentation related to the `Dataset`, or a link to the OpenActive developer documentation if no Dataset-specific documentation is available.
      *
      * ```json
      * "documentation": "https://developer.openactive.io"
      * ```
      */
      documentation: s.urlString,
      /**
      * An array of languages included in the Dataset's content. Please use one of the language codes from the IETF BCP 47 standard.
      *
      * ```json
      * "inLanguage": [
      *   "en-GB"
      * ]
      * ```
      */
      inLanguage: s.array(s.string),
      /**
      * Keywords for search engine optimisation
      *
      * ```json
      * "keywords": [
      *   "Sessions",
      *   "Facilities",
      *   "Activities",
      *   "Sports",
      *   "Physical Activity",
      *   "OpenActive"
      * ]
      * ```
      */
      keywords: s.array(s.string),
      /**
      * Must always be present and set to ```json
      * "license": "https://creativecommons.org/licenses/by/4.0/"
      * ```
      *
      * ```json
      * "license": "https://creativecommons.org/licenses/by/4.0/"
      * ```
      */
      license: s.urlString,
      /**
      * The organization ultimately responsible for this `Dataset`.
      *
      * ```json
      * "publisher": {
      *   "@type": "Organization",
      *   "name": "Central Speedball Association",
      *   "url": "http://www.speedball-world.com"
      * }
      * ```
      */
      publisher: oa.Organization,
      /**
      * Indicates the version of OpenActive Modelling Opportunity Data Specification with which this `Dataset` conforms, by specifying its URL.
      *
      * ```json
      * "schemaVersion": "https://openactive.io/modelling-opportunity-data/2.0/"
      * ```
      */
      schemaVersion: s.urlString,
      /**
      * The URL of the dataset site.
      *
      * ```json
      * "url": "https://opendata.fusion-lifestyle.com/OpenActive/"
      * ```
      */
      url: s.urlString,
  })
])

module.exports = {
  Dataset,
};