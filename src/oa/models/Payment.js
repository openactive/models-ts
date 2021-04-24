
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
const Payment = s.intersection([
  s.type({'@type': s.literal('Payment')}),
  s.partial({
      /**
      * The identifier of the payment held by the Broker and/or Payment Provider.
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.string,
      /**
      * Optional free text description of the payment method for the Booking System, to help the Seller in discussions with the Customer (e.g. 'AcmeBroker Points' or 'AcmeBroker via Credit Card').
      */
      name: s.string,
      /**
      * A reference used by the Seller to group transactions, which is used to aid reconciliation.
      */
      accountId: s.string,
      /**
      * PropertyValue that contains a text value useful for reconciliation.
      */
      additionalProperty: s.array(oa.PropertyValue),
      /**
      * paymentMethod must not be used, and is reserved for future versions of this specification.
      */
      paymentMethod: oa.enums.PaymentMethod,
      /**
      * A reference to the specific Payment Provider that is used.
      */
      paymentProviderId: s.string,
  })
])

module.exports = {
  Payment,
};