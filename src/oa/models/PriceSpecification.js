
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const PriceSpecification = s.intersection([
  s.type({'@type': s.literal('PriceSpecification')}),
  s.partial({
      /**
      * Indicates if proceeding with booking requires a Customer to pay in advance, pay when attending, or have the option to do either. Values must be one of  https://openactive.io/Required,  https://openactive.io/Optional or  https://openactive.io/Unavailable.
      *
      * ```json
      * "prepayment": "https://openactive.io/Required"
      * ```
      */
      prepayment: oa.enums.RequiredStatusType,
      /**
      * The total amount.
      */
      price: s.nonNegativeFloat,
      /**
      * The currency of the price. Specified as a 3-letter ISO 4217 value. If a  PriceSpecification has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.
      */
      priceCurrency: s.string,
  })
])

module.exports = {
  PriceSpecification,
};