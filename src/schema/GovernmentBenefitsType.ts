// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:GovernmentBenefitsType
 *
 * GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 */
export type GovernmentBenefitsType = 
  
  | 'https://schema.org/BusinessSupport'
  | 'https://schema.org/PaidLeave'
  | 'https://schema.org/ParentalSupport'
  | 'https://schema.org/DisabilitySupport'
  | 'https://schema.org/UnemploymentSupport'
  | 'https://schema.org/HealthCare'
  | 'https://schema.org/OneTimePayments'
  | 'https://schema.org/BasicIncome'
  ;

/**
 * schema:GovernmentBenefitsType - Validation schema (w/ JOI)
 *
 * GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 */
export const GovernmentBenefitsTypeJoiSchema = Joi.string().valid(
  'https://schema.org/BusinessSupport',
  'https://schema.org/PaidLeave',
  'https://schema.org/ParentalSupport',
  'https://schema.org/DisabilitySupport',
  'https://schema.org/UnemploymentSupport',
  'https://schema.org/HealthCare',
  'https://schema.org/OneTimePayments',
  'https://schema.org/BasicIncome',
);

/**
 * Runtime validator for schema:GovernmentBenefitsType.
 *
 * If some data has one of the values of the schema:GovernmentBenefitsType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGovernmentBenefitsType = validateGovernmentBenefitsType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGovernmentBenefitsType instanceof OaValidationError) {
 *   // From this point on, `maybeGovernmentBenefitsType` will have type `OaValidationError`
 *   const error = maybeGovernmentBenefitsType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGovernmentBenefitsType` will have type `GovernmentBenefitsType`
 * const governmentBenefitsType = maybeGovernmentBenefitsType;
 * ```
 */
export function validateGovernmentBenefitsType(maybeGovernmentBenefitsType: unknown): GovernmentBenefitsType | OaValidationError {
  const { value, error } = GovernmentBenefitsTypeJoiSchema.validate(maybeGovernmentBenefitsType);
  if (error) {
    return new OaValidationError('GovernmentBenefitsType', maybeGovernmentBenefitsType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GovernmentBenefitsType;
}
