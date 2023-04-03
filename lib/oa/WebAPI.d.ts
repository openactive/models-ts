import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * WebAPI
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 */
export declare type WebAPI = {
    '@type': 'WebAPI';
    '@context'?: string | string[];
    /**
     * The name of the WebAPI
     *
     * ```json
     * "name": "Acme Leisure Sessions and Facilities"
     * ```
     */
    name?: string;
    /**
     * A plain text description of the Dataset, which must not include HTML or other markup.
     *
     * ```json
     * "description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."
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
     * The location of the OpenID Provider or other relevant authentication authority that must be used to access the API.
     *
     * ```json
     * "authenticationAuthority": "https://auth.bookingsystem.com"
     * ```
     */
    authenticationAuthority?: string;
    /**
     * Indicates the version and profiles of OpenActive Open Booking Specification with which this WebAPI conforms, by specifying these as URLs.
     *
     * ```json
     * "conformsTo": [
     *   "https://openactive.io/open-booking-api/1.0/#core"
     * ]
     * ```
     */
    conformsTo?: string[];
    /**
     * A link to documentation related to the Dataset, or a link to the OpenActive developer documentation if no Dataset-specific documentation is available.
     *
     * ```json
     * "documentation": "https://developer.openactive.io"
     * ```
     */
    documentation?: string;
    /**
     * The Open API document associated with this version of the Open Booking API
     *
     * ```json
     * "endpointDescription": "https://openactive.io/open-booking-api/1.0/swagger.json"
     * ```
     */
    endpointDescription?: string;
    /**
     * The base URL of the Open Booking API
     *
     * ```json
     * "endpointURL": "https://example.bookingsystem.com/api/openbooking"
     * ```
     */
    endpointURL?: string;
    /**
     * The web page the broker uses to obtain access to the API, e.g. via a web form.
     *
     * ```json
     * "landingPage": "https://exampleforms.com/get-me-an-api-access-key"
     * ```
     */
    landingPage?: string;
    /**
     * A link to terms of service related to the use of this API.
     *
     * ```json
     * "termsOfService": "https://example.bookingsystem.com/terms"
     * ```
     */
    termsOfService?: string;
};
/**
 * WebAPI
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 *
 * This differs from WebAPI because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type WebAPIOrSubClass = WebAPI;
/**
 * WebAPI - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 */
export declare const WebAPIJoiSchema: Joi.ObjectSchema;
/**
 * WebAPI - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 *
 * This differs from WebAPIJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const WebAPIOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for WebAPI.
 *
 * If some data has a structure which matches a WebAPI, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWebAPI = validateWebAPI(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWebAPI instanceof OaValidationError) {
 *   // From this point on, `maybeWebAPI` will have type `OaValidationError`
 *   const error = maybeWebAPI;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWebAPI` will have type `WebAPI`
 * const webAPI = maybeWebAPI;
 * ```
 */
export declare function validateWebAPI(maybeWebAPI: unknown): WebAPI | OaValidationError;
