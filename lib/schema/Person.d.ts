import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Person
 */
export declare type Person = {
    '@type': 'Person';
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
    description?: string | schema.TextObjectOrSubClass;
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * An additional name for a Person, can be used for a middle name.
     */
    additionalName?: string;
    /**
     * Physical address of the item.
     */
    address?: schema.PostalAddressOrSubClass | string;
    /**
     * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
     */
    affiliation?: schema.OrganizationOrSubClass | string;
    /**
     * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
     */
    agentInteractionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * An organization that the person is an alumni of.
     */
    alumniOf?: schema.EducationalOrganizationOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * Awards won by or for this item.
     */
    awards?: string;
    /**
     * Date of birth.
     */
    birthDate?: string;
    /**
     * The place where the person was born.
     */
    birthPlace?: schema.PlaceOrSubClass | string;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     */
    brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
     */
    callSign?: string;
    /**
     * A child of the person.
     */
    children?: schema.PersonOrSubClass | string;
    /**
     * A colleague of the person.
     */
    colleague?: schema.PersonOrSubClass | string;
    /**
     * A colleague of the person.
     */
    colleagues?: schema.PersonOrSubClass | string;
    /**
     * A contact point for a person or organization.
     */
    contactPoint?: schema.ContactPointOrSubClass | string;
    /**
     * A contact point for a person or organization.
     */
    contactPoints?: schema.ContactPointOrSubClass | string;
    /**
     * Date of death.
     */
    deathDate?: string;
    /**
     * The place where the person died.
     */
    deathPlace?: schema.PlaceOrSubClass | string;
    /**
     * The Dun & Bradstreet DUNS number for identifying an organization or business person.
     */
    duns?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * Family name. In the U.S., the last name of a Person.
     */
    familyName?: string;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * The most generic uni-directional social relation.
     */
    follows?: schema.PersonOrSubClass | string;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     */
    funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     */
    funding?: schema.GrantOrSubClass | string;
    /**
     * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
     */
    gender?: schema.GenderType | string;
    /**
     * Given name. In the U.S., the first name of a Person.
     */
    givenName?: string;
    /**
     * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     */
    globalLocationNumber?: string;
    /**
     * Certification information about a product, organization, service, place, or person.
     */
    hasCertification?: schema.CertificationOrSubClass | string;
    /**
     * A credential awarded to the Person or Organization.
     */
    hasCredential?: schema.CredentialOrSubClass | string;
    /**
     * The Person's occupation. For past professions, use Role for expressing dates.
     */
    hasOccupation?: schema.OccupationOrSubClass | string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: schema.PlaceOrSubClass | string;
    /**
     * The height of the item.
     */
    height?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
    /**
     * A contact location for a person's residence.
     */
    homeLocation?: schema.ContactPointOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
     */
    honorificPrefix?: string;
    /**
     * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
     */
    honorificSuffix?: string;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     */
    interactionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     */
    isicV4?: string;
    /**
     * The job title of the person (for example, Financial Manager).
     */
    jobTitle?: schema.DefinedTermOrSubClass | string;
    /**
     * The most generic bi-directional social/work relation.
     */
    knows?: schema.PersonOrSubClass | string;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
     */
    knowsAbout?: string | schema.ThingOrSubClass;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
     */
    knowsLanguage?: schema.LanguageOrSubClass | string;
    /**
     * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
     */
    lifeEvent?: schema.Event_OrSubClass | string;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: schema.OfferOrSubClass | string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: schema.MemberProgramTierOrSubClass | schema.OrganizationOrSubClass | schema.ProgramMembershipOrSubClass | string;
    /**
     * The North American Industry Classification System (NAICS) code for a particular organization or business person.
     */
    naics?: string;
    /**
     * Nationality of the person.
     */
    nationality?: schema.CountryOrSubClass | string;
    /**
     * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
     */
    netWorth?: schema.MonetaryAmountOrSubClass | schema.PriceSpecificationOrSubClass | string;
    /**
     * Things owned by the organization or person.
     */
    owns?: schema.ThingOrSubClass | string;
    /**
     * A parent of this person.
     */
    parent?: schema.PersonOrSubClass | string;
    /**
     * A parents of the person.
     */
    parents?: schema.PersonOrSubClass | string;
    /**
     * Event that this person is a performer or participant in.
     */
    performerIn?: schema.Event_OrSubClass | string;
    /**
     * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.
     *
     * In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.
     *
     */
    pronouns?: schema.DefinedTermOrSubClass | schema.StructuredValueOrSubClass | string;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     *
     */
    publishingPrinciples?: schema.CreativeWorkOrSubClass | string;
    /**
     * The most generic familial relation.
     */
    relatedTo?: schema.PersonOrSubClass | string;
    /**
     * A pointer to products or services sought by the organization or person (demand).
     */
    seeks?: schema.DemandOrSubClass | string;
    /**
     * A sibling of the person.
     */
    sibling?: schema.PersonOrSubClass | string;
    /**
     * A sibling of the person.
     */
    siblings?: schema.PersonOrSubClass | string;
    /**
     * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
     */
    skills?: schema.DefinedTermOrSubClass | string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The person's spouse.
     */
    spouse?: schema.PersonOrSubClass | string;
    /**
     * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     */
    taxID?: string;
    /**
     * The telephone number.
     */
    telephone?: string;
    /**
     * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
     */
    vatID?: string;
    /**
     * The weight of the product or person.
     */
    weight?: schema.MassOrSubClass | schema.QuantitativeValueOrSubClass | string;
    /**
     * A contact location for a person's place of work.
     */
    workLocation?: schema.ContactPointOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Organizations that the person works for.
     */
    worksFor?: schema.OrganizationOrSubClass | string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
     *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
     */
    additionalType?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
    /**
     * A person or organization who owns this Thing.
     */
    owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
    /**
     * URL of the item.
     */
    url?: string;
};
/**
 * schema:Person
 *
 * This differs from Person because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PersonOrSubClass = Person | schema.PatientOrSubClass;
/**
 * schema:Person - Validation schema (w/ JOI)
 */
export declare const PersonJoiSchema: Joi.ObjectSchema;
/**
 * schema:Person - Validation schema (w/ JOI)
 *
 * This differs from PersonJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PersonOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Person.
 *
 * If some data has a structure which matches a schema:Person, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePerson = validatePerson(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePerson instanceof OaValidationError) {
 *   // From this point on, `maybePerson` will have type `OaValidationError`
 *   const error = maybePerson;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePerson` will have type `Person`
 * const person = maybePerson;
 * ```
 */
export declare function validatePerson(maybePerson: unknown): Person | OaValidationError;
