
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Person = s.intersection([
  s.type({'@type': s.literal('Person')}),
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
      * The most generic uni-directional social relation.
      */
      follows: schema.Person,
      /**
      * A contact location for a person's place of work.
      */
      workLocation: s.union([schema.ContactPoint,schema.Place]),
      /**
      * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
      */
      affiliation: schema.Organization,
      /**
      * The height of the item.
      */
      height: s.union([schema.QuantitativeValue,schema.Distance]),
      /**
      * Organizations that the person works for.
      */
      worksFor: schema.Organization,
      /**
      * Physical address of the item.
      */
      address: s.union([s.string,schema.PostalAddress]),
      /**
      * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
      */
      honorificPrefix: s.string,
      /**
      * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
      */
      globalLocationNumber: s.string,
      /**
      * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
      */
      knowsAbout: s.union([s.string,s.urlString,schema.Thing]),
      /**
      * A contact point for a person or organization.
      */
      contactPoint: schema.ContactPoint,
      /**
      * The job title of the person (for example, Financial Manager).
      */
      jobTitle: s.union([schema.DefinedTerm,s.string]),
      /**
      * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
      */
      knowsLanguage: s.union([s.string,schema.Language]),
      /**
      * The Person's occupation. For past professions, use Role for expressing dates.
      */
      hasOccupation: schema.Occupation,
      /**
      * Event that this person is a performer or participant in.
      */
      performerIn: schema.Event,
      /**
      * The weight of the product or person.
      */
      weight: schema.QuantitativeValue,
      /**
      * A contact location for a person's residence.
      */
      homeLocation: s.union([schema.Place,schema.ContactPoint]),
      /**
      * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
      */
      gender: s.union([schema.enums.GenderType,s.string]),
      /**
      * The person's spouse.
      */
      spouse: schema.Person,
      /**
      * A sibling of the person.
      */
      siblings: schema.Person,
      /**
      * Given name. In the U.S., the first name of a Person.
      */
      givenName: s.string,
      /**
      * The Value-added Tax ID of the organization or person.
      */
      vatID: s.string,
      /**
      * The Dun & Bradstreet DUNS number for identifying an organization or business person.
      */
      duns: s.string,
      /**
      * A colleague of the person.
      */
      colleague: s.union([schema.Person,s.urlString]),
      /**
      * A contact point for a person or organization.
      */
      contactPoints: schema.ContactPoint,
      /**
      * A pointer to products or services offered by the organization or person.
      */
      makesOffer: schema.Offer,
      /**
      * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
      */
      isicV4: s.string,
      /**
      * An award won by or for this item.
      */
      award: s.string,
      /**
      * Family name. In the U.S., the last name of a Person.
      */
      familyName: s.string,
      /**
      * The total financial value of the person as calculated by subtracting assets from liabilities.
      */
      netWorth: s.union([schema.PriceSpecification,schema.MonetaryAmount]),
      /**
      * A pointer to products or services sought by the organization or person (demand).
      */
      seeks: schema.Demand,
      /**
      * Indicates an OfferCatalog listing for this Organization, Person, or Service.
      */
      hasOfferCatalog: schema.OfferCatalog,
      /**
      * Date of birth.
      */
      birthDate: s.string,
      /**
      * A child of the person.
      */
      children: schema.Person,
      /**
      * Email address.
      */
      email: s.string,
      /**
      * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
      */
      sponsor: s.union([schema.Person,schema.Organization]),
      /**
      * The telephone number.
      */
      telephone: s.string,
      /**
      * The place where the person was born.
      */
      birthPlace: schema.Place,
      /**
      * An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
      */
      honorificSuffix: s.string,
      /**
      * A colleague of the person.
      */
      colleagues: schema.Person,
      /**
      * An organization that the person is an alumni of.
      */
      alumniOf: s.union([schema.EducationalOrganization,schema.Organization]),
      /**
      * Products owned by the organization or person.
      */
      owns: s.union([schema.OwnershipInfo,schema.Product]),
      /**
      * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
      */
      interactionStatistic: schema.InteractionCounter,
      /**
      * Date of death.
      */
      deathDate: s.string,
      /**
      * An additional name for a Person, can be used for a middle name.
      */
      additionalName: s.string,
      /**
      * The fax number.
      */
      faxNumber: s.string,
      /**
      * The most generic bi-directional social/work relation.
      */
      knows: schema.Person,
      /**
      * An Organization (or ProgramMembership) to which this Person or Organization belongs.
      */
      memberOf: s.union([schema.ProgramMembership,schema.Organization]),
      /**
      * A sibling of the person.
      */
      sibling: schema.Person,
      /**
      * The place where the person died.
      */
      deathPlace: schema.Place,
      /**
      * A credential awarded to the Person or Organization.
      */
      hasCredential: schema.EducationalOccupationalCredential,
      /**
      * A parents of the person.
      */
      parents: schema.Person,
      /**
      * The most generic familial relation.
      */
      relatedTo: schema.Person,
      /**
      * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
      */
      brand: s.union([schema.Brand,schema.Organization]),
      /**
      * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
      */
      taxID: s.string,
      /**
      * Nationality of the person.
      */
      nationality: schema.Country,
      /**
      * The North American Industry Classification System (NAICS) code for a particular organization or business person.
      */
      naics: s.string,
      /**
      * A person or organization that supports (sponsors) something through some kind of financial contribution.
      */
      funder: s.union([schema.Organization,schema.Person]),
      /**
      * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
      * 
      * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
      * 
      */
      publishingPrinciples: s.union([s.urlString,schema.CreativeWork]),
      /**
      * Awards won by or for this item.
      */
      awards: s.string,
      /**
      * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
      */
      callSign: s.string,
      /**
      * A parent of this person.
      */
      parent: schema.Person,
      /**
      * Points-of-Sales operated by the organization or person.
      */
      hasPOS: schema.Place,
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
  Person,
};