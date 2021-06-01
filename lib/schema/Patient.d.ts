import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Patient
 */
export declare type Patient = {
    '@type': 'Patient';
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
     * Specifying the health condition(s) of a patient, medical study, or other target audience.
     */
    healthCondition?: schema.MedicalConditionOrSubClass | string;
    /**
     * Specifying a drug or medicine used in a medication procedure.
     */
    drug?: schema.DrugOrSubClass | string;
    /**
     * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
     */
    diagnosis?: schema.MedicalConditionOrSubClass | string;
    /**
     * The geographic area associated with the audience.
     */
    geographicArea?: schema.AdministrativeAreaOrSubClass | string;
    /**
     * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
     */
    audienceType?: string;
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
     * Audiences defined by a person's maximum age.
     */
    requiredMaxAge?: number;
    /**
     * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
     */
    suggestedGender?: string | schema.GenderType;
    /**
     * Audiences defined by a person's gender.
     */
    requiredGender?: string;
    /**
     * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
     */
    suggestedAge?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Minimum recommended age in years for the audience or user.
     */
    suggestedMinAge?: number;
    /**
     * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
     */
    suggestedMeasurement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Audiences defined by a person's minimum age.
     */
    requiredMinAge?: number;
    /**
     * Maximum recommended age in years for the audience or user.
     */
    suggestedMaxAge?: number;
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
     * Physical address of the item.
     */
    address?: string | schema.PostalAddressOrSubClass;
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
     * The job title of the person (for example, Financial Manager).
     */
    jobTitle?: schema.DefinedTermOrSubClass | string;
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
     * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
     */
    gender?: schema.GenderType | string;
    /**
     * The person's spouse.
     */
    spouse?: schema.PersonOrSubClass | string;
    /**
     * A sibling of the person.
     */
    siblings?: schema.PersonOrSubClass | string;
    /**
     * Given name. In the U.S., the first name of a Person.
     */
    givenName?: string;
    /**
     * The Value-added Tax ID of the organization or person.
     */
    vatID?: string;
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
     * Family name. In the U.S., the last name of a Person.
     */
    familyName?: string;
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
     * Email address.
     */
    email?: string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The telephone number.
     */
    telephone?: string;
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
};
/**
 * schema:Patient
 *
 * This differs from Patient because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PatientOrSubClass = Patient;
/**
 * schema:Patient - Validation schema (w/ JOI)
 */
export declare const PatientJoiSchema: Joi.ObjectSchema;
/**
 * schema:Patient - Validation schema (w/ JOI)
 *
 * This differs from PatientJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PatientOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Patient.
 *
 * If some data has a structure which matches a schema:Patient, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePatient = Patient.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePatient instanceof OaValidationError) {
 *   // From this point on, `maybePatient` will have type `OaValidationError`
 *   const error = maybePatient;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePatient` will have type `Patient`
 * const patient = maybePatient;
 * ```
 */
export declare function validatePatient(maybePatient: unknown): Patient | OaValidationError;
