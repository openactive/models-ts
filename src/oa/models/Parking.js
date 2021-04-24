
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const Parking = s.intersection([
  s.type({'@type': s.literal('Parking')}),
  s.partial({
      /**
      * A string, suitable for presentation in user interfaces.
      *
      * ```json
      * "name": "Roadside Parking"
      * ```
      */
      name: s.string,
      /**
      * A boolean value indicating whether this ammenity is available.
      */
      value: s.boolean,
  })
])

module.exports = {
  Parking,
};