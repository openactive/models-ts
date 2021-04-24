
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
const OrderItem = s.intersection([
  s.type({'@type': s.literal('OrderItem')}),
  s.partial({
      /**
      * The offer from the associated orderedItem that has been selected by the Customer. The price of this includes or excludes tax depending on the taxMode of the Order.
      */
      acceptedOffer: s.union([oa.Offer,s.urlString]),
      /**
      * Channel through which the user can participate in the Opportunity. Not applicable for an OrderQuote.
      */
      accessChannel: oa.VirtualLocation,
      /**
      * PropertyValue that contains a text value usable for entrance. Not applicable for an  OrderQuote.
      */
      accessCode: s.array(oa.PropertyValue),
      /**
      * ImageObject or Barcode that contains reference to an asset (e.g. Barcode, QR code image or PDF) usable for entrance. Not applicable for an OrderQuote.
      */
      accessPass: s.array(oa.ImageObject),
      /**
      * The person attending the Opportunity related to the OrderItem.
      */
      attendee: oa.Person,
      /**
      * The properties of `schema:Person` that are required to describe an `attendee` for this `OrderItem`.
      */
      attendeeDetailsRequired: s.array(oa.enums.PropertyEnumeration),
      /**
      * A message set by the Seller in the event of Opportunity cancellation, only applicable for an  `Order` and where the `OrderItem` has `orderItemStatus` set to `https://openactive.io/SellerCancelled`
      */
      cancellationMessage: s.string,
      /**
      * A message set by the Seller to trigger a notification to the Customer, only applicable for an `Order` and where the `OrderItem` has `orderItemStatus` set to  `https://openactive.io/OrderItemConfirmed` or `https://openactive.io/CustomerAttended`
      */
      customerNotice: s.string,
      /**
      * Array of errors related to the OrderItem being included in the Order, only applicable for an  OrderQuote.
      */
      error: s.array(oa.OpenBookingError),
      /**
      * The specific bookable Thing that has been selected by the Customer. See the [Modelling-Opportunity-Data] for more information on these types. Note that the Broker Request and Orders feed only require id within these objects to be included; in these contexts, all other properties are ignored.
      */
      orderedItem: s.union([oa.Event,s.urlString]),
      /**
      * PropertyValueSpecifications that describe fields in the orderItemIntakeForm.
      */
      orderItemIntakeForm: s.array(oa.PropertyValueSpecification),
      /**
      * PropertyValues that contains a text value responses to the orderItemIntakeForm.
      */
      orderItemIntakeFormResponse: s.array(oa.PropertyValue),
      orderItemStatus: oa.enums.OrderItemStatus,
      /**
      * An integer representing the order of OrderItems within the array.
      */
      position: s.nonNegativeInt,
      /**
      * Breakdown of tax payable for the OrderItem.
      */
      unitTaxSpecification: s.array(oa.TaxChargeSpecification),
  })
])

module.exports = {
  OrderItem,
};