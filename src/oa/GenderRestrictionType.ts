// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * GenderRestrictionType
 *
 * Enumerated types for gender restrictions that are applied to Events
 */
export type GenderRestrictionType = 
  
  | 'https://openactive.io/NoRestriction'
  | 'https://openactive.io/MaleOnly'
  | 'https://openactive.io/FemaleOnly'
  ;

/**
 * GenderRestrictionType - Validation schema (w/ JOI)
 *
 * Enumerated types for gender restrictions that are applied to Events
 */
export const GenderRestrictionTypeJoiSchema = Joi.string().valid(
  'https://openactive.io/NoRestriction',
  'https://openactive.io/MaleOnly',
  'https://openactive.io/FemaleOnly',
);

/**
 * Runtime validator for GenderRestrictionType.
 *
 * If some data has one of the values of the GenderRestrictionType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGenderRestrictionType = GenderRestrictionType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGenderRestrictionType instanceof OaValidationError) {
 *   // From this point on, `maybeGenderRestrictionType` will have type `OaValidationError`
 *   const error = maybeGenderRestrictionType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGenderRestrictionType` will have type `GenderRestrictionType`
 * const genderRestrictionType = maybeGenderRestrictionType;
 * ```
 */
export function validateGenderRestrictionType(maybeGenderRestrictionType: unknown): GenderRestrictionType | OaValidationError {
  const { value, error } = GenderRestrictionTypeJoiSchema.validate(maybeGenderRestrictionType);
  if (error) {
    return new OaValidationError('GenderRestrictionType', maybeGenderRestrictionType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GenderRestrictionType;
}
