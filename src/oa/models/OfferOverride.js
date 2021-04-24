
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
const OfferOverride = s.intersection([
  s.type({'@type': s.literal('OfferOverride')}),
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
      * The name of the Offer suitable for communication to participants.
      *
      * ```json
      * "name": "Speedball winger position"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Offer, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Concession requirements are available at https://www.fusion-lifestyle.com/. Proof of entitlement to concession membership must be provided when you visit the centre."
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/offer/fc8f8c37e70ae50b12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Indicates the offline payment methods accepted by this provider.
      *
      * ```json
      * "acceptedPaymentMethod": [
      *   "http://purl.org/goodrelations/v1#Cash",
      *   "http://purl.org/goodrelations/v1#PaymentMethodCreditCard"
      * ]
      * ```
      */
      acceptedPaymentMethod: s.array(oa.enums.PaymentMethod),
      /**
      * Can include  https://openactive.io/OpenBookingIntakeForm,  https://openactive.io/OpenBookingAttendeeDetails,  https://openactive.io/OpenBookingApproval,  https://openactive.io/OpenBookingNegotiation,  https://openactive.io/OpenBookingMessageExchange
      */
      openBookingFlowRequirement: s.array(oa.enums.OpenBookingFlowRequirement),
      /**
      * The offer price of the activity.
      * This price should be specified without currency symbols and as a floating point number with two decimal places.
      * The currency of the price should be expressed in the priceCurrency field.
      * Includes or excludes tax depending on the taxMode of the seller.
      *
      * ```json
      * "price": "33"
      * ```
      */
      price: s.nonNegativeFloat,
      /**
      * The currency of the price. Specified as a 3-letter ISO 4217 value. If an Offer has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.
      *
      * ```json
      * "priceCurrency": "GBP"
      * ```
      */
      priceCurrency: s.string,
      /**
      * URL describing the offer
      *
      * ```json
      * "url": "http://www.rphs.org.uk/"
      * ```
      */
      url: s.urlString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Number of people the reservation should accommodate.
      * 
      * If you are using this property, please join the discussion at proposal [#250](https://github.com/openactive/modelling-opportunity-data/issues/250).
      */
      partySize: oa.QuantitativeValue,
  })
])

module.exports = {
  OfferOverride,
};