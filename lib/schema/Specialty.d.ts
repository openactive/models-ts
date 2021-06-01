import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:Specialty
 *
 * Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 */
export declare type Specialty = string;
/**
 * schema:Specialty - Validation schema (w/ JOI)
 *
 * Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 */
export declare const SpecialtyJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:Specialty.
 *
 * If some data has one of the values of the schema:Specialty enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSpecialty = Specialty.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSpecialty instanceof OaValidationError) {
 *   // From this point on, `maybeSpecialty` will have type `OaValidationError`
 *   const error = maybeSpecialty;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSpecialty` will have type `Specialty`
 * const specialty = maybeSpecialty;
 * ```
 */
export declare function validateSpecialty(maybeSpecialty: unknown): Specialty | OaValidationError;
