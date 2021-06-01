// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:PriceComponentTypeEnumeration
 *
 * Enumerates different price components that together make up the total price for an offered product.
 */
export type PriceComponentTypeEnumeration = 
  
  | 'https://schema.org/Downpayment'
  | 'https://schema.org/CleaningFee'
  | 'https://schema.org/DistanceFee'
  | 'https://schema.org/ActivationFee'
  | 'https://schema.org/Installment'
  | 'https://schema.org/Subscription'
  ;

/**
 * schema:PriceComponentTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates different price components that together make up the total price for an offered product.
 */
export const PriceComponentTypeEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/Downpayment',
  'https://schema.org/CleaningFee',
  'https://schema.org/DistanceFee',
  'https://schema.org/ActivationFee',
  'https://schema.org/Installment',
  'https://schema.org/Subscription',
);

/**
 * Runtime validator for schema:PriceComponentTypeEnumeration.
 *
 * If some data has one of the values of the schema:PriceComponentTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePriceComponentTypeEnumeration = PriceComponentTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePriceComponentTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybePriceComponentTypeEnumeration` will have type `OaValidationError`
 *   const error = maybePriceComponentTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePriceComponentTypeEnumeration` will have type `PriceComponentTypeEnumeration`
 * const priceComponentTypeEnumeration = maybePriceComponentTypeEnumeration;
 * ```
 */
export function validatePriceComponentTypeEnumeration(maybePriceComponentTypeEnumeration: unknown): PriceComponentTypeEnumeration | OaValidationError {
  const { value, error } = PriceComponentTypeEnumerationJoiSchema.validate(maybePriceComponentTypeEnumeration);
  if (error) {
    return new OaValidationError('PriceComponentTypeEnumeration', maybePriceComponentTypeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PriceComponentTypeEnumeration;
}
