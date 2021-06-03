// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:NonprofitType
 *
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 */
export type NonprofitType = 
  string
  ;

/**
 * schema:NonprofitType - Validation schema (w/ JOI)
 *
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 */
export const NonprofitTypeJoiSchema = Joi.string().valid(
);

/**
 * Runtime validator for schema:NonprofitType.
 *
 * If some data has one of the values of the schema:NonprofitType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNonprofitType = validateNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeNonprofitType` will have type `OaValidationError`
 *   const error = maybeNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNonprofitType` will have type `NonprofitType`
 * const nonprofitType = maybeNonprofitType;
 * ```
 */
export function validateNonprofitType(maybeNonprofitType: unknown): NonprofitType | OaValidationError {
  const { value, error } = NonprofitTypeJoiSchema.validate(maybeNonprofitType);
  if (error) {
    return new OaValidationError('NonprofitType', maybeNonprofitType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as NonprofitType;
}
