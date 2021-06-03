"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateURL = exports.URLOrSubClassJoiSchema = exports.URLJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:URL - Validation schema (w/ JOI)
 */
exports.URLJoiSchema = Joi.object({
    '@type': Joi.string().valid('URL').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:URL - Validation schema (w/ JOI)
 *
 * This differs from URLJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.URLOrSubClassJoiSchema = Joi.alternatives().try([
    exports.URLJoiSchema,
]);
/**
 * Runtime validator for schema:URL.
 *
 * If some data has a structure which matches a schema:URL, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeURL = validateURL(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeURL instanceof OaValidationError) {
 *   // From this point on, `maybeURL` will have type `OaValidationError`
 *   const error = maybeURL;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeURL` will have type `URL`
 * const uRL = maybeURL;
 * ```
 */
function validateURL(maybeURL) {
    const { value, error } = exports.URLJoiSchema.validate(maybeURL);
    if (error) {
        return new oaValidationError_1.OaValidationError('URL', maybeURL, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateURL = validateURL;
