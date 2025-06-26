import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ReturnLabelSourceEnumeration
 *
 * Enumerates several types of return labels for product returns.
 */
export declare type ReturnLabelSourceEnumeration = 'https://schema.org/ReturnLabelDownloadAndPrint' | 'https://schema.org/ReturnLabelInBox' | 'https://schema.org/ReturnLabelCustomerResponsibility';
/**
 * schema:ReturnLabelSourceEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several types of return labels for product returns.
 */
export declare const ReturnLabelSourceEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:ReturnLabelSourceEnumeration.
 *
 * If some data has one of the values of the schema:ReturnLabelSourceEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReturnLabelSourceEnumeration = validateReturnLabelSourceEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReturnLabelSourceEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeReturnLabelSourceEnumeration` will have type `OaValidationError`
 *   const error = maybeReturnLabelSourceEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReturnLabelSourceEnumeration` will have type `ReturnLabelSourceEnumeration`
 * const returnLabelSourceEnumeration = maybeReturnLabelSourceEnumeration;
 * ```
 */
export declare function validateReturnLabelSourceEnumeration(maybeReturnLabelSourceEnumeration: unknown): ReturnLabelSourceEnumeration | OaValidationError;
