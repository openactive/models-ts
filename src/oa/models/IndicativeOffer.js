
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.] 
 * 
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
const IndicativeOffer = s.intersection([
  s.type({'@type': s.literal('IndicativeOffer')}),
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
      * "@id": "https://example.com/offer/12345"
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
      * Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either. Values must be one of  https://openactive.io/Required,  https://openactive.io/Optional or  https://openactive.io/Unavailable.
      *
      * ```json
      * "advanceBooking": "https://openactive.io/Required"
      * ```
      */
      advanceBooking: oa.enums.RequiredStatusType,
      /**
      * [DEPRECATED: Use `ageRestriction` instead of `ageRange` within the `Offer` for cases where the `Offer` is age restricted.]
      * Indicates that an Offer is only applicable to a specific age range.
      */
      ageRange: oa.QuantitativeValue,
      /**
      * Indicates that an Offer can only be purchased by participants within a specific age range. Specified as a QuantitativeValue with minValue and maxValue properties. This must be displayed prominently to the user when selecting an `Offer` or before booking.
      *
      * ```json
      * "ageRestriction": {
      *   "@type": "QuantitativeValue",
      *   "minValue": 15,
      *   "maxValue": 60
      * }
      * ```
      */
      ageRestriction: oa.QuantitativeValue,
      /**
      * Whether the opportunity can be cancelled with a full refund at any time before the `startDate`, or before the `latestCancellationBeforeStartDate` if provided.
      */
      allowCustomerCancellationFullRefund: s.boolean,
      /**
      * The channels through which a booking can be made.
      */
      availableChannel: s.array(oa.enums.AvailableChannelType),
      /**
      * The duration before the startDate during which this Offer may not be cancelled, given in ISO 8601 format.
      */
      latestCancellationBeforeStartDate: s.string,
      /**
      * Can include  https://openactive.io/OpenBookingIntakeForm,  https://openactive.io/OpenBookingAttendeeDetails,  https://openactive.io/OpenBookingApproval,  https://openactive.io/OpenBookingNegotiation,  https://openactive.io/OpenBookingMessageExchange
      */
      openBookingFlowRequirement: s.array(oa.enums.OpenBookingFlowRequirement),
      /**
      * Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either. Values must be one of  https://openactive.io/Required,  https://openactive.io/Optional or  https://openactive.io/Unavailable.
      *
      * ```json
      * "prepayment": "https://openactive.io/Required"
      * ```
      */
      prepayment: oa.enums.RequiredStatusType,
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
      * The duration before the startDate for which this Offer is valid, given in ISO 8601 format. This is a relatively-defined equivalent of schema:validFrom, to allow for Offer inheritance.
      */
      validFromBeforeStartDate: s.string,
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
  IndicativeOffer,
};