"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMeasurementTypeEnumeration = exports.MeasurementTypeEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MeasurementTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 */
exports.MeasurementTypeEnumerationJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:MeasurementTypeEnumeration.
 *
 * If some data has one of the values of the schema:MeasurementTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMeasurementTypeEnumeration = validateMeasurementTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMeasurementTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMeasurementTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeMeasurementTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMeasurementTypeEnumeration` will have type `MeasurementTypeEnumeration`
 * const measurementTypeEnumeration = maybeMeasurementTypeEnumeration;
 * ```
 */
function validateMeasurementTypeEnumeration(maybeMeasurementTypeEnumeration) {
    const { value, error } = exports.MeasurementTypeEnumerationJoiSchema.validate(maybeMeasurementTypeEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('MeasurementTypeEnumeration', maybeMeasurementTypeEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMeasurementTypeEnumeration = validateMeasurementTypeEnumeration;
