
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 */
const OpeningHoursSpecification = s.intersection([
  s.type({'@type': s.literal('OpeningHoursSpecification')}),
  s.partial({
      /**
      * The closing time. Set "00:00" for the value of `opens` and `closes` to indicated the `Place` is closed on the specified days.
      *
      * ```json
      * "closes": "17:00"
      * ```
      */
      closes: s.string,
      /**
      * Defines the days of the week upon which the `opens` and `closes` values are specified. Note this property is optional when used within `specialOpeningHoursSpecification`.
      *
      * ```json
      * "dayOfWeek": [
      *   "https://schema.org/Saturday",
      *   "https://schema.org/Sunday"
      * ]
      * ```
      */
      dayOfWeek: s.array(schema.enums.DayOfWeek),
      /**
      * The opening time. Set "00:00" for the value of `opens` and `closes` to indicated the `Place` is closed on the specified days.
      *
      * ```json
      * "opens": "09:00"
      * ```
      */
      opens: s.string,
      /**
      * The date when the item becomes valid. The item will be valid at the beginning of the specified day. Note this property is required when used within `specialOpeningHoursSpecification`.
      *
      * ```json
      * "validFrom": "2018-01-22"
      * ```
      */
      validFrom: s.string,
      /**
      * The date after which the item is no longer valid. The item will cease to be valid at the end of the specified day. Note this property is required when used within `specialOpeningHoursSpecification`.
      *
      * ```json
      * "validThrough": "2018-01-27"
      * ```
      */
      validThrough: s.string,
  })
])

module.exports = {
  OpeningHoursSpecification,
};