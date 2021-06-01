"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReturnFeesEnumeration = exports.ReturnFeesEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ReturnFeesEnumeration - Validation schema (w/ JOI)
 *
 * ReturnFeesEnumeration expresses policies for return fees.
 */
exports.ReturnFeesEnumerationJoiSchema = Joi.string().valid('https://schema.org/ReturnShippingFees', 'https://schema.org/OriginalShippingFees', 'https://schema.org/RestockingFees');
/**
 * Runtime validator for schema:ReturnFeesEnumeration.
 *
 * If some data has one of the values of the schema:ReturnFeesEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReturnFeesEnumeration = ReturnFeesEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReturnFeesEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeReturnFeesEnumeration` will have type `OaValidationError`
 *   const error = maybeReturnFeesEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReturnFeesEnumeration` will have type `ReturnFeesEnumeration`
 * const returnFeesEnumeration = maybeReturnFeesEnumeration;
 * ```
 */
function validateReturnFeesEnumeration(maybeReturnFeesEnumeration) {
    const { value, error } = exports.ReturnFeesEnumerationJoiSchema.validate(maybeReturnFeesEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('ReturnFeesEnumeration', maybeReturnFeesEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateReturnFeesEnumeration = validateReturnFeesEnumeration;
