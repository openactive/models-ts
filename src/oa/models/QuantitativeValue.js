
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 */
const QuantitativeValue = s.intersection([
  s.type({'@type': s.literal('QuantitativeValue')}),
  s.partial({
      /**
      * The maximum value.
      *
      * ```json
      * "maxValue": 60
      * ```
      */
      maxValue: s.nonNegativeInt,
      /**
      * The minimum value.
      *
      * ```json
      * "minValue": 16
      * ```
      */
      minValue: s.nonNegativeInt,
  })
])

module.exports = {
  QuantitativeValue,
};