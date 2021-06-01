import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * beta:AuthenticatedPerson
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Person, which means that any of this type's properties within schema.org may also be used.
 */
export declare type AuthenticatedPerson = {
    '@type': 'AuthenticatedPerson';
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
     * A full name for the person.
     * This person must have given permission for their personal information to be shared as part of the open data.
     *
     * ```json
     * "name": "Daley Thompson"
     * ```
     */
    name?: string;
    /**
     * A plain text description of the Person, which must not include HTML or other markup.
     *
     * ```json
     * "description": "The leader of the coaching team"
     * ```
     */
    description?: string;
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * Address of the Seller, used on tax receipts.
     */
    address?: oa.PostalAddressOrSubClass;
    /**
     * The e-mail address of the person.
     * This person must have given permission for their personal information to be shared as part of the open data.
     *
     * ```json
     * "email": "jane.smith@example.com"
     * ```
     */
    email?: string;
    /**
     * A last name for the person.
     * This person must have given permission for their personal information to be shared as part of the open data.
     *
     * ```json
     * "familyName": "Thompson"
     * ```
     */
    familyName?: string;
    /**
     * Indicates the gender of the person.
     *
     * ```json
     * "gender": "https://schema.org/Female"
     * ```
     */
    gender?: schema.GenderType;
    /**
     * A first name for the person.
     * This person must have given permission for their personal information to be shared as part of the open data.
     *
     * ```json
     * "givenName": "Daley"
     * ```
     */
    givenName?: string;
    /**
     * Indicates whether the Seller allows open booking
     *
     * ```json
     * "isOpenBookingAllowed": "true"
     * ```
     */
    isOpenBookingAllowed?: boolean;
    /**
     * The job title of a person
     * This person must have given permission for their personal information to be shared as part of the open data.
     *
     * ```json
     * "jobTitle": "Team Captain"
     * ```
     */
    jobTitle?: string;
    /**
     * The official name of the organization, e.g. the registered company name.
     *
     * ```json
     * "legalName": "Central Speedball Ltd"
     * ```
     */
    legalName?: string;
    /**
     * A logo for the person.
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
     * Lists the URL(s) of the official social media profile pages associated with the person.
     *
     * ```json
     * "sameAs": "https://example.org/example-org"
     * ```
     */
    sameAs?: string[];
    /**
     * Either  https://openactive.io/TaxNet or  https://openactive.io/TaxGross
     */
    taxMode?: oa.TaxMode;
    /**
     * The telephone number of the person
     * This person must have given permission for their personal information to be shared as part of the open data.
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
     * A URL where more information about the person may be found
     *
     * ```json
     * "url": "http://www.example.com/"
     * ```
     */
    url?: string;
    /**
     * The Value-added Tax ID of the of the Seller.
     */
    vatID?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * Token indicating the Broker's authorisation to book on behalf of a Customer.
     *
     * If you are using this property, please join the discussion at proposal [#120](https://github.com/openactive/open-booking-api/issues/120).
     */
    'beta:accessToken'?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
     *
     * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
     */
    'beta:formattedDescription'?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * An array of URLs, each of which describe the formal criteria that are met by the organizer.
     *
     * If you are using this property, please join the discussion at proposal [#236](https://github.com/openactive/modelling-opportunity-data/issues/236).
     */
    'beta:formalCriteriaMet'?: string[];
    /**
     * The most generic uni-directional social relation.
     */
    follows?: schema.PersonOrSubClass | string;
    /**
     * A contact location for a person's place of work.
     */
    workLocation?: schema.ContactPointOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
     */
    affiliation?: schema.OrganizationOrSubClass | string;
    /**
     * The height of the item.
     */
    height?: schema.QuantitativeValueOrSubClass | schema.DistanceOrSubClass | string;
    /**
     * Organizations that the person works for.
     */
    worksFor?: schema.OrganizationOrSubClass | string;
    /**
     * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
     */
    honorificPrefix?: string;
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
     * The Person's occupation. For past professions, use Role for expressing dates.
     */
    hasOccupation?: schema.OccupationOrSubClass | string;
    /**
     * Event that this person is a performer or participant in.
     */
    performerIn?: schema.Event_OrSubClass | string;
    /**
     * The weight of the product or person.
     */
    weight?: schema.QuantitativeValueOrSubClass | string;
    /**
     * A contact location for a person's residence.
     */
    homeLocation?: schema.PlaceOrSubClass | schema.ContactPointOrSubClass | string;
    /**
     * The person's spouse.
     */
    spouse?: schema.PersonOrSubClass | string;
    /**
     * A sibling of the person.
     */
    siblings?: schema.PersonOrSubClass | string;
    /**
     * The Dun & Bradstreet DUNS number for identifying an organization or business person.
     */
    duns?: string;
    /**
     * A colleague of the person.
     */
    colleague?: schema.PersonOrSubClass | string;
    /**
     * A contact point for a person or organization.
     */
    contactPoints?: schema.ContactPointOrSubClass | string;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: schema.OfferOrSubClass | string;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     */
    isicV4?: string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * The total financial value of the person as calculated by subtracting assets from liabilities.
     */
    netWorth?: schema.PriceSpecificationOrSubClass | schema.MonetaryAmountOrSubClass | string;
    /**
     * A pointer to products or services sought by the organization or person (demand).
     */
    seeks?: schema.DemandOrSubClass | string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
    /**
     * Date of birth.
     */
    birthDate?: string;
    /**
     * A child of the person.
     */
    children?: schema.PersonOrSubClass | string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The place where the person was born.
     */
    birthPlace?: schema.PlaceOrSubClass | string;
    /**
     * An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
     */
    honorificSuffix?: string;
    /**
     * A colleague of the person.
     */
    colleagues?: schema.PersonOrSubClass | string;
    /**
     * An organization that the person is an alumni of.
     */
    alumniOf?: schema.EducationalOrganizationOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Products owned by the organization or person.
     */
    owns?: schema.OwnershipInfoOrSubClass | schema.ProductOrSubClass | string;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     */
    interactionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * Date of death.
     */
    deathDate?: string;
    /**
     * An additional name for a Person, can be used for a middle name.
     */
    additionalName?: string;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * The most generic bi-directional social/work relation.
     */
    knows?: schema.PersonOrSubClass | string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: schema.ProgramMembershipOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A sibling of the person.
     */
    sibling?: schema.PersonOrSubClass | string;
    /**
     * The place where the person died.
     */
    deathPlace?: schema.PlaceOrSubClass | string;
    /**
     * A credential awarded to the Person or Organization.
     */
    hasCredential?: schema.EducationalOccupationalCredentialOrSubClass | string;
    /**
     * A parents of the person.
     */
    parents?: schema.PersonOrSubClass | string;
    /**
     * The most generic familial relation.
     */
    relatedTo?: schema.PersonOrSubClass | string;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     */
    brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     */
    taxID?: string;
    /**
     * Nationality of the person.
     */
    nationality?: schema.CountryOrSubClass | string;
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
     * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
     */
    callSign?: string;
    /**
     * A parent of this person.
     */
    parent?: schema.PersonOrSubClass | string;
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: schema.PlaceOrSubClass | string;
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
 * beta:AuthenticatedPerson
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Person, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from AuthenticatedPerson because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type AuthenticatedPersonOrSubClass = AuthenticatedPerson;
/**
 * beta:AuthenticatedPerson - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Person, which means that any of this type's properties within schema.org may also be used.
 */
export declare const AuthenticatedPersonJoiSchema: Joi.ObjectSchema;
/**
 * beta:AuthenticatedPerson - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Person, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from AuthenticatedPersonJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const AuthenticatedPersonOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for beta:AuthenticatedPerson.
 *
 * If some data has a structure which matches a beta:AuthenticatedPerson, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAuthenticatedPerson = AuthenticatedPerson.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAuthenticatedPerson instanceof OaValidationError) {
 *   // From this point on, `maybeAuthenticatedPerson` will have type `OaValidationError`
 *   const error = maybeAuthenticatedPerson;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAuthenticatedPerson` will have type `AuthenticatedPerson`
 * const authenticatedPerson = maybeAuthenticatedPerson;
 * ```
 */
export declare function validateAuthenticatedPerson(maybeAuthenticatedPerson: unknown): AuthenticatedPerson | OaValidationError;
