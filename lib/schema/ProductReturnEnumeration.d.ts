import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ProductReturnEnumeration
 *
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
export declare type ProductReturnEnumeration = 'https://schema.org/ProductReturnFiniteReturnWindow' | 'https://schema.org/ProductReturnNotPermitted' | 'https://schema.org/ProductReturnUnlimitedWindow' | 'https://schema.org/ProductReturnUnspecified';
/**
 * schema:ProductReturnEnumeration - Validation schema (w/ JOI)
 *
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
export declare const ProductReturnEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:ProductReturnEnumeration.
 *
 * If some data has one of the values of the schema:ProductReturnEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProductReturnEnumeration = validateProductReturnEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProductReturnEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeProductReturnEnumeration` will have type `OaValidationError`
 *   const error = maybeProductReturnEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProductReturnEnumeration` will have type `ProductReturnEnumeration`
 * const productReturnEnumeration = maybeProductReturnEnumeration;
 * ```
 */
export declare function validateProductReturnEnumeration(maybeProductReturnEnumeration: unknown): ProductReturnEnumeration | OaValidationError;
