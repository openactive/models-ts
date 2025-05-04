import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:HealthPlanFormulary
 */
export declare type HealthPlanFormulary = {
    '@type': 'HealthPlanFormulary';
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
     * Whether prescriptions can be delivered by mail.
     */
    offersPrescriptionByMail?: boolean;
    /**
     * The tier(s) of drugs offered by this formulary or insurance plan.
     */
    healthPlanDrugTier?: string;
    /**
     * Whether The costs to the patient for services under this network or formulary.
     */
    healthPlanCostSharing?: boolean;
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
 * schema:HealthPlanFormulary
 *
 * This differs from HealthPlanFormulary because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type HealthPlanFormularyOrSubClass = HealthPlanFormulary;
/**
 * schema:HealthPlanFormulary - Validation schema (w/ JOI)
 */
export declare const HealthPlanFormularyJoiSchema: Joi.ObjectSchema;
/**
 * schema:HealthPlanFormulary - Validation schema (w/ JOI)
 *
 * This differs from HealthPlanFormularyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const HealthPlanFormularyOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:HealthPlanFormulary.
 *
 * If some data has a structure which matches a schema:HealthPlanFormulary, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHealthPlanFormulary = validateHealthPlanFormulary(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHealthPlanFormulary instanceof OaValidationError) {
 *   // From this point on, `maybeHealthPlanFormulary` will have type `OaValidationError`
 *   const error = maybeHealthPlanFormulary;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHealthPlanFormulary` will have type `HealthPlanFormulary`
 * const healthPlanFormulary = maybeHealthPlanFormulary;
 * ```
 */
export declare function validateHealthPlanFormulary(maybeHealthPlanFormulary: unknown): HealthPlanFormulary | OaValidationError;
