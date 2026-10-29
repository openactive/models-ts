import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:CertificationStatusEnumeration
 *
 * Enumerates the different statuses of a Certification (Active and Inactive).
 */
export declare type CertificationStatusEnumeration = 'https://schema.org/CertificationActive' | 'https://schema.org/CertificationInactive';
/**
 * schema:CertificationStatusEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates the different statuses of a Certification (Active and Inactive).
 */
export declare const CertificationStatusEnumerationJoiSchema: Joi.StringSchema;
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
export declare function validateCertificationStatusEnumeration(maybeCertificationStatusEnumeration: unknown): CertificationStatusEnumeration | OaValidationError;
