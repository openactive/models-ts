// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:PhysicalActivityCategory
 *
 * Categories of physical activity, organized by physiologic classification.
 */
export type PhysicalActivityCategory = 
  
  | 'https://schema.org/Balance'
  | 'https://schema.org/AnaerobicActivity'
  | 'https://schema.org/Flexibility'
  | 'https://schema.org/StrengthTraining'
  | 'https://schema.org/AerobicActivity'
  | 'https://schema.org/OccupationalActivity'
  | 'https://schema.org/LeisureTimeActivity'
  ;

/**
 * schema:PhysicalActivityCategory - Validation schema (w/ JOI)
 *
 * Categories of physical activity, organized by physiologic classification.
 */
export const PhysicalActivityCategoryJoiSchema = Joi.string().valid(
  'https://schema.org/Balance',
  'https://schema.org/AnaerobicActivity',
  'https://schema.org/Flexibility',
  'https://schema.org/StrengthTraining',
  'https://schema.org/AerobicActivity',
  'https://schema.org/OccupationalActivity',
  'https://schema.org/LeisureTimeActivity',
);

/**
 * Runtime validator for schema:PhysicalActivityCategory.
 *
 * If some data has one of the values of the schema:PhysicalActivityCategory enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePhysicalActivityCategory = validatePhysicalActivityCategory(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePhysicalActivityCategory instanceof OaValidationError) {
 *   // From this point on, `maybePhysicalActivityCategory` will have type `OaValidationError`
 *   const error = maybePhysicalActivityCategory;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePhysicalActivityCategory` will have type `PhysicalActivityCategory`
 * const physicalActivityCategory = maybePhysicalActivityCategory;
 * ```
 */
export function validatePhysicalActivityCategory(maybePhysicalActivityCategory: unknown): PhysicalActivityCategory | OaValidationError {
  const { value, error } = PhysicalActivityCategoryJoiSchema.validate(maybePhysicalActivityCategory);
  if (error) {
    return new OaValidationError('PhysicalActivityCategory', maybePhysicalActivityCategory, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PhysicalActivityCategory;
}
