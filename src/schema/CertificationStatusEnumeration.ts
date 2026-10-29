// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:CertificationStatusEnumeration
 *
 * Enumerates the different statuses of a Certification (Active and Inactive).
 */
export type CertificationStatusEnumeration = 
  
  | 'https://schema.org/CertificationActive'
  | 'https://schema.org/CertificationInactive'
  ;

/**
 * schema:CertificationStatusEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates the different statuses of a Certification (Active and Inactive).
 */
export const CertificationStatusEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/CertificationActive',
  'https://schema.org/CertificationInactive',
);

/**
 * Runtime validator for schema:CertificationStatusEnumeration.
 *
 * If some data has one of the values of the schema:CertificationStatusEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCertificationStatusEnumeration = validateCertificationStatusEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCertificationStatusEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeCertificationStatusEnumeration` will have type `OaValidationError`
 *   const error = maybeCertificationStatusEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCertificationStatusEnumeration` will have type `CertificationStatusEnumeration`
 * const certificationStatusEnumeration = maybeCertificationStatusEnumeration;
 * ```
 */
export function validateCertificationStatusEnumeration(maybeCertificationStatusEnumeration: unknown): CertificationStatusEnumeration | OaValidationError {
  const { value, error } = CertificationStatusEnumerationJoiSchema.validate(maybeCertificationStatusEnumeration);
  if (error) {
    return new OaValidationError('CertificationStatusEnumeration', maybeCertificationStatusEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as CertificationStatusEnumeration;
}
