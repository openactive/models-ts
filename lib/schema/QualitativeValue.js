"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQualitativeValue = exports.QualitativeValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:QualitativeValue - Validation schema (w/ JOI)
 *
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 */
exports.QualitativeValueJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:QualitativeValue.
 *
 * If some data has one of the values of the schema:QualitativeValue enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeQualitativeValue = validateQualitativeValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeQualitativeValue instanceof OaValidationError) {
 *   // From this point on, `maybeQualitativeValue` will have type `OaValidationError`
 *   const error = maybeQualitativeValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeQualitativeValue` will have type `QualitativeValue`
 * const qualitativeValue = maybeQualitativeValue;
 * ```
 */
function validateQualitativeValue(maybeQualitativeValue) {
    const { value, error } = exports.QualitativeValueJoiSchema.validate(maybeQualitativeValue);
    if (error) {
        return new oaValidationError_1.OaValidationError('QualitativeValue', maybeQualitativeValue, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateQualitativeValue = validateQualitativeValue;
