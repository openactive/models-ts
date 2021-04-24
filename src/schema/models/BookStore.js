
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const BookStore = s.intersection([
  s.type({'@type': s.literal('BookStore')}),
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
      * The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
      */
      currenciesAccepted: s.string,
      /**
      * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
      */
      openingHours: s.string,
      /**
      * Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
      */
      paymentAccepted: s.string,
      /**
      * The price range of the business, for example ```$$$```.
      */
      priceRange: s.string,
      /**
      * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]].
      */
      branchOf: schema.Organization,
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
      */
      diversityStaffingReport: s.union([schema.Article,s.urlString]),
      /**
      * The number of employees in an organization e.g. business.
      */
      numberOfEmployees: schema.QuantitativeValue,
      /**
      * People working for this organization.
      */
      employees: schema.Person,
      /**
      * Physical address of the item.
      */
      address: s.union([s.string,schema.PostalAddress]),
      /**
      * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
      */
      correctionsPolicy: s.union([s.urlString,schema.CreativeWork]),
      /**
      * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
      */
      ownershipFundingInfo: s.union([s.string,s.urlString,schema.CreativeWork,schema.AboutPage]),
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
      * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
      */
      knowsLanguage: s.union([s.string,schema.Language]),
      /**
      * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
      */
      leiCode: s.string,
      /**
      * A person who founded this organization.
      */
      founder: schema.Person,
      /**
      * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
      */
      department: schema.Organization,
      /**
      * Alumni of an organization.
      */
      alumni: schema.Person,
      /**
      * A member of this organization.
      */
      members: s.union([schema.Person,schema.Organization]),
      /**
      * Someone working for this organization.
      */
      employee: schema.Person,
      /**
      * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
      */
      subOrganization: schema.Organization,
      /**
      * The Value-added Tax ID of the organization or person.
      */
      vatID: s.string,
      /**
      * nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
      */
      nonprofitStatus: schema.enums.NonprofitType,
      /**
      * The Dun & Bradstreet DUNS number for identifying an organization or business person.
      */
      duns: s.string,
      /**
      * Indicates a MerchantReturnPolicy that may be applicable.
      */
      hasMerchantReturnPolicy: schema.MerchantReturnPolicy,
      /**
      * A contact point for a person or organization.
      */
      contactPoints: schema.ContactPoint,
      /**
      * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
      */
      unnamedSourcesPolicy: s.union([schema.CreativeWork,s.urlString]),
      /**
      * A person who founded this organization.
      */
      founders: schema.Person,
      /**
      * A pointer to products or services offered by the organization or person.
      */
      makesOffer: schema.Offer,
      /**
      * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
      */
      isicV4: s.string,
      /**
      * Review of the item.
      */
      reviews: schema.Review,
      /**
      * An award won by or for this item.
      */
      award: s.string,
      /**
      * A review of the item.
      */
      review: schema.Review,
      /**
      * Upcoming or past events associated with this place or organization.
      */
      events: schema.Event,
      /**
      * The geographic area where a service or offered item is provided.
      */
      areaServed: s.union([s.string,schema.Place,schema.AdministrativeArea,schema.GeoShape]),
      /**
      * The date that this organization was dissolved.
      */
      dissolutionDate: s.string,
      /**
      * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
      */
      member: s.union([schema.Organization,schema.Person]),
      /**
      * A pointer to products or services sought by the organization or person (demand).
      */
      seeks: schema.Demand,
      /**
      * Indicates an OfferCatalog listing for this Organization, Person, or Service.
      */
      hasOfferCatalog: schema.OfferCatalog,
      /**
      * Upcoming or past event associated with this place, organization, or action.
      */
      event: schema.Event,
      /**
      * Email address.
      */
      email: s.string,
      /**
      * The official name of the organization, e.g. the registered company name.
      */
      legalName: s.string,
      /**
      * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
      */
      sponsor: s.union([schema.Person,schema.Organization]),
      /**
      * The telephone number.
      */
      telephone: s.string,
      /**
      * The date that this organization was founded.
      */
      foundingDate: s.string,
      /**
      * An associated logo.
      */
      logo: s.union([schema.ImageObject,s.urlString]),
      /**
      * The larger organization that this organization is a [[subOrganization]] of, if any.
      */
      parentOrganization: schema.Organization,
      /**
      * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
      */
      ethicsPolicy: s.union([s.urlString,schema.CreativeWork]),
      /**
      * A slogan or motto associated with the item.
      */
      slogan: s.string,
      /**
      * Products owned by the organization or person.
      */
      owns: s.union([schema.OwnershipInfo,schema.Product]),
      /**
      * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
      */
      interactionStatistic: schema.InteractionCounter,
      /**
      * The geographic area where the service is provided.
      */
      serviceArea: s.union([schema.Place,schema.AdministrativeArea,schema.GeoShape]),
      /**
      * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
      */
      actionableFeedbackPolicy: s.union([schema.CreativeWork,s.urlString]),
      /**
      * The fax number.
      */
      faxNumber: s.string,
      /**
      * An Organization (or ProgramMembership) to which this Person or Organization belongs.
      */
      memberOf: s.union([schema.ProgramMembership,schema.Organization]),
      /**
      * A credential awarded to the Person or Organization.
      */
      hasCredential: schema.EducationalOccupationalCredential,
      /**
      * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
      */
      brand: s.union([schema.Brand,schema.Organization]),
      /**
      * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
      */
      diversityPolicy: s.union([schema.CreativeWork,s.urlString]),
      /**
      * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
      */
      taxID: s.string,
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
      * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
      */
      location: s.union([schema.Place,s.string,schema.VirtualLocation,schema.PostalAddress]),
      /**
      * Points-of-Sales operated by the organization or person.
      */
      hasPOS: schema.Place,
      /**
      * The place where the Organization was founded.
      */
      foundingLocation: schema.Place,
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
  BookStore,
};