import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:BedType
 */
export declare type BedType = {
    '@type': 'BedType';
    '@context'?: string | string[];
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
};
/**
 * schema:BedType
 *
 * This differs from BedType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type BedTypeOrSubClass = BedType;
/**
 * schema:BedType - Validation schema (w/ JOI)
 */
export declare const BedTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:BedType - Validation schema (w/ JOI)
 *
 * This differs from BedTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const BedTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:BedType.
 *
 * If some data has a structure which matches a schema:BedType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBedType = validateBedType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBedType instanceof OaValidationError) {
 *   // From this point on, `maybeBedType` will have type `OaValidationError`
 *   const error = maybeBedType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBedType` will have type `BedType`
 * const bedType = maybeBedType;
 * ```
 */
export declare function validateBedType(maybeBedType: unknown): BedType | OaValidationError;
