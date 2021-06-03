"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatusEnumeration = exports.StatusEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:StatusEnumeration - Validation schema (w/ JOI)
 *
 * Lists or enumerations dealing with status types.
 */
exports.StatusEnumerationJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:StatusEnumeration.
 *
 * If some data has one of the values of the schema:StatusEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStatusEnumeration = validateStatusEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStatusEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeStatusEnumeration` will have type `OaValidationError`
 *   const error = maybeStatusEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStatusEnumeration` will have type `StatusEnumeration`
 * const statusEnumeration = maybeStatusEnumeration;
 * ```
 */
function validateStatusEnumeration(maybeStatusEnumeration) {
    const { value, error } = exports.StatusEnumerationJoiSchema.validate(maybeStatusEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('StatusEnumeration', maybeStatusEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateStatusEnumeration = validateStatusEnumeration;
