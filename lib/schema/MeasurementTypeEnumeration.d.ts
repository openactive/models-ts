import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MeasurementTypeEnumeration
 *
 * Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 */
export declare type MeasurementTypeEnumeration = string;
/**
 * schema:MeasurementTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 */
export declare const MeasurementTypeEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MeasurementTypeEnumeration.
 *
 * If some data has one of the values of the schema:MeasurementTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMeasurementTypeEnumeration = MeasurementTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMeasurementTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMeasurementTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeMeasurementTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMeasurementTypeEnumeration` will have type `MeasurementTypeEnumeration`
 * const measurementTypeEnumeration = maybeMeasurementTypeEnumeration;
 * ```
 */
export declare function validateMeasurementTypeEnumeration(maybeMeasurementTypeEnumeration: unknown): MeasurementTypeEnumeration | OaValidationError;
