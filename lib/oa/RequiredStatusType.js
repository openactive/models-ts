"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequiredStatusType = exports.RequiredStatusTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * RequiredStatusType - Validation schema (w/ JOI)
 */
exports.RequiredStatusTypeJoiSchema = Joi.string().valid('https://openactive.io/Required', 'https://openactive.io/Optional', 'https://openactive.io/Unavailable');
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
function validateRequiredStatusType(maybeRequiredStatusType) {
    const { value, error } = exports.RequiredStatusTypeJoiSchema.validate(maybeRequiredStatusType);
    if (error) {
        return new oaValidationError_1.OaValidationError('RequiredStatusType', maybeRequiredStatusType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateRequiredStatusType = validateRequiredStatusType;
