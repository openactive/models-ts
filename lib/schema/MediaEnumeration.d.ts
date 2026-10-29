import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MediaEnumeration
 *
 * MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflections of externally developed lists, or created at schema.org, or a combination.
 */
export declare type MediaEnumeration = string;
/**
 * schema:MediaEnumeration - Validation schema (w/ JOI)
 *
 * MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflections of externally developed lists, or created at schema.org, or a combination.
 */
export declare const MediaEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MediaEnumeration.
 *
 * If some data has one of the values of the schema:MediaEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMediaEnumeration = validateMediaEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMediaEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMediaEnumeration` will have type `OaValidationError`
 *   const error = maybeMediaEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMediaEnumeration` will have type `MediaEnumeration`
 * const mediaEnumeration = maybeMediaEnumeration;
 * ```
 */
export declare function validateMediaEnumeration(maybeMediaEnumeration: unknown): MediaEnumeration | OaValidationError;
