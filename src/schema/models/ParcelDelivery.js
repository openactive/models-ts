
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const ParcelDelivery = s.intersection([
  s.type({'@type': s.literal('ParcelDelivery')}),
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
      * Shipper tracking number.
      */
      trackingNumber: s.string,
      /**
      * The earliest date the package may arrive.
      */
      expectedArrivalFrom: s.union([s.string,s.isoDateTimeString]),
      /**
      * New entry added as the package passes through each leg of its journey (from shipment to final delivery).
      */
      deliveryStatus: schema.DeliveryEvent,
      /**
      * The latest date the package may arrive.
      */
      expectedArrivalUntil: s.union([s.string,s.isoDateTimeString]),
      /**
      * Method used for delivery or shipping.
      */
      hasDeliveryMethod: schema.enums.DeliveryMethod,
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * Destination address.
      */
      deliveryAddress: schema.PostalAddress,
      /**
      * The overall order the items in this delivery were included in.
      */
      partOfOrder: schema.Order,
      /**
      * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
      */
      carrier: schema.Organization,
      /**
      * Item(s) being shipped.
      */
      itemShipped: schema.Product,
      /**
      * Tracking url for the parcel delivery.
      */
      trackingUrl: s.urlString,
      /**
      * Shipper's address.
      */
      originAddress: schema.PostalAddress,
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
  ParcelDelivery,
};