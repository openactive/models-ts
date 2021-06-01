"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInteger = exports.IntegerOrSubClassJoiSchema = exports.IntegerJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:Integer - Validation schema (w/ JOI)
 */
exports.IntegerJoiSchema = Joi.object({
    '@type': Joi.string().valid('Integer').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:Integer - Validation schema (w/ JOI)
 *
 * This differs from IntegerJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.IntegerOrSubClassJoiSchema = Joi.alternatives().try([
    exports.IntegerJoiSchema,
]);
/**
 * Runtime validator for schema:Integer.
 *
 * If some data has a structure which matches a schema:Integer, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInteger = Integer.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInteger instanceof OaValidationError) {
 *   // From this point on, `maybeInteger` will have type `OaValidationError`
 *   const error = maybeInteger;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInteger` will have type `Integer`
 * const integer = maybeInteger;
 * ```
 */
function validateInteger(maybeInteger) {
    const { value, error } = exports.IntegerJoiSchema.validate(maybeInteger);
    if (error) {
        return new oaValidationError_1.OaValidationError('Integer', maybeInteger, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInteger = validateInteger;
