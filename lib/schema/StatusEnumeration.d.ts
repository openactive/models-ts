import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:StatusEnumeration
 *
 * Lists or enumerations dealing with status types.
 */
export declare type StatusEnumeration = string;
/**
 * schema:StatusEnumeration - Validation schema (w/ JOI)
 *
 * Lists or enumerations dealing with status types.
 */
export declare const StatusEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:StatusEnumeration.
 *
 * If some data has one of the values of the schema:StatusEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStatusEnumeration = StatusEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStatusEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeStatusEnumeration` will have type `OaValidationError`
 *   const error = maybeStatusEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStatusEnumeration` will have type `StatusEnumeration`
 * const statusEnumeration = maybeStatusEnumeration;
 * ```
 */
export declare function validateStatusEnumeration(maybeStatusEnumeration: unknown): StatusEnumeration | OaValidationError;
