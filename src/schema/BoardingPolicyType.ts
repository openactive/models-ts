// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:BoardingPolicyType
 *
 * A type of boarding policy used by an airline.
 */
export type BoardingPolicyType = 
  
  | 'https://schema.org/GroupBoardingPolicy'
  | 'https://schema.org/ZoneBoardingPolicy'
  ;

/**
 * schema:BoardingPolicyType - Validation schema (w/ JOI)
 *
 * A type of boarding policy used by an airline.
 */
export const BoardingPolicyTypeJoiSchema = Joi.string().valid(
  'https://schema.org/GroupBoardingPolicy',
  'https://schema.org/ZoneBoardingPolicy',
);

/**
 * Runtime validator for schema:BoardingPolicyType.
 *
 * If some data has one of the values of the schema:BoardingPolicyType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBoardingPolicyType = validateBoardingPolicyType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBoardingPolicyType instanceof OaValidationError) {
 *   // From this point on, `maybeBoardingPolicyType` will have type `OaValidationError`
 *   const error = maybeBoardingPolicyType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBoardingPolicyType` will have type `BoardingPolicyType`
 * const boardingPolicyType = maybeBoardingPolicyType;
 * ```
 */
export function validateBoardingPolicyType(maybeBoardingPolicyType: unknown): BoardingPolicyType | OaValidationError {
  const { value, error } = BoardingPolicyTypeJoiSchema.validate(maybeBoardingPolicyType);
  if (error) {
    return new OaValidationError('BoardingPolicyType', maybeBoardingPolicyType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as BoardingPolicyType;
}
