
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
 * This type is derived from https://pending.schema.org/WebAPI.
 */
const WebAPI = s.intersection([
  s.type({'@type': s.literal('WebAPI')}),
  s.partial({
      /**
      * The name of the WebAPI
      *
      * ```json
      * "name": "Acme Leisure Sessions and Facilities"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Dataset, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."
      * ```
      */
      description: s.string,
      /**
      * The location of the OpenID Provider or other relevant authentication authority that must be used to access the API.
      *
      * ```json
      * "authenticationAuthority": "https://auth.bookingsystem.com"
      * ```
      */
      authenticationAuthority: s.urlString,
      /**
      * Indicates the version and profiles of OpenActive Open Booking Specification with which this WebAPI conforms, by specifying these as URLs.
      *
      * ```json
      * "conformsTo": [
      *   "https://openactive.io/open-booking-api/1.0/#core"
      * ]
      * ```
      */
      conformsTo: s.array(s.urlString),
      /**
      * A link to documentation related to the Dataset, or a link to the OpenActive developer documentation if no Dataset-specific documentation is available.
      *
      * ```json
      * "documentation": "https://developer.openactive.io"
      * ```
      */
      documentation: s.urlString,
      /**
      * The Open API document associated with this version of the Open Booking API
      *
      * ```json
      * "endpointDescription": "https://openactive.io/open-booking-api/1.0/swagger.json"
      * ```
      */
      endpointDescription: s.urlString,
      /**
      * The base URL of the Open Booking API
      *
      * ```json
      * "endpointURL": "https://example.bookingsystem.com/api/openbooking"
      * ```
      */
      endpointURL: s.urlString,
      /**
      * The web page the broker uses to obtain access to the API, e.g. via a web form.
      *
      * ```json
      * "landingPage": "https://exampleforms.com/get-me-an-api-access-key"
      * ```
      */
      landingPage: s.urlString,
      /**
      * A link to terms of service related to the use of this API.
      *
      * ```json
      * "termsOfService": "https://example.bookingsystem.com/terms"
      * ```
      */
      termsOfService: s.urlString,
  })
])

module.exports = {
  WebAPI,
};