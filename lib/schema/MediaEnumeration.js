"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMediaEnumeration = exports.MediaEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MediaEnumeration - Validation schema (w/ JOI)
 *
 * MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflections of externally developed lists, or created at schema.org, or a combination.
 */
exports.MediaEnumerationJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:MediaEnumeration.
 *
 * If some data has one of the values of the schema:MediaEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMediaEnumeration = validateMediaEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMediaEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMediaEnumeration` will have type `OaValidationError`
 *   const error = maybeMediaEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMediaEnumeration` will have type `MediaEnumeration`
 * const mediaEnumeration = maybeMediaEnumeration;
 * ```
 */
function validateMediaEnumeration(maybeMediaEnumeration) {
    const { value, error } = exports.MediaEnumerationJoiSchema.validate(maybeMediaEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('MediaEnumeration', maybeMediaEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMediaEnumeration = validateMediaEnumeration;
