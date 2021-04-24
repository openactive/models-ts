
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const ParagraphFormFieldSpecification = s.intersection([
  s.type({'@type': s.literal('ParagraphFormFieldSpecification')}),
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
      /**
      * Specifies that a value for the field is required to proceed with the booking.
      */
      valueRequired: s.boolean,
  })
])

module.exports = {
  ParagraphFormFieldSpecification,
};