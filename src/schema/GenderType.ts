// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:GenderType
 *
 * An enumeration of genders.
 */
export type GenderType = 
  
  | 'https://schema.org/Male'
  | 'https://schema.org/Female'
  ;

/**
 * schema:GenderType - Validation schema (w/ JOI)
 *
 * An enumeration of genders.
 */
export const GenderTypeJoiSchema = Joi.string().valid(
  'https://schema.org/Male',
  'https://schema.org/Female',
);

/**
 * Runtime validator for schema:GenderType.
 *
 * If some data has one of the values of the schema:GenderType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGenderType = validateGenderType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGenderType instanceof OaValidationError) {
 *   // From this point on, `maybeGenderType` will have type `OaValidationError`
 *   const error = maybeGenderType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGenderType` will have type `GenderType`
 * const genderType = maybeGenderType;
 * ```
 */
export function validateGenderType(maybeGenderType: unknown): GenderType | OaValidationError {
  const { value, error } = GenderTypeJoiSchema.validate(maybeGenderType);
  if (error) {
    return new OaValidationError('GenderType', maybeGenderType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GenderType;
}
