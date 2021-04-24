
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * 
 * 
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 * 
 * 
 * 
 * This type is derived from https://schema.org/DataCatalog, which means that any of this type's properties within schema.org may also be used.
 */
const DataCatalog = s.intersection([
  s.type({'@type': s.literal('DataCatalog')}),
  s.partial({
      /**
      * The name of the `DataCatalog`
      *
      * ```json
      * "name": "Acme Leisure Sessions and Facilities"
      * ```
      */
      name: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://opendata.leisurecloud.live/api/datacatalog12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * The URLs of the dataset sites within this `DataCatalog`.
      *
      * ```json
      * "dataset": [
      *   "https://opendata.exercise-anywhere.com/",
      *   "https://www.participant.co.uk/participant/openactive/"
      * ]
      * ```
      */
      dataset: s.array(s.urlString),
      /**
      * The date this `DataCatalog` was last updated.
      *
      * ```json
      * "dateModified": "2018-01-27T12:00:00Z"
      * ```
      */
      dateModified: s.isoDateTimeString,
      /**
      * The date this `DataCatalog` was first published. Can be specified as a schema:Date or schema:DateTime.
      *
      * ```json
      * "datePublished": "2018-01-27T12:00:00Z"
      * ```
      */
      datePublished: s.union([s.string,s.isoDateTimeString]),
      /**
      * The URLs of each smaller `DataCatalog` within this `DataCatalog` collection.
      *
      * ```json
      * "hasPart": [
      *   "https://opendata.leisurecloud.live/api/datacatalog",
      *   "https://openactivedatacatalog.legendonlineservices.co.uk/api/DataCatalog"
      * ]
      * ```
      */
      hasPart: s.array(s.urlString),
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
      * The organization ultimately responsible for maintaining this `DataCatalog`.
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
  })
])

module.exports = {
  DataCatalog,
};