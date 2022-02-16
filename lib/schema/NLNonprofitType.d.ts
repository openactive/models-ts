import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:NLNonprofitType
 */
export declare type NLNonprofitType = {
    '@type': 'NLNonprofitType';
    '@context'?: string | string[];
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
};
/**
 * schema:NLNonprofitType
 *
 * This differs from NLNonprofitType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type NLNonprofitTypeOrSubClass = NLNonprofitType;
/**
 * schema:NLNonprofitType - Validation schema (w/ JOI)
 */
export declare const NLNonprofitTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:NLNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from NLNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const NLNonprofitTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:NLNonprofitType.
 *
 * If some data has a structure which matches a schema:NLNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNLNonprofitType = validateNLNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNLNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeNLNonprofitType` will have type `OaValidationError`
 *   const error = maybeNLNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNLNonprofitType` will have type `NLNonprofitType`
 * const nLNonprofitType = maybeNLNonprofitType;
 * ```
 */
export declare function validateNLNonprofitType(maybeNLNonprofitType: unknown): NLNonprofitType | OaValidationError;
