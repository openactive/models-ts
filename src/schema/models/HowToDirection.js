
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const HowToDirection = s.intersection([
  s.type({'@type': s.literal('HowToDirection')}),
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
      * A sub-property of instrument. A supply consumed when performing instructions or a direction.
      */
      supply: s.union([schema.HowToSupply,s.string]),
      /**
      * A media object representing the circumstances after performing this direction.
      */
      afterMedia: s.union([schema.MediaObject,s.urlString]),
      /**
      * A media object representing the circumstances before performing this direction.
      */
      beforeMedia: s.union([schema.MediaObject,s.urlString]),
      /**
      * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
      */
      performTime: s.string,
      /**
      * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
      */
      totalTime: s.string,
      /**
      * A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
      */
      tool: s.union([s.string,schema.HowToTool]),
      /**
      * The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
      */
      prepTime: s.string,
      /**
      * A media object representing the circumstances while performing this direction.
      */
      duringMedia: s.union([s.urlString,schema.MediaObject]),
      /**
      * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
      */
      item: schema.Thing,
      /**
      * A link to the ListItem that follows the current one.
      */
      nextItem: schema.ListItem,
      /**
      * A link to the ListItem that preceeds the current one.
      */
      previousItem: schema.ListItem,
      /**
      * The position of an item in a series or sequence of items.
      */
      position: s.union([s.string,s.nonNegativeInt]),
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
  HowToDirection,
};