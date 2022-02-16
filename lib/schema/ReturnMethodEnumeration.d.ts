import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ReturnMethodEnumeration
 *
 * Enumerates several types of product return methods.
 */
export declare type ReturnMethodEnumeration = 'https://schema.org/ReturnAtKiosk' | 'https://schema.org/ReturnInStore' | 'https://schema.org/ReturnByMail';
/**
 * schema:ReturnMethodEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several types of product return methods.
 */
export declare const ReturnMethodEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:ReturnMethodEnumeration.
 *
 * If some data has one of the values of the schema:ReturnMethodEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReturnMethodEnumeration = validateReturnMethodEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReturnMethodEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeReturnMethodEnumeration` will have type `OaValidationError`
 *   const error = maybeReturnMethodEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReturnMethodEnumeration` will have type `ReturnMethodEnumeration`
 * const returnMethodEnumeration = maybeReturnMethodEnumeration;
 * ```
 */
export declare function validateReturnMethodEnumeration(maybeReturnMethodEnumeration: unknown): ReturnMethodEnumeration | OaValidationError;
