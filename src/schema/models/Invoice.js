
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Invoice = s.intersection([
  s.type({'@type': s.literal('Invoice')}),
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
      * Party placing the order or paying the invoice.
      */
      customer: s.union([schema.Organization,schema.Person]),
      /**
      * The time interval used to compute the invoice.
      */
      billingPeriod: s.string,
      /**
      * The total amount due.
      */
      totalPaymentDue: s.union([schema.PriceSpecification,schema.MonetaryAmount]),
      /**
      * The date that payment is due.
      */
      paymentDue: s.isoDateTimeString,
      /**
      * The minimum payment required at this time.
      */
      minimumPaymentDue: s.union([schema.PriceSpecification,schema.MonetaryAmount]),
      /**
      * A number that confirms the given order or payment has been received.
      */
      confirmationNumber: s.string,
      /**
      * The status of payment; whether the invoice has been paid or not.
      */
      paymentStatus: s.union([s.string,schema.PaymentStatusType]),
      /**
      * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
      */
      paymentMethodId: s.string,
      /**
      * The identifier for the account the payment will be applied to.
      */
      accountId: s.string,
      /**
      * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
      */
      broker: s.union([schema.Person,schema.Organization]),
      /**
      * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
      */
      referencesOrder: schema.Order,
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * The date the invoice is scheduled to be paid.
      */
      scheduledPaymentDate: s.string,
      /**
      * The date that payment is due.
      */
      paymentDueDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
      */
      category: s.union([schema.enums.PhysicalActivityCategory,s.string,s.urlString,schema.Thing]),
      /**
      * The name of the credit card or other method of payment for the order.
      */
      paymentMethod: schema.enums.PaymentMethod,
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
  Invoice,
};