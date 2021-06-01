import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:SizeGroupEnumeration
 *
 * Enumerates common size groups for various product categories.
 */
export declare type SizeGroupEnumeration = string;
/**
 * schema:SizeGroupEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size groups for various product categories.
 */
export declare const SizeGroupEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:SizeGroupEnumeration.
 *
 * If some data has one of the values of the schema:SizeGroupEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeGroupEnumeration = SizeGroupEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeGroupEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeSizeGroupEnumeration` will have type `OaValidationError`
 *   const error = maybeSizeGroupEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeGroupEnumeration` will have type `SizeGroupEnumeration`
 * const sizeGroupEnumeration = maybeSizeGroupEnumeration;
 * ```
 */
export declare function validateSizeGroupEnumeration(maybeSizeGroupEnumeration: unknown): SizeGroupEnumeration | OaValidationError;
