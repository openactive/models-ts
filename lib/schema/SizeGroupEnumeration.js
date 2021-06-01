"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSizeGroupEnumeration = exports.SizeGroupEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:SizeGroupEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size groups for various product categories.
 */
exports.SizeGroupEnumerationJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:SizeGroupEnumeration.
 *
 * If some data has one of the values of the schema:SizeGroupEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeGroupEnumeration = SizeGroupEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeGroupEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeSizeGroupEnumeration` will have type `OaValidationError`
 *   const error = maybeSizeGroupEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeGroupEnumeration` will have type `SizeGroupEnumeration`
 * const sizeGroupEnumeration = maybeSizeGroupEnumeration;
 * ```
 */
function validateSizeGroupEnumeration(maybeSizeGroupEnumeration) {
    const { value, error } = exports.SizeGroupEnumerationJoiSchema.validate(maybeSizeGroupEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('SizeGroupEnumeration', maybeSizeGroupEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSizeGroupEnumeration = validateSizeGroupEnumeration;
