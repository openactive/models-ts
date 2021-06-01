// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:EnergyEfficiencyEnumeration
 *
 * Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 */
export type EnergyEfficiencyEnumeration = 
  string
  ;

/**
 * schema:EnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 */
export const EnergyEfficiencyEnumerationJoiSchema = Joi.string().valid(
);

/**
 * Runtime validator for schema:EnergyEfficiencyEnumeration.
 *
 * If some data has one of the values of the schema:EnergyEfficiencyEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEnergyEfficiencyEnumeration = EnergyEfficiencyEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEnergyEfficiencyEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeEnergyEfficiencyEnumeration` will have type `OaValidationError`
 *   const error = maybeEnergyEfficiencyEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEnergyEfficiencyEnumeration` will have type `EnergyEfficiencyEnumeration`
 * const energyEfficiencyEnumeration = maybeEnergyEfficiencyEnumeration;
 * ```
 */
export function validateEnergyEfficiencyEnumeration(maybeEnergyEfficiencyEnumeration: unknown): EnergyEfficiencyEnumeration | OaValidationError {
  const { value, error } = EnergyEfficiencyEnumerationJoiSchema.validate(maybeEnergyEfficiencyEnumeration);
  if (error) {
    return new OaValidationError('EnergyEfficiencyEnumeration', maybeEnergyEfficiencyEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EnergyEfficiencyEnumeration;
}
