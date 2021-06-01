import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:GenderType
 *
 * An enumeration of genders.
 */
export declare type GenderType = 'https://schema.org/Female' | 'https://schema.org/Male';
/**
 * schema:GenderType - Validation schema (w/ JOI)
 *
 * An enumeration of genders.
 */
export declare const GenderTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:GenderType.
 *
 * If some data has one of the values of the schema:GenderType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGenderType = GenderType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGenderType instanceof OaValidationError) {
 *   // From this point on, `maybeGenderType` will have type `OaValidationError`
 *   const error = maybeGenderType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGenderType` will have type `GenderType`
 * const genderType = maybeGenderType;
 * ```
 */
export declare function validateGenderType(maybeGenderType: unknown): GenderType | OaValidationError;
