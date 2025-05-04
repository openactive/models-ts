import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:PriceComponentTypeEnumeration
 *
 * Enumerates different price components that together make up the total price for an offered product.
 */
export declare type PriceComponentTypeEnumeration = 'https://schema.org/DistanceFee' | 'https://schema.org/ActivationFee' | 'https://schema.org/CleaningFee' | 'https://schema.org/Installment' | 'https://schema.org/Subscription' | 'https://schema.org/Downpayment';
/**
 * schema:PriceComponentTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates different price components that together make up the total price for an offered product.
 */
export declare const PriceComponentTypeEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:PriceComponentTypeEnumeration.
 *
 * If some data has one of the values of the schema:PriceComponentTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePriceComponentTypeEnumeration = validatePriceComponentTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePriceComponentTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybePriceComponentTypeEnumeration` will have type `OaValidationError`
 *   const error = maybePriceComponentTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePriceComponentTypeEnumeration` will have type `PriceComponentTypeEnumeration`
 * const priceComponentTypeEnumeration = maybePriceComponentTypeEnumeration;
 * ```
 */
export declare function validatePriceComponentTypeEnumeration(maybePriceComponentTypeEnumeration: unknown): PriceComponentTypeEnumeration | OaValidationError;
