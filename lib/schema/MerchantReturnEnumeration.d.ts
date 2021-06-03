import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MerchantReturnEnumeration
 *
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
export declare type MerchantReturnEnumeration = 'https://schema.org/MerchantReturnUnspecified' | 'https://schema.org/MerchantReturnNotPermitted' | 'https://schema.org/MerchantReturnFiniteReturnWindow' | 'https://schema.org/MerchantReturnUnlimitedWindow';
/**
 * schema:MerchantReturnEnumeration - Validation schema (w/ JOI)
 *
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
export declare const MerchantReturnEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MerchantReturnEnumeration.
 *
 * If some data has one of the values of the schema:MerchantReturnEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnEnumeration = validateMerchantReturnEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnEnumeration` will have type `OaValidationError`
 *   const error = maybeMerchantReturnEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnEnumeration` will have type `MerchantReturnEnumeration`
 * const merchantReturnEnumeration = maybeMerchantReturnEnumeration;
 * ```
 */
export declare function validateMerchantReturnEnumeration(maybeMerchantReturnEnumeration: unknown): MerchantReturnEnumeration | OaValidationError;
