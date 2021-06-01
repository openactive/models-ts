// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:SizeGroupEnumeration
 *
 * Enumerates common size groups for various product categories.
 */
export type SizeGroupEnumeration = 
  string
  ;

/**
 * schema:SizeGroupEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size groups for various product categories.
 */
export const SizeGroupEnumerationJoiSchema = Joi.string().valid(
);

/**
 * Runtime validator for schema:SizeGroupEnumeration.
 *
 * If some data has one of the values of the schema:SizeGroupEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeGroupEnumeration = SizeGroupEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeGroupEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeSizeGroupEnumeration` will have type `OaValidationError`
 *   const error = maybeSizeGroupEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeGroupEnumeration` will have type `SizeGroupEnumeration`
 * const sizeGroupEnumeration = maybeSizeGroupEnumeration;
 * ```
 */
export function validateSizeGroupEnumeration(maybeSizeGroupEnumeration: unknown): SizeGroupEnumeration | OaValidationError {
  const { value, error } = SizeGroupEnumerationJoiSchema.validate(maybeSizeGroupEnumeration);
  if (error) {
    return new OaValidationError('SizeGroupEnumeration', maybeSizeGroupEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as SizeGroupEnumeration;
}
