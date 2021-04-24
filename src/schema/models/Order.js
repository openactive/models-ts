
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Order = s.intersection([
  s.type({'@type': s.literal('Order')}),
  s.partial({
      /**
      * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
      *         
      */
      identifier: s.union([schema.PropertyValue,s.urlString,s.string]),
      /**
      * The name of the item.
      */
      name: s.string,
      /**
      * A description of the item.
      */
      description: s.string,
      /**
      * Was the offer accepted as a gift for someone other than the buyer.
      */
      isGift: s.boolean,
      /**
      * The delivery of the parcel related to this order or order item.
      */
      orderDelivery: schema.ParcelDelivery,
      /**
      * Party placing the order or paying the invoice.
      */
      customer: s.union([schema.Organization,schema.Person]),
      /**
      * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
      */
      acceptedOffer: schema.Offer,
      /**
      * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
      */
      discountCurrency: s.string,
      /**
      * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
      */
      seller: s.union([schema.Organization,schema.Person]),
      /**
      * The date that payment is due.
      */
      paymentDue: s.isoDateTimeString,
      /**
      * A number that confirms the given order or payment has been received.
      */
      confirmationNumber: s.string,
      /**
      * The identifier of the transaction.
      */
      orderNumber: s.string,
      /**
      * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
      */
      paymentMethodId: s.string,
      /**
      * The billing address for the order.
      */
      billingAddress: schema.PostalAddress,
      /**
      * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
      */
      broker: s.union([schema.Person,schema.Organization]),
      /**
      * The URL for sending a payment.
      */
      paymentUrl: s.urlString,
      /**
      * The order is being paid as part of the referenced Invoice.
      */
      partOfInvoice: schema.Invoice,
      /**
      * The date that payment is due.
      */
      paymentDueDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * 'merchant' is an out-dated term for 'seller'.
      */
      merchant: s.union([schema.Person,schema.Organization]),
      /**
      * The item ordered.
      */
      orderedItem: s.union([schema.Product,schema.OrderItem,schema.Service]),
      /**
      * Date order was placed.
      */
      orderDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * The name of the credit card or other method of payment for the order.
      */
      paymentMethod: schema.enums.PaymentMethod,
      /**
      * Code used to redeem a discount.
      */
      discountCode: s.string,
      /**
      * The current status of the order.
      */
      orderStatus: schema.OrderStatus,
      /**
      * Any discount applied (to an Order).
      */
      discount: s.union([s.nonNegativeFloat,s.string]),
      /**
      * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
      */
      sameAs: s.urlString,
      /**
      * A CreativeWork or Event about this Thing.
      */
      subjectOf: s.union([schema.Event,schema.CreativeWork]),
      /**
      * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
      */
      potentialAction: schema.Action,
      /**
      * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
      */
      mainEntityOfPage: s.union([schema.CreativeWork,s.urlString]),
      /**
      * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      */
      additionalType: s.urlString,
      /**
      * An alias for the item.
      */
      alternateName: s.string,
      /**
      * URL of the item.
      */
      url: s.urlString,
      /**
      * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
      */
      image: s.union([schema.ImageObject,s.urlString]),
      /**
      * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
      */
      disambiguatingDescription: s.string,
  })
])

module.exports = {
  Order,
};