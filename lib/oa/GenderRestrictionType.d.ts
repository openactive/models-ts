import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * GenderRestrictionType
 *
 * Enumerated types for gender restrictions that are applied to Events
 */
export declare type GenderRestrictionType = 'https://openactive.io/NoRestriction' | 'https://openactive.io/MaleOnly' | 'https://openactive.io/FemaleOnly';
/**
 * GenderRestrictionType - Validation schema (w/ JOI)
 *
 * Enumerated types for gender restrictions that are applied to Events
 */
export declare const GenderRestrictionTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for GenderRestrictionType.
 *
 * If some data has one of the values of the GenderRestrictionType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGenderRestrictionType = validateGenderRestrictionType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGenderRestrictionType instanceof OaValidationError) {
 *   // From this point on, `maybeGenderRestrictionType` will have type `OaValidationError`
 *   const error = maybeGenderRestrictionType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGenderRestrictionType` will have type `GenderRestrictionType`
 * const genderRestrictionType = maybeGenderRestrictionType;
 * ```
 */
export declare function validateGenderRestrictionType(maybeGenderRestrictionType: unknown): GenderRestrictionType | OaValidationError;
