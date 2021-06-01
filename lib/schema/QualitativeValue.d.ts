import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:QualitativeValue
 *
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 */
export declare type QualitativeValue = string;
/**
 * schema:QualitativeValue - Validation schema (w/ JOI)
 *
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 */
export declare const QualitativeValueJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:QualitativeValue.
 *
 * If some data has one of the values of the schema:QualitativeValue enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeQualitativeValue = QualitativeValue.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeQualitativeValue instanceof OaValidationError) {
 *   // From this point on, `maybeQualitativeValue` will have type `OaValidationError`
 *   const error = maybeQualitativeValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeQualitativeValue` will have type `QualitativeValue`
 * const qualitativeValue = maybeQualitativeValue;
 * ```
 */
export declare function validateQualitativeValue(maybeQualitativeValue: unknown): QualitativeValue | OaValidationError;
