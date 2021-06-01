// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:PriceTypeEnumeration
 *
 * Enumerates different price types, for example list price, invoice price, and sale price.
 */
export type PriceTypeEnumeration = 
  
  | 'https://schema.org/SalePrice'
  | 'https://schema.org/InvoicePrice'
  | 'https://schema.org/MinimumAdvertisedPrice'
  | 'https://schema.org/ListPrice'
  | 'https://schema.org/SRP'
  | 'https://schema.org/MSRP'
  ;

/**
 * schema:PriceTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates different price types, for example list price, invoice price, and sale price.
 */
export const PriceTypeEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/SalePrice',
  'https://schema.org/InvoicePrice',
  'https://schema.org/MinimumAdvertisedPrice',
  'https://schema.org/ListPrice',
  'https://schema.org/SRP',
  'https://schema.org/MSRP',
);

/**
 * Runtime validator for schema:PriceTypeEnumeration.
 *
 * If some data has one of the values of the schema:PriceTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePriceTypeEnumeration = PriceTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePriceTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybePriceTypeEnumeration` will have type `OaValidationError`
 *   const error = maybePriceTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePriceTypeEnumeration` will have type `PriceTypeEnumeration`
 * const priceTypeEnumeration = maybePriceTypeEnumeration;
 * ```
 */
export function validatePriceTypeEnumeration(maybePriceTypeEnumeration: unknown): PriceTypeEnumeration | OaValidationError {
  const { value, error } = PriceTypeEnumerationJoiSchema.validate(maybePriceTypeEnumeration);
  if (error) {
    return new OaValidationError('PriceTypeEnumeration', maybePriceTypeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PriceTypeEnumeration;
}
