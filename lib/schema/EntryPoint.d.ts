import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:EntryPoint
 */
export declare type EntryPoint = {
    '@type': 'EntryPoint';
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
     * The supported content type(s) for an EntryPoint response.
     */
    contentType?: string;
    /**
     * An application that can complete the request.
     */
    actionApplication?: schema.SoftwareApplicationOrSubClass | string;
    /**
     * An application that can complete the request.
     */
    application?: schema.SoftwareApplicationOrSubClass | string;
    /**
     * The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.
     */
    actionPlatform?: string;
    /**
     * The supported encoding type(s) for an EntryPoint request.
     */
    encodingType?: string;
    /**
     * An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.
     */
    httpMethod?: string;
    /**
     * An url template (RFC6570) that will be used to construct the target of the execution of the action.
     */
    urlTemplate?: string;
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
 * schema:EntryPoint
 *
 * This differs from EntryPoint because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type EntryPointOrSubClass = EntryPoint;
/**
 * schema:EntryPoint - Validation schema (w/ JOI)
 */
export declare const EntryPointJoiSchema: Joi.ObjectSchema;
/**
 * schema:EntryPoint - Validation schema (w/ JOI)
 *
 * This differs from EntryPointJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const EntryPointOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:EntryPoint.
 *
 * If some data has a structure which matches a schema:EntryPoint, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEntryPoint = validateEntryPoint(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEntryPoint instanceof OaValidationError) {
 *   // From this point on, `maybeEntryPoint` will have type `OaValidationError`
 *   const error = maybeEntryPoint;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEntryPoint` will have type `EntryPoint`
 * const entryPoint = maybeEntryPoint;
 * ```
 */
export declare function validateEntryPoint(maybeEntryPoint: unknown): EntryPoint | OaValidationError;
