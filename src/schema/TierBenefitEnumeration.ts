// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:TierBenefitEnumeration
 *
 * An enumeration of possible benefits as part of a loyalty (members) program.
 */
export type TierBenefitEnumeration = 
  
  | 'https://schema.org/TierBenefitLoyaltyPoints'
  | 'https://schema.org/TierBenefitLoyaltyPrice'
  | 'https://schema.org/TierBenefitLoyaltyReturns'
  | 'https://schema.org/TierBenefitLoyaltyShipping'
  ;

/**
 * schema:TierBenefitEnumeration - Validation schema (w/ JOI)
 *
 * An enumeration of possible benefits as part of a loyalty (members) program.
 */
export const TierBenefitEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/TierBenefitLoyaltyPoints',
  'https://schema.org/TierBenefitLoyaltyPrice',
  'https://schema.org/TierBenefitLoyaltyReturns',
  'https://schema.org/TierBenefitLoyaltyShipping',
);

/**
 * Runtime validator for schema:TierBenefitEnumeration.
 *
 * If some data has one of the values of the schema:TierBenefitEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTierBenefitEnumeration = validateTierBenefitEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTierBenefitEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeTierBenefitEnumeration` will have type `OaValidationError`
 *   const error = maybeTierBenefitEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTierBenefitEnumeration` will have type `TierBenefitEnumeration`
 * const tierBenefitEnumeration = maybeTierBenefitEnumeration;
 * ```
 */
export function validateTierBenefitEnumeration(maybeTierBenefitEnumeration: unknown): TierBenefitEnumeration | OaValidationError {
  const { value, error } = TierBenefitEnumerationJoiSchema.validate(maybeTierBenefitEnumeration);
  if (error) {
    return new OaValidationError('TierBenefitEnumeration', maybeTierBenefitEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as TierBenefitEnumeration;
}
