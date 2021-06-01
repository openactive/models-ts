import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * TaxMode
 */
export declare type TaxMode = 'https://openactive.io/TaxGross' | 'https://openactive.io/TaxNet';
/**
 * TaxMode - Validation schema (w/ JOI)
 */
export declare const TaxModeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for TaxMode.
 *
 * If some data has one of the values of the TaxMode enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTaxMode = TaxMode.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTaxMode instanceof OaValidationError) {
 *   // From this point on, `maybeTaxMode` will have type `OaValidationError`
 *   const error = maybeTaxMode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTaxMode` will have type `TaxMode`
 * const taxMode = maybeTaxMode;
 * ```
 */
export declare function validateTaxMode(maybeTaxMode: unknown): TaxMode | OaValidationError;
