// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:SizeSystemEnumeration
 *
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
export type SizeSystemEnumeration = 
  
  | 'https://schema.org/SizeSystemMetric'
  | 'https://schema.org/SizeSystemImperial'
  ;

/**
 * schema:SizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
export const SizeSystemEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/SizeSystemMetric',
  'https://schema.org/SizeSystemImperial',
);

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
export function validateSizeSystemEnumeration(maybeSizeSystemEnumeration: unknown): SizeSystemEnumeration | OaValidationError {
  const { value, error } = SizeSystemEnumerationJoiSchema.validate(maybeSizeSystemEnumeration);
  if (error) {
    return new OaValidationError('SizeSystemEnumeration', maybeSizeSystemEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as SizeSystemEnumeration;
}
