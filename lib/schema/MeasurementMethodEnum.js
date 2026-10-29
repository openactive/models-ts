"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMeasurementMethodEnum = exports.MeasurementMethodEnumJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MeasurementMethodEnum - Validation schema (w/ JOI)
 *
 * Enumeration(s) for use with [[measurementMethod]].
 */
exports.MeasurementMethodEnumJoiSchema = Joi.string().valid('https://schema.org/ExampleMeasurementMethodEnum');
/**
 * Runtime validator for schema:MeasurementMethodEnum.
 *
 * If some data has one of the values of the schema:MeasurementMethodEnum enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMeasurementMethodEnum = validateMeasurementMethodEnum(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMeasurementMethodEnum instanceof OaValidationError) {
 *   // From this point on, `maybeMeasurementMethodEnum` will have type `OaValidationError`
 *   const error = maybeMeasurementMethodEnum;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMeasurementMethodEnum` will have type `MeasurementMethodEnum`
 * const measurementMethodEnum = maybeMeasurementMethodEnum;
 * ```
 */
function validateMeasurementMethodEnum(maybeMeasurementMethodEnum) {
    const { value, error } = exports.MeasurementMethodEnumJoiSchema.validate(maybeMeasurementMethodEnum);
    if (error) {
        return new oaValidationError_1.OaValidationError('MeasurementMethodEnum', maybeMeasurementMethodEnum, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMeasurementMethodEnum = validateMeasurementMethodEnum;
