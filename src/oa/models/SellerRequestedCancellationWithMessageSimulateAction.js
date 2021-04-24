
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.] 
 * 
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
const SellerRequestedCancellationWithMessageSimulateAction = s.intersection([
  s.type({'@type': s.literal('SellerRequestedCancellationWithMessageSimulateAction')}),
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
  SellerRequestedCancellationWithMessageSimulateAction,
};