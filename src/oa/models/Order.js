
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
const Order = s.intersection([
  s.type({'@type': s.literal('Order')}),
  s.partial({
      /**
      * The Order UUID of the Order, OrderQuote or OrderProposal, which is required within the Orders feed.
      *
      * ```json
      * "identifier": "123e4567-e89b-12d3-a456-426614174000"
      * ```
      */
      identifier: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/Order/a4bf0373270be80312345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Details about the Booking System
      */
      bookingService: oa.BookingService,
      /**
      * The organisation or developer providing an application that allows Customers to make bookings. Those applications will be clients of the API defined in this specification. If brokerRole is set to https://openactive.io/NoBroker this is not required.
      */
      broker: oa.Organization,
      /**
      * Either https://openactive.io/AgentBroker,  https://openactive.io/ResellerBroker or  https://openactive.io/NoBroker, as agreed in advance between the Broker and Seller.
      */
      brokerRole: oa.enums.BrokerType,
      /**
      * The person or organization purchasing the Order.
      */
      customer: s.union([oa.Organization,oa.Person]),
      /**
      * This property is internal to the Broker in this version of the specification.
      */
      orderCreationStatus: oa.enums.OrderCreationStatus,
      /**
      * The items that constitute the Order.
      */
      orderedItem: s.array(oa.OrderItem),
      /**
      * The Customer-facing identifier of the Order.
      */
      orderNumber: s.string,
      /**
      * The unique URL representing this version of the  OrderProposal, or the version of the OrderProposal to which this Order is related.
      */
      orderProposalVersion: s.urlString,
      /**
      * The payment associated with the Order by the Broker. It is required for cases where a payment has been taken.
      */
      payment: oa.Payment,
      /**
      * The organisation (schema:Organization) or person (schema:Person) providing access to events or facilities via a Booking System. e.g. a leisure provider or independent instructor running a yoga classes.
      */
      seller: s.union([oa.Person,oa.Organization,s.urlString]),
      /**
      * Set to true when business-to-business tax calculation is required by the seller or brokerRole settings, but not supported by the Broker.
      */
      taxCalculationExcluded: s.boolean,
      totalPaymentDue: oa.PriceSpecification,
      /**
      * Breakdown of tax payable for the Order.
      */
      totalPaymentTax: s.array(oa.TaxChargeSpecification),
  })
])

module.exports = {
  Order,
};