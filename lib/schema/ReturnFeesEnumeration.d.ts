import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ReturnFeesEnumeration
 *
 * Enumerates several kinds of policies for product return fees.
 */
export declare type ReturnFeesEnumeration = 'https://schema.org/ReturnShippingFees' | 'https://schema.org/ReturnFeesCustomerResponsibility' | 'https://schema.org/RestockingFees' | 'https://schema.org/OriginalShippingFees' | 'https://schema.org/FreeReturn';
/**
 * schema:ReturnFeesEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several kinds of policies for product return fees.
 */
export declare const ReturnFeesEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:ReturnFeesEnumeration.
 *
 * If some data has one of the values of the schema:ReturnFeesEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReturnFeesEnumeration = validateReturnFeesEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReturnFeesEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeReturnFeesEnumeration` will have type `OaValidationError`
 *   const error = maybeReturnFeesEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReturnFeesEnumeration` will have type `ReturnFeesEnumeration`
 * const returnFeesEnumeration = maybeReturnFeesEnumeration;
 * ```
 */
export declare function validateReturnFeesEnumeration(maybeReturnFeesEnumeration: unknown): ReturnFeesEnumeration | OaValidationError;
