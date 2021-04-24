
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const TouristTrip = s.intersection([
  s.type({'@type': s.literal('TouristTrip')}),
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
      * Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
      */
      touristType: s.union([schema.Audience,s.string]),
      /**
      * Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
      */
      itinerary: s.union([schema.Place,schema.ItemList]),
      /**
      * Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
      */
      subTrip: schema.Trip,
      /**
      * Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
      */
      partOfTrip: schema.Trip,
      /**
      * The expected arrival time.
      */
      arrivalTime: s.union([s.string,s.isoDateTimeString]),
      /**
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * The expected departure time.
      */
      departureTime: s.union([s.string,s.isoDateTimeString]),
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
  TouristTrip,
};