
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Service, which means that any of this type's properties within schema.org may also be used.
 */
const BookingService = s.intersection([
  s.type({'@type': s.literal('BookingService')}),
  s.partial({
      /**
      * The name of the Booking System.
      */
      name: s.string,
      /**
      * The version of the application, useful for on-premise installations. Note this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
      */
      softwareVersion: s.string,
      /**
      * The terms of service of the Booking System.
      */
      termsOfService: s.array(oa.Terms),
      /**
      * The URL of the website of the Booking System.
      */
      url: s.urlString,
  })
])

module.exports = {
  BookingService,
};