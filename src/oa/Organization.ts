// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Organization
 *
 * This type is derived from https://schema.org/Organization, which means that any of this type's properties within schema.org may also be used.
 */
export type Organization = {
  '@type': 'Organization';
  '@context'?: string | string[];
  /**
   * A local non-URI identifier for the resource
   *
   * ```json
   * "identifier": "SB1234"
   * ```
   */
  identifier?: number | string | oa.PropertyValueOrSubClass | oa.PropertyValueOrSubClass[];
  /**
   * The name of the Organization
   *
   * ```json
   * "name": "Central Speedball Association"
   * ```
   */
  name?: string;
  /**
   * A plain text description of the Organization, which must not include HTML or other markup.
   *
   * ```json
   * "description": "The national governing body of cycling"
   * ```
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://id.bookingsystem.example.com/organizers/112345"
   * ```
   */
  '@id'?: string;
  /**
   * Address of the Seller, used on tax receipts.
   */
  address?: oa.PostalAddressOrSubClass;
  /**
   * General enquiries e-mail address for the organization.
   *
   * ```json
   * "email": "info@example.com"
   * ```
   */
  email?: string;
  /**
   * Indicates whether the Seller allows open booking or not
   *
   * ```json
   * "isOpenBookingAllowed": "true"
   * ```
   */
  isOpenBookingAllowed?: boolean;
  /**
   * The official name of the organization, e.g. the registered company name.
   *
   * ```json
   * "legalName": "Central Speedball Ltd"
   * ```
   */
  legalName?: string;
  /**
   * A logo for the Organization.
   *
   * ```json
   * "logo": {
   *   "@type": "ImageObject",
   *   "url": "http://example.com/static/image/speedball_large.jpg"
   * }
   * ```
   */
  logo?: oa.ImageObjectOrSubClass;
  /**
   * Lists the URL(s) of the official social media profile pages associated with the organization.
   *
   * ```json
   * "sameAs": [
   *   "https://www.facebook.com/everyoneactive/",
   *   "https://twitter.com/everyoneactive"
   * ]
   * ```
   */
  sameAs?: string[];
  /**
   * Either  https://openactive.io/TaxNet or  https://openactive.io/TaxGross
   */
  taxMode?: oa.TaxMode;
  /**
   * The telephone number of the Organization
   *
   * ```json
   * "telephone": "01234 567890"
   * ```
   */
  telephone?: string;
  /**
   * The terms of service of the Seller.
   */
  termsOfService?: oa.TermsOrSubClass[];
  /**
   * A definitive canonical URL for the Organization.
   *
   * ```json
   * "url": "http://www.speedball-world.com"
   * ```
   */
  url?: string;
  /**
   * The Value-added Tax ID of the of the Seller.
   */
  vatID?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
   * 
   * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
   */
  'beta:formattedDescription'?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A related video object.
   * 
   * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
   */
  'beta:video'?: oa.VideoObjectOrSubClass[];
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * An array of URLs, each of which describe the formal criteria that are met by the organizer.
   * 
   * If you are using this property, please join the discussion at proposal [#236](https://github.com/openactive/modelling-opportunity-data/issues/236).
   */
  'beta:formalCriteriaMet'?: string[];
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
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The date that this organization was founded.
   */
  foundingDate?: string;
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
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
};

/**
 * Organization
 *
 * This type is derived from https://schema.org/Organization, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Organization because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OrganizationOrSubClass =
  | Organization
  ;

/**
 * Organization - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Organization, which means that any of this type's properties within schema.org may also be used.
 */
export const OrganizationJoiSchema = Joi.object({
  '@type': Joi.string().valid('Organization').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  address: Joi.lazy(() => oa.PostalAddressOrSubClassJoiSchema),
  email: Joi.string(),
  isOpenBookingAllowed: Joi.boolean(),
  legalName: Joi.string(),
  logo: Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema),
  sameAs: Joi.array().items(Joi.string().uri()),
  taxMode: Joi.lazy(() => oa.TaxModeJoiSchema),
  telephone: Joi.string(),
  termsOfService: Joi.array().items(Joi.lazy(() => oa.TermsOrSubClassJoiSchema)),
  url: Joi.string().uri(),
  vatID: Joi.string(),
  'beta:formattedDescription': Joi.string(),
  'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
  'beta:formalCriteriaMet': Joi.array().items(Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  diversityStaffingReport: Joi.alternatives().try(Joi.lazy(() => schema.ArticleOrSubClassJoiSchema), Joi.string().uri()),
  numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  employees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
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
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  foundingDate: Joi.string().isoDate(),
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
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
});

/**
 * Organization - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Organization, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrganizationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OrganizationOrSubClassJoiSchema = Joi.alternatives().try([
  OrganizationJoiSchema,
]);

/**
 * Runtime validator for Organization.
 *
 * If some data has a structure which matches a Organization, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrganization = Organization.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrganization instanceof OaValidationError) {
 *   // From this point on, `maybeOrganization` will have type `OaValidationError`
 *   const error = maybeOrganization;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrganization` will have type `Organization`
 * const organization = maybeOrganization;
 * ```
 */
export function validateOrganization(maybeOrganization: unknown): Organization | OaValidationError {
  const { value, error } = OrganizationJoiSchema.validate(maybeOrganization);
  if (error) {
    return new OaValidationError('Organization', maybeOrganization, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Organization;
}
