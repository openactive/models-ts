import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * RequiredStatusType
 */
export declare type RequiredStatusType = 'https://openactive.io/Required' | 'https://openactive.io/Optional' | 'https://openactive.io/Unavailable';
/**
 * RequiredStatusType - Validation schema (w/ JOI)
 */
export declare const RequiredStatusTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for RequiredStatusType.
 *
 * If some data has one of the values of the RequiredStatusType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRequiredStatusType = RequiredStatusType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRequiredStatusType instanceof OaValidationError) {
 *   // From this point on, `maybeRequiredStatusType` will have type `OaValidationError`
 *   const error = maybeRequiredStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRequiredStatusType` will have type `RequiredStatusType`
 * const requiredStatusType = maybeRequiredStatusType;
 * ```
 */
export declare function validateRequiredStatusType(maybeRequiredStatusType: unknown): RequiredStatusType | OaValidationError;
