import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:PeopleAudience
 */
export declare type PeopleAudience = {
    '@type': 'PeopleAudience';
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
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
     */
    suggestedGender?: schema.GenderType | string;
    /**
     * Audiences defined by a person's maximum age.
     */
    requiredMaxAge?: number;
    /**
     * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
     */
    suggestedAge?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Maximum recommended age in years for the audience or user.
     */
    suggestedMaxAge?: number;
    /**
     * Minimum recommended age in years for the audience or user.
     */
    suggestedMinAge?: number;
    /**
     * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
     */
    suggestedMeasurement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Audiences defined by a person's gender.
     */
    requiredGender?: string;
    /**
     * Specifying the health condition(s) of a patient, medical study, or other target audience.
     */
    healthCondition?: schema.MedicalConditionOrSubClass | string;
    /**
     * Audiences defined by a person's minimum age.
     */
    requiredMinAge?: number;
    /**
     * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
     */
    audienceType?: string;
    /**
     * The geographic area associated with the audience.
     */
    geographicArea?: schema.AdministrativeAreaOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     */
    additionalType?: string;
    /**
     * URL of the item.
     */
    url?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
};
/**
 * schema:PeopleAudience
 *
 * This differs from PeopleAudience because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PeopleAudienceOrSubClass = PeopleAudience | schema.MedicalAudienceOrSubClass | schema.ParentAudienceOrSubClass;
/**
 * schema:PeopleAudience - Validation schema (w/ JOI)
 */
export declare const PeopleAudienceJoiSchema: Joi.ObjectSchema;
/**
 * schema:PeopleAudience - Validation schema (w/ JOI)
 *
 * This differs from PeopleAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PeopleAudienceOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:PeopleAudience.
 *
 * If some data has a structure which matches a schema:PeopleAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePeopleAudience = validatePeopleAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePeopleAudience instanceof OaValidationError) {
 *   // From this point on, `maybePeopleAudience` will have type `OaValidationError`
 *   const error = maybePeopleAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePeopleAudience` will have type `PeopleAudience`
 * const peopleAudience = maybePeopleAudience;
 * ```
 */
export declare function validatePeopleAudience(maybePeopleAudience: unknown): PeopleAudience | OaValidationError;
