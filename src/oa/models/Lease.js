
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
const Lease = s.intersection([
  s.type({'@type': s.literal('Lease')}),
  s.partial({
      /**
      * Optional identifier of the Lease if useful for audit or debugging purposes.
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * Expiry DateTime of the Lease in ISO 8601 format
      */
      leaseExpires: s.isoDateTimeString,
  })
])

module.exports = {
  Lease,
};