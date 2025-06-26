import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:SizeSystemEnumeration
 *
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
export declare type SizeSystemEnumeration = 'https://schema.org/SizeSystemMetric' | 'https://schema.org/SizeSystemImperial';
/**
 * schema:SizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
export declare const SizeSystemEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:SizeSystemEnumeration.
 *
 * If some data has one of the values of the schema:SizeSystemEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeSystemEnumeration = validateSizeSystemEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeSystemEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeSizeSystemEnumeration` will have type `OaValidationError`
 *   const error = maybeSizeSystemEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeSystemEnumeration` will have type `SizeSystemEnumeration`
 * const sizeSystemEnumeration = maybeSizeSystemEnumeration;
 * ```
 */
export declare function validateSizeSystemEnumeration(maybeSizeSystemEnumeration: unknown): SizeSystemEnumeration | OaValidationError;
