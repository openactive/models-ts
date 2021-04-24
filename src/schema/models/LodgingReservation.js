
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const LodgingReservation = s.intersection([
  s.type({'@type': s.literal('LodgingReservation')}),
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
      * The earliest someone may check into a lodging establishment.
      */
      checkinTime: s.union([s.isoDateTimeString,s.string]),
      /**
      * Textual description of the unit type (including suite vs. room, size of bed, etc.).
      */
      lodgingUnitType: s.union([schema.enums.QualitativeValue,s.string]),
      /**
      * The number of children staying in the unit.
      */
      numChildren: s.union([s.nonNegativeInt,schema.QuantitativeValue]),
      /**
      * A full description of the lodging unit.
      */
      lodgingUnitDescription: s.string,
      /**
      * The number of adults staying in the unit.
      */
      numAdults: s.union([s.nonNegativeInt,schema.QuantitativeValue]),
      /**
      * The latest someone may check out of a lodging establishment.
      */
      checkoutTime: s.union([s.isoDateTimeString,s.string]),
      /**
      * The person or organization the reservation or ticket is for.
      */
      underName: s.union([schema.Person,schema.Organization]),
      /**
      * The current status of the reservation.
      */
      reservationStatus: schema.ReservationStatusType,
      /**
      * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
      */
      programMembershipUsed: schema.ProgramMembership,
      /**
      * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
      */
      priceCurrency: s.string,
      /**
      * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
      */
      broker: s.union([schema.Person,schema.Organization]),
      /**
      * The date and time the reservation was booked.
      */
      bookingTime: s.isoDateTimeString,
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * A unique identifier for the reservation.
      */
      reservationId: s.string,
      /**
      * The date and time the reservation was modified.
      */
      modifiedTime: s.isoDateTimeString,
      /**
      * The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
      */
      totalPrice: s.union([s.nonNegativeFloat,s.string,schema.PriceSpecification]),
      /**
      * The thing -- flight, event, restaurant,etc. being reserved.
      */
      reservationFor: schema.Thing,
      /**
      * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
      */
      bookingAgent: s.union([schema.Person,schema.Organization]),
      /**
      * A ticket associated with the reservation.
      */
      reservedTicket: schema.Ticket,
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
  LodgingReservation,
};