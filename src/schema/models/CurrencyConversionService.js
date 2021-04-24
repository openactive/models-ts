
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const CurrencyConversionService = s.intersection([
  s.type({'@type': s.literal('CurrencyConversionService')}),
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
      * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
      */
      feesAndCommissionsSpecification: s.union([s.urlString,s.string]),
      /**
      * The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
      */
      interestRate: s.union([s.nonNegativeFloat,schema.QuantitativeValue]),
      /**
      * The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
      */
      annualPercentageRate: s.union([schema.QuantitativeValue,s.nonNegativeFloat]),
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * The tangible thing generated by the service, e.g. a passport, permit, etc.
      */
      serviceOutput: schema.Thing,
      /**
      * A pointer to another, functionally similar product (or multiple products).
      */
      isSimilarTo: s.union([schema.Product,schema.Service]),
      /**
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
      */
      broker: s.union([schema.Person,schema.Organization]),
      /**
      * Human-readable terms of service documentation.
      */
      termsOfService: s.union([s.string,s.urlString]),
      /**
      * An award won by or for this item.
      */
      award: s.string,
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * A review of the item.
      */
      review: schema.Review,
      /**
      * The geographic area where a service or offered item is provided.
      */
      areaServed: s.union([s.string,schema.Place,schema.AdministrativeArea,schema.GeoShape]),
      /**
      * The audience eligible for this service.
      */
      serviceAudience: schema.Audience,
      /**
      * Indicates an OfferCatalog listing for this Organization, Person, or Service.
      */
      hasOfferCatalog: schema.OfferCatalog,
      /**
      * The tangible thing generated by the service, e.g. a passport, permit, etc.
      */
      produces: schema.Thing,
      /**
      * An associated logo.
      */
      logo: s.union([schema.ImageObject,s.urlString]),
      /**
      * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
      */
      availableChannel: schema.ServiceChannel,
      /**
      * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
      */
      category: s.union([schema.enums.PhysicalActivityCategory,s.string,s.urlString,schema.Thing]),
      /**
      * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
      */
      serviceType: s.union([s.string,schema.enums.GovernmentBenefitsType]),
      /**
      * A slogan or motto associated with the item.
      */
      slogan: s.string,
      /**
      * The hours during which this service or contact is available.
      */
      hoursAvailable: schema.OpeningHoursSpecification,
      /**
      * The geographic area where the service is provided.
      */
      serviceArea: s.union([schema.Place,schema.AdministrativeArea,schema.GeoShape]),
      /**
      * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
      */
      brand: s.union([schema.Brand,schema.Organization]),
      /**
      * An intended audience, i.e. a group for whom something was created.
      */
      audience: schema.Audience,
      /**
      * A pointer to another, somehow related product (or multiple products).
      */
      isRelatedTo: s.union([schema.Product,schema.Service]),
      /**
      * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
      */
      providerMobility: s.string,
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
  CurrencyConversionService,
};