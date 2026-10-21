import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * IncompleteIntakeFormError
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` is missing fields that are specified as `valueRequired` within the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export declare type IncompleteIntakeFormError = {
    '@type': 'IncompleteIntakeFormError';
    '@context'?: string | string[];
    /**
     * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
     *
     */
    identifier?: schema.PropertyValueOrSubClass | string;
    /**
     * A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem, except for purposes of localization.
     *
     * ```json
     * "name": "The 'orderItemIntakeFormResponse' is missing fields that are specified as 'valueRequired' within the 'orderItemIntakeForm'."
     * ```
     */
    name?: string;
    /**
     * A plain-text human-readable explanation specific to this occurrence of the problem, providing specific information about why the error occurred in this particular case. This description must not include HTML or other markup.
     *
     * ```json
     * "description": "No customer details supplied. These must be supplied for calls to C2, P, and B."
     * ```
     */
    description?: string;
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
     */
    instance?: string;
    /**
     * Used by technical support for diagnostics purposes.
     */
    requestId?: string;
    /**
     * Must always be present and set to ```json
     * "statusCode": 409
     * ```
     */
    statusCode?: number;
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
 * IncompleteIntakeFormError
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` is missing fields that are specified as `valueRequired` within the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from IncompleteIntakeFormError because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type IncompleteIntakeFormErrorOrSubClass = IncompleteIntakeFormError;
/**
 * IncompleteIntakeFormError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` is missing fields that are specified as `valueRequired` within the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export declare const IncompleteIntakeFormErrorJoiSchema: Joi.ObjectSchema;
/**
 * IncompleteIntakeFormError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` is missing fields that are specified as `valueRequired` within the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from IncompleteIntakeFormErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const IncompleteIntakeFormErrorOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for IncompleteIntakeFormError.
 *
 * If some data has a structure which matches a IncompleteIntakeFormError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncompleteIntakeFormError = validateIncompleteIntakeFormError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncompleteIntakeFormError instanceof OaValidationError) {
 *   // From this point on, `maybeIncompleteIntakeFormError` will have type `OaValidationError`
 *   const error = maybeIncompleteIntakeFormError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncompleteIntakeFormError` will have type `IncompleteIntakeFormError`
 * const incompleteIntakeFormError = maybeIncompleteIntakeFormError;
 * ```
 */
export declare function validateIncompleteIntakeFormError(maybeIncompleteIntakeFormError: unknown): IncompleteIntakeFormError | OaValidationError;
