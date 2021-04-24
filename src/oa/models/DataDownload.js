
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * 
 * 
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 * 
 * 
 * 
 * This type is derived from https://schema.org/DataDownload, which means that any of this type's properties within schema.org may also be used.
 */
const DataDownload = s.intersection([
  s.type({'@type': s.literal('DataDownload')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "ScheduledSession"
      * ```
      */
      identifier: s.string,
      /**
      * The name of the type of feed
      *
      * ```json
      * "name": "SessionSeries"
      * ```
      */
      name: s.string,
      /**
      * A fully qualified reference to the class that is at the root of the items in the RPDE feed.
      *
      * ```json
      * "additionalType": "https://openactive.io/SessionSeries"
      * ```
      */
      additionalType: s.urlString,
      /**
      * The URL of the RPDE data feed.
      *
      * ```json
      * "contentUrl": "https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-session-series"
      * ```
      */
      contentUrl: s.urlString,
      /**
      * Must always be present and set to ```json
      * "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
      * ```
      *
      * ```json
      * "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
      * ```
      */
      encodingFormat: s.string,
  })
])

module.exports = {
  DataDownload,
};