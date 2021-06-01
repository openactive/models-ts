// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:RestrictedDiet
 *
 * A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
 */
export type RestrictedDiet = 
  
  | 'https://schema.org/VegetarianDiet'
  | 'https://schema.org/LowCalorieDiet'
  | 'https://schema.org/GlutenFreeDiet'
  | 'https://schema.org/KosherDiet'
  | 'https://schema.org/VeganDiet'
  | 'https://schema.org/LowFatDiet'
  | 'https://schema.org/LowLactoseDiet'
  | 'https://schema.org/DiabeticDiet'
  | 'https://schema.org/HinduDiet'
  | 'https://schema.org/LowSaltDiet'
  | 'https://schema.org/HalalDiet'
  ;

/**
 * schema:RestrictedDiet - Validation schema (w/ JOI)
 *
 * A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
 */
export const RestrictedDietJoiSchema = Joi.string().valid(
  'https://schema.org/VegetarianDiet',
  'https://schema.org/LowCalorieDiet',
  'https://schema.org/GlutenFreeDiet',
  'https://schema.org/KosherDiet',
  'https://schema.org/VeganDiet',
  'https://schema.org/LowFatDiet',
  'https://schema.org/LowLactoseDiet',
  'https://schema.org/DiabeticDiet',
  'https://schema.org/HinduDiet',
  'https://schema.org/LowSaltDiet',
  'https://schema.org/HalalDiet',
);

/**
 * Runtime validator for schema:RestrictedDiet.
 *
 * If some data has one of the values of the schema:RestrictedDiet enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRestrictedDiet = RestrictedDiet.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRestrictedDiet instanceof OaValidationError) {
 *   // From this point on, `maybeRestrictedDiet` will have type `OaValidationError`
 *   const error = maybeRestrictedDiet;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRestrictedDiet` will have type `RestrictedDiet`
 * const restrictedDiet = maybeRestrictedDiet;
 * ```
 */
export function validateRestrictedDiet(maybeRestrictedDiet: unknown): RestrictedDiet | OaValidationError {
  const { value, error } = RestrictedDietJoiSchema.validate(maybeRestrictedDiet);
  if (error) {
    return new OaValidationError('RestrictedDiet', maybeRestrictedDiet, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as RestrictedDiet;
}
