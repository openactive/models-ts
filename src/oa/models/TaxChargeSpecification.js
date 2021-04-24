
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const TaxChargeSpecification = s.intersection([
  s.type({'@type': s.literal('TaxChargeSpecification')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the tax charge, e.g. "VAT at 0% for EU transactions"
      */
      name: s.string,
      /**
      * The total amount.
      */
      price: s.nonNegativeFloat,
      /**
      * The currency of the price. Specified as a 3-letter ISO 4217 value. If a  PriceSpecification has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.
      */
      priceCurrency: s.string,
      /**
      * The rate of VAT.
      */
      rate: s.nonNegativeFloat,
  })
])

module.exports = {
  TaxChargeSpecification,
};