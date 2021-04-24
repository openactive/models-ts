
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const BooleanFormFieldSpecification = s.intersection([
  s.type({'@type': s.literal('BooleanFormFieldSpecification')}),
  s.partial({
      /**
      * Display label for the field.
      */
      name: s.string,
      /**
      * Descriptive help plain text for the field, which must not include HTML or other markup.
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/someid12345"
      * ```
      */
      '@id': s.urlString,
  })
])

module.exports = {
  BooleanFormFieldSpecification,
};