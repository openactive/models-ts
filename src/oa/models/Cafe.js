
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.] 
 * 
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const Cafe = s.intersection([
  s.type({'@type': s.literal('Cafe')}),
  s.partial({
      /**
      * A string, suitable for presentation in user interfaces.
      *
      * ```json
      * "name": "Bike Shed"
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
  Cafe,
};