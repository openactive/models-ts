
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const SizeSpecification = s.intersection([
  s.type({'@type': s.literal('SizeSpecification')}),
  s.partial({
      /**
      * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
      */
      hasMeasurement: schema.QuantitativeValue,
      /**
      * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
      */
      suggestedGender: s.union([s.string,schema.enums.GenderType]),
      /**
      * The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
      */
      sizeSystem: s.union([schema.enums.SizeSystemEnumeration,s.string]),
      /**
      * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
      */
      suggestedAge: schema.QuantitativeValue,
      /**
      * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
      */
      suggestedMeasurement: schema.QuantitativeValue,
      /**
      * The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
      */
      sizeGroup: s.union([schema.enums.SizeGroupEnumeration,s.string]),
  })
])

module.exports = {
  SizeSpecification,
};