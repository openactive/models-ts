"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSizeSystemEnumeration = exports.SizeSystemEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:SizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 */
exports.SizeSystemEnumerationJoiSchema = Joi.string().valid('https://schema.org/SizeSystemImperial', 'https://schema.org/SizeSystemMetric');
/**
 * Runtime validator for schema:SizeSystemEnumeration.
 *
 * If some data has one of the values of the schema:SizeSystemEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeSystemEnumeration = SizeSystemEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeSystemEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeSizeSystemEnumeration` will have type `OaValidationError`
 *   const error = maybeSizeSystemEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeSystemEnumeration` will have type `SizeSystemEnumeration`
 * const sizeSystemEnumeration = maybeSizeSystemEnumeration;
 * ```
 */
function validateSizeSystemEnumeration(maybeSizeSystemEnumeration) {
    const { value, error } = exports.SizeSystemEnumerationJoiSchema.validate(maybeSizeSystemEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('SizeSystemEnumeration', maybeSizeSystemEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSizeSystemEnumeration = validateSizeSystemEnumeration;