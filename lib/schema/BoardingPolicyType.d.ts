import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:BoardingPolicyType
 *
 * A type of boarding policy used by an airline.
 */
export declare type BoardingPolicyType = 'https://schema.org/GroupBoardingPolicy' | 'https://schema.org/ZoneBoardingPolicy';
/**
 * schema:BoardingPolicyType - Validation schema (w/ JOI)
 *
 * A type of boarding policy used by an airline.
 */
export declare const BoardingPolicyTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:BoardingPolicyType.
 *
 * If some data has one of the values of the schema:BoardingPolicyType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBoardingPolicyType = BoardingPolicyType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBoardingPolicyType instanceof OaValidationError) {
 *   // From this point on, `maybeBoardingPolicyType` will have type `OaValidationError`
 *   const error = maybeBoardingPolicyType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBoardingPolicyType` will have type `BoardingPolicyType`
 * const boardingPolicyType = maybeBoardingPolicyType;
 * ```
 */
export declare function validateBoardingPolicyType(maybeBoardingPolicyType: unknown): BoardingPolicyType | OaValidationError;
