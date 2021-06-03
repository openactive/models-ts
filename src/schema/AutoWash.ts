// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:AutoWash
 */
export type AutoWash = {
  '@type': 'AutoWash';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
   */
  currenciesAccepted?: string;
  /**
   * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
   */
  openingHours?: string;
  /**
   * Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
   */
  paymentAccepted?: string;
  /**
   * The price range of the business, for example ```$$$```.
   */
  priceRange?: string;
  /**
   * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]].
   */
  branchOf?: schema.OrganizationOrSubClass | string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
   */
  diversityStaffingReport?: schema.ArticleOrSubClass | string;
  /**
   * The number of employees in an organization e.g. business.
   */
  numberOfEmployees?: schema.QuantitativeValueOrSubClass | string;
  /**
   * People working for this organization.
   */
  employees?: schema.PersonOrSubClass | string;
  /**
   * Physical address of the item.
   */
  address?: string | schema.PostalAddressOrSubClass;
  /**
   * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
   */
  correctionsPolicy?: string | schema.CreativeWorkOrSubClass;
  /**
   * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
   */
  ownershipFundingInfo?: string | schema.CreativeWorkOrSubClass | schema.AboutPageOrSubClass;
  /**
   * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   */
  globalLocationNumber?: string;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
   */
  knowsAbout?: string | schema.ThingOrSubClass;
  /**
   * A contact point for a person or organization.
   */
  contactPoint?: schema.ContactPointOrSubClass | string;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
   */
  knowsLanguage?: string | schema.LanguageOrSubClass;
  /**
   * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
   */
  leiCode?: string;
  /**
   * A person who founded this organization.
   */
  founder?: schema.PersonOrSubClass | string;
  /**
   * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
   */
  department?: schema.OrganizationOrSubClass | string;
  /**
   * Alumni of an organization.
   */
  alumni?: schema.PersonOrSubClass | string;
  /**
   * A member of this organization.
   */
  members?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * Someone working for this organization.
   */
  employee?: schema.PersonOrSubClass | string;
  /**
   * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
   */
  subOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * The Value-added Tax ID of the organization or person.
   */
  vatID?: string;
  /**
   * nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
   */
  nonprofitStatus?: schema.NonprofitType;
  /**
   * The Dun & Bradstreet DUNS number for identifying an organization or business person.
   */
  duns?: string;
  /**
   * Indicates a MerchantReturnPolicy that may be applicable.
   */
  hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
  /**
   * A contact point for a person or organization.
   */
  contactPoints?: schema.ContactPointOrSubClass | string;
  /**
   * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
   */
  unnamedSourcesPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * A person who founded this organization.
   */
  founders?: schema.PersonOrSubClass | string;
  /**
   * A pointer to products or services offered by the organization or person.
   */
  makesOffer?: schema.OfferOrSubClass | string;
  /**
   * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   */
  isicV4?: string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Upcoming or past events associated with this place or organization.
   */
  events?: schema.Event_OrSubClass | string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
  /**
   * The date that this organization was dissolved.
   */
  dissolutionDate?: string;
  /**
   * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
   */
  member?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A pointer to products or services sought by the organization or person (demand).
   */
  seeks?: schema.DemandOrSubClass | string;
  /**
   * Indicates an OfferCatalog listing for this Organization, Person, or Service.
   */
  hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
  /**
   * Upcoming or past event associated with this place, organization, or action.
   */
  event?: schema.Event_OrSubClass | string;
  /**
   * Email address.
   */
  email?: string;
  /**
   * The official name of the organization, e.g. the registered company name.
   */
  legalName?: string;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The telephone number.
   */
  telephone?: string;
  /**
   * The date that this organization was founded.
   */
  foundingDate?: string;
  /**
   * An associated logo.
   */
  logo?: schema.ImageObjectOrSubClass | string;
  /**
   * The larger organization that this organization is a [[subOrganization]] of, if any.
   */
  parentOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
   */
  ethicsPolicy?: string | schema.CreativeWorkOrSubClass;
  /**
   * A slogan or motto associated with the item.
   */
  slogan?: string;
  /**
   * Products owned by the organization or person.
   */
  owns?: schema.OwnershipInfoOrSubClass | schema.ProductOrSubClass | string;
  /**
   * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   */
  interactionStatistic?: schema.InteractionCounterOrSubClass | string;
  /**
   * The geographic area where the service is provided.
   */
  serviceArea?: schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | string;
  /**
   * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
   */
  actionableFeedbackPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * The fax number.
   */
  faxNumber?: string;
  /**
   * An Organization (or ProgramMembership) to which this Person or Organization belongs.
   */
  memberOf?: schema.ProgramMembershipOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A credential awarded to the Person or Organization.
   */
  hasCredential?: schema.EducationalOccupationalCredentialOrSubClass | string;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   */
  brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
   */
  diversityPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
   */
  taxID?: string;
  /**
   * The North American Industry Classification System (NAICS) code for a particular organization or business person.
   */
  naics?: string;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   */
  funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   * 
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   * 
   */
  publishingPrinciples?: string | schema.CreativeWorkOrSubClass;
  /**
   * Awards won by or for this item.
   */
  awards?: string;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   */
  location?: schema.PlaceOrSubClass | string | schema.VirtualLocationOrSubClass | schema.PostalAddressOrSubClass;
  /**
   * Points-of-Sales operated by the organization or person.
   */
  hasPOS?: schema.PlaceOrSubClass | string;
  /**
   * The place where the Organization was founded.
   */
  foundingLocation?: schema.PlaceOrSubClass | string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoIntersects?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * Photographs of this place.
   */
  photos?: schema.PhotographOrSubClass | schema.ImageObjectOrSubClass | string;
  /**
   * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
   */
  tourBookingPage?: string;
  /**
   * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
   */
  longitude?: string | number;
  /**
   * The geo coordinates of the place.
   */
  geo?: schema.GeoCoordinatesOrSubClass | schema.GeoShapeOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoCoveredBy?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * The basic containment relation between a place and one that contains it.
   */
  containedInPlace?: schema.PlaceOrSubClass | string;
  /**
   * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
   *       
   */
  specialOpeningHoursSpecification?: schema.OpeningHoursSpecificationOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoOverlaps?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
  /**
   * A photograph of this place.
   */
  photo?: schema.PhotographOrSubClass | schema.ImageObjectOrSubClass | string;
  /**
   * The opening hours of a certain place.
   */
  openingHoursSpecification?: schema.OpeningHoursSpecificationOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoWithin?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
  /**
   * Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
   */
  hasDriveThroughService?: boolean;
  /**
   * The basic containment relation between a place and one that contains it.
   */
  containedIn?: schema.PlaceOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoCovers?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * A URL to a map of the place.
   */
  map?: string;
  /**
   * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   */
  amenityFeature?: schema.LocationFeatureSpecificationOrSubClass | string;
  /**
   * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * 
   */
  additionalProperty?: schema.PropertyValueOrSubClass | string;
  /**
   * A flag to signal that the item, event, or place is accessible for free.
   */
  isAccessibleForFree?: boolean;
  /**
   * The total number of individuals that may attend an event or venue.
   */
  maximumAttendeeCapacity?: number;
  /**
   * A URL to a map of the place.
   */
  maps?: string;
  /**
   * A URL to a map of the place.
   */
  hasMap?: string | schema.MapOrSubClass;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
   */
  geoEquals?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
  /**
   * The basic containment relation between a place and another that it contains.
   */
  containsPlace?: schema.PlaceOrSubClass | string;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))
   */
  geoDisjoint?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
  /**
   * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
   */
  latitude?: string | number;
  /**
   * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
   */
  smokingAllowed?: boolean;
  /**
   * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
   *       
   */
  branchCode?: string;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )
   */
  geoTouches?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoCrosses?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   */
  geoContains?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value
   */
  publicAccess?: boolean;
};

/**
 * schema:AutoWash
 *
 * This differs from AutoWash because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type AutoWashOrSubClass =
  | AutoWash
  ;

/**
 * schema:AutoWash - Validation schema (w/ JOI)
 */
export const AutoWashJoiSchema = Joi.object({
  '@type': Joi.string().valid('AutoWash').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  currenciesAccepted: Joi.string(),
  openingHours: Joi.string(),
  paymentAccepted: Joi.string(),
  priceRange: Joi.string(),
  branchOf: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  diversityStaffingReport: Joi.alternatives().try(Joi.lazy(() => schema.ArticleOrSubClassJoiSchema), Joi.string().uri()),
  numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  employees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  correctionsPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  ownershipFundingInfo: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.AboutPageOrSubClassJoiSchema)),
  globalLocationNumber: Joi.string(),
  knowsAbout: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
  contactPoint: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  knowsLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  leiCode: Joi.string(),
  founder: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  department: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  alumni: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  members: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  employee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  subOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  vatID: Joi.string(),
  nonprofitStatus: Joi.lazy(() => schema.NonprofitTypeJoiSchema),
  duns: Joi.string(),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  contactPoints: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  unnamedSourcesPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  founders: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  makesOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  isicV4: Joi.string(),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  dissolutionDate: Joi.string().isoDate(),
  member: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  seeks: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
  event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  email: Joi.string(),
  legalName: Joi.string(),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  telephone: Joi.string(),
  foundingDate: Joi.string().isoDate(),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  parentOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  ethicsPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  slogan: Joi.string(),
  owns: Joi.alternatives().try(Joi.lazy(() => schema.OwnershipInfoOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
  serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  actionableFeedbackPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  faxNumber: Joi.string(),
  memberOf: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  hasCredential: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  diversityPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  taxID: Joi.string(),
  naics: Joi.string(),
  funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  awards: Joi.string(),
  location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  hasPOS: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  foundingLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  photos: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  tourBookingPage: Joi.string().uri(),
  longitude: Joi.alternatives().try(Joi.string(), Joi.number()),
  geo: Joi.alternatives().try(Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  containedInPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  specialOpeningHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
  photo: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  openingHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
  hasDriveThroughService: Joi.boolean(),
  containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  map: Joi.string().uri(),
  amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  isAccessibleForFree: Joi.boolean(),
  maximumAttendeeCapacity: Joi.number().integer(),
  maps: Joi.string().uri(),
  hasMap: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.MapOrSubClassJoiSchema)),
  geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
  containsPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoDisjoint: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
  latitude: Joi.alternatives().try(Joi.string(), Joi.number()),
  smokingAllowed: Joi.boolean(),
  branchCode: Joi.string(),
  geoTouches: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
  geoCrosses: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoContains: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  publicAccess: Joi.boolean(),
});

/**
 * schema:AutoWash - Validation schema (w/ JOI)
 *
 * This differs from AutoWashJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const AutoWashOrSubClassJoiSchema = Joi.alternatives().try([
  AutoWashJoiSchema,
]);

/**
 * Runtime validator for schema:AutoWash.
 *
 * If some data has a structure which matches a schema:AutoWash, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAutoWash = validateAutoWash(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAutoWash instanceof OaValidationError) {
 *   // From this point on, `maybeAutoWash` will have type `OaValidationError`
 *   const error = maybeAutoWash;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAutoWash` will have type `AutoWash`
 * const autoWash = maybeAutoWash;
 * ```
 */
export function validateAutoWash(maybeAutoWash: unknown): AutoWash | OaValidationError {
  const { value, error } = AutoWashJoiSchema.validate(maybeAutoWash);
  if (error) {
    return new OaValidationError('AutoWash', maybeAutoWash, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as AutoWash;
}
