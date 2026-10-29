// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:IncentiveStatus
 *
 * Enumerates a status for an incentive, such as whether it is active.
 */
export type IncentiveStatus = 
  
  | 'https://schema.org/IncentiveStatusActive'
  | 'https://schema.org/IncentiveStatusInDevelopment'
  | 'https://schema.org/IncentiveStatusOnHold'
  | 'https://schema.org/IncentiveStatusRetired'
  ;

/**
 * schema:IncentiveStatus - Validation schema (w/ JOI)
 *
 * Enumerates a status for an incentive, such as whether it is active.
 */
export const IncentiveStatusJoiSchema = Joi.string().valid(
  'https://schema.org/IncentiveStatusActive',
  'https://schema.org/IncentiveStatusInDevelopment',
  'https://schema.org/IncentiveStatusOnHold',
  'https://schema.org/IncentiveStatusRetired',
);

/**
 * Runtime validator for schema:IncentiveStatus.
 *
 * If some data has one of the values of the schema:IncentiveStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncentiveStatus = validateIncentiveStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncentiveStatus instanceof OaValidationError) {
 *   // From this point on, `maybeIncentiveStatus` will have type `OaValidationError`
 *   const error = maybeIncentiveStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncentiveStatus` will have type `IncentiveStatus`
 * const incentiveStatus = maybeIncentiveStatus;
 * ```
 */
export function validateIncentiveStatus(maybeIncentiveStatus: unknown): IncentiveStatus | OaValidationError {
  const { value, error } = IncentiveStatusJoiSchema.validate(maybeIncentiveStatus);
  if (error) {
    return new OaValidationError('IncentiveStatus', maybeIncentiveStatus, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as IncentiveStatus;
}
