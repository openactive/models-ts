
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PropertyValue, which means that any of this type's properties within schema.org may also be used.
 */
const PropertyValue = s.intersection([
  s.type({'@type': s.literal('PropertyValue')}),
  s.partial({
      /**
      * The name of this PropertyValue
      *
      * ```json
      * "name": "Vendor ID"
      * ```
      */
      name: s.string,
      /**
      * Additional human-readable version of the value of the property.
      */
      description: s.string,
      /**
      * A commonly used identifier for the characteristic represented by the property
      *
      * ```json
      * "propertyID": "https://example.com/photoconsent"
      * ```
      */
      propertyID: s.union([s.string,s.urlString]),
      /**
      * The actual value of this identifier
      *
      * ```json
      * "value": "SB1234"
      * ```
      */
      value: s.union([s.boolean,s.string]),
  })
])

module.exports = {
  PropertyValue,
};