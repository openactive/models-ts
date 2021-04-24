
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
const Action = s.intersection([
  s.type({'@type': s.literal('Action')}),
  s.partial({
      /**
      * The object upon which the action is carried out, whose state is kept intact or changed.
      *
      * ```json
      * "object": {
      *   "@type": "SessionSeries",
      *   "@id": "https://id.booking-system.example.com/session-series/42"
      * }
      * ```
      */
      object: s.union([oa.Order,oa.Event]),
  })
])

module.exports = {
  Action,
};