// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:IncentiveQualifiedExpenseType
 *
 * The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible items) but the services (labor) are excluded.
 */
export type IncentiveQualifiedExpenseType = 
  
  | 'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOnly'
  | 'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOrServices'
  | 'https://schema.org/IncentiveQualifiedExpenseTypeServicesOnly'
  | 'https://schema.org/IncentiveQualifiedExpenseTypeUtilityBill'
  ;

/**
 * schema:IncentiveQualifiedExpenseType - Validation schema (w/ JOI)
 *
 * The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible items) but the services (labor) are excluded.
 */
export const IncentiveQualifiedExpenseTypeJoiSchema = Joi.string().valid(
  'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOnly',
  'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOrServices',
  'https://schema.org/IncentiveQualifiedExpenseTypeServicesOnly',
  'https://schema.org/IncentiveQualifiedExpenseTypeUtilityBill',
);

/**
 * Runtime validator for schema:IncentiveQualifiedExpenseType.
 *
 * If some data has one of the values of the schema:IncentiveQualifiedExpenseType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncentiveQualifiedExpenseType = validateIncentiveQualifiedExpenseType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncentiveQualifiedExpenseType instanceof OaValidationError) {
 *   // From this point on, `maybeIncentiveQualifiedExpenseType` will have type `OaValidationError`
 *   const error = maybeIncentiveQualifiedExpenseType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncentiveQualifiedExpenseType` will have type `IncentiveQualifiedExpenseType`
 * const incentiveQualifiedExpenseType = maybeIncentiveQualifiedExpenseType;
 * ```
 */
export function validateIncentiveQualifiedExpenseType(maybeIncentiveQualifiedExpenseType: unknown): IncentiveQualifiedExpenseType | OaValidationError {
  const { value, error } = IncentiveQualifiedExpenseTypeJoiSchema.validate(maybeIncentiveQualifiedExpenseType);
  if (error) {
    return new OaValidationError('IncentiveQualifiedExpenseType', maybeIncentiveQualifiedExpenseType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as IncentiveQualifiedExpenseType;
}
