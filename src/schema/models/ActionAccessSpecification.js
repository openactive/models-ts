
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const ActionAccessSpecification = s.intersection([
  s.type({'@type': s.literal('ActionAccessSpecification')}),
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
      * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
      */
      expectsAcceptanceOf: schema.Offer,
      /**
      * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
      *     
      */
      eligibleRegion: s.union([s.string,schema.GeoShape,schema.Place]),
      /**
      * The end of the availability of the product or service included in the offer.
      */
      availabilityEnds: s.union([s.isoDateTimeString,s.string]),
      /**
      * The beginning of the availability of the product or service included in the offer.
      */
      availabilityStarts: s.union([s.isoDateTimeString,s.string]),
      /**
      * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      *       
      */
      ineligibleRegion: s.union([schema.GeoShape,s.string,schema.Place]),
      /**
      * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
      */
      category: s.union([schema.enums.PhysicalActivityCategory,s.string,s.urlString,schema.Thing]),
      /**
      * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
      */
      requiresSubscription: s.union([s.boolean,schema.MediaSubscription]),
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
  ActionAccessSpecification,
};