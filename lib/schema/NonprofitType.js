"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNonprofitType = exports.NonprofitTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:NonprofitType - Validation schema (w/ JOI)
 *
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 */
exports.NonprofitTypeJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:NonprofitType.
 *
 * If some data has one of the values of the schema:NonprofitType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNonprofitType = validateNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeNonprofitType` will have type `OaValidationError`
 *   const error = maybeNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNonprofitType` will have type `NonprofitType`
 * const nonprofitType = maybeNonprofitType;
 * ```
 */
function validateNonprofitType(maybeNonprofitType) {
    const { value, error } = exports.NonprofitTypeJoiSchema.validate(maybeNonprofitType);
    if (error) {
        return new oaValidationError_1.OaValidationError('NonprofitType', maybeNonprofitType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateNonprofitType = validateNonprofitType;
