"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductReturnEnumeration = exports.ProductReturnEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ProductReturnEnumeration - Validation schema (w/ JOI)
 *
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 */
exports.ProductReturnEnumerationJoiSchema = Joi.string().valid('https://schema.org/ProductReturnFiniteReturnWindow', 'https://schema.org/ProductReturnNotPermitted', 'https://schema.org/ProductReturnUnlimitedWindow', 'https://schema.org/ProductReturnUnspecified');
/**
 * Runtime validator for schema:ProductReturnEnumeration.
 *
 * If some data has one of the values of the schema:ProductReturnEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProductReturnEnumeration = validateProductReturnEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProductReturnEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeProductReturnEnumeration` will have type `OaValidationError`
 *   const error = maybeProductReturnEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProductReturnEnumeration` will have type `ProductReturnEnumeration`
 * const productReturnEnumeration = maybeProductReturnEnumeration;
 * ```
 */
function validateProductReturnEnumeration(maybeProductReturnEnumeration) {
    const { value, error } = exports.ProductReturnEnumerationJoiSchema.validate(maybeProductReturnEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('ProductReturnEnumeration', maybeProductReturnEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateProductReturnEnumeration = validateProductReturnEnumeration;
