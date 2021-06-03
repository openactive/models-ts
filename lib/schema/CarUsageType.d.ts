import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:CarUsageType
 *
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 */
export declare type CarUsageType = 'https://schema.org/RentalVehicleUsage' | 'https://schema.org/DrivingSchoolVehicleUsage' | 'https://schema.org/TaxiVehicleUsage';
/**
 * schema:CarUsageType - Validation schema (w/ JOI)
 *
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 */
export declare const CarUsageTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:CarUsageType.
 *
 * If some data has one of the values of the schema:CarUsageType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCarUsageType = validateCarUsageType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCarUsageType instanceof OaValidationError) {
 *   // From this point on, `maybeCarUsageType` will have type `OaValidationError`
 *   const error = maybeCarUsageType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCarUsageType` will have type `CarUsageType`
 * const carUsageType = maybeCarUsageType;
 * ```
 */
export declare function validateCarUsageType(maybeCarUsageType: unknown): CarUsageType | OaValidationError;
