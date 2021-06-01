// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:MedicalEnumeration
 *
 * Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
 */
export type MedicalEnumeration = 
  string
  ;

/**
 * schema:MedicalEnumeration - Validation schema (w/ JOI)
 *
 * Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
 */
export const MedicalEnumerationJoiSchema = Joi.string().valid(
);

/**
 * Runtime validator for schema:MedicalEnumeration.
 *
 * If some data has one of the values of the schema:MedicalEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalEnumeration = MedicalEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalEnumeration` will have type `OaValidationError`
 *   const error = maybeMedicalEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalEnumeration` will have type `MedicalEnumeration`
 * const medicalEnumeration = maybeMedicalEnumeration;
 * ```
 */
export function validateMedicalEnumeration(maybeMedicalEnumeration: unknown): MedicalEnumeration | OaValidationError {
  const { value, error } = MedicalEnumerationJoiSchema.validate(maybeMedicalEnumeration);
  if (error) {
    return new OaValidationError('MedicalEnumeration', maybeMedicalEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalEnumeration;
}
