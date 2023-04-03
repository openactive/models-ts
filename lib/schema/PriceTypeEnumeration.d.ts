import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:PriceTypeEnumeration
 *
 * Enumerates different price types, for example list price, invoice price, and sale price.
 */
export declare type PriceTypeEnumeration = 'https://schema.org/SalePrice' | 'https://schema.org/MSRP' | 'https://schema.org/ListPrice' | 'https://schema.org/InvoicePrice' | 'https://schema.org/SRP' | 'https://schema.org/MinimumAdvertisedPrice';
/**
 * schema:PriceTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates different price types, for example list price, invoice price, and sale price.
 */
export declare const PriceTypeEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:PriceTypeEnumeration.
 *
 * If some data has one of the values of the schema:PriceTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePriceTypeEnumeration = validatePriceTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePriceTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybePriceTypeEnumeration` will have type `OaValidationError`
 *   const error = maybePriceTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePriceTypeEnumeration` will have type `PriceTypeEnumeration`
 * const priceTypeEnumeration = maybePriceTypeEnumeration;
 * ```
 */
export declare function validatePriceTypeEnumeration(maybePriceTypeEnumeration: unknown): PriceTypeEnumeration | OaValidationError;
