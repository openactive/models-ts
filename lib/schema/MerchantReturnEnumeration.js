"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMerchantReturnEnumeration = exports.MerchantReturnEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MerchantReturnEnumeration - Validation schema (w/ JOI)
 *
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
exports.MerchantReturnEnumerationJoiSchema = Joi.string().valid('https://schema.org/MerchantReturnUnspecified', 'https://schema.org/MerchantReturnNotPermitted', 'https://schema.org/MerchantReturnFiniteReturnWindow', 'https://schema.org/MerchantReturnUnlimitedWindow');
/**
 * Runtime validator for schema:MerchantReturnEnumeration.
 *
 * If some data has one of the values of the schema:MerchantReturnEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnEnumeration = validateMerchantReturnEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnEnumeration` will have type `OaValidationError`
 *   const error = maybeMerchantReturnEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnEnumeration` will have type `MerchantReturnEnumeration`
 * const merchantReturnEnumeration = maybeMerchantReturnEnumeration;
 * ```
 */
function validateMerchantReturnEnumeration(maybeMerchantReturnEnumeration) {
    const { value, error } = exports.MerchantReturnEnumerationJoiSchema.validate(maybeMerchantReturnEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('MerchantReturnEnumeration', maybeMerchantReturnEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMerchantReturnEnumeration = validateMerchantReturnEnumeration;
