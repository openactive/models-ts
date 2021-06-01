"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFloat = exports.FloatOrSubClassJoiSchema = exports.FloatJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:Float - Validation schema (w/ JOI)
 */
exports.FloatJoiSchema = Joi.object({
    '@type': Joi.string().valid('Float').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:Float - Validation schema (w/ JOI)
 *
 * This differs from FloatJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.FloatOrSubClassJoiSchema = Joi.alternatives().try([
    exports.FloatJoiSchema,
]);
/**
 * Runtime validator for schema:Float.
 *
 * If some data has a structure which matches a schema:Float, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFloat = Float.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFloat instanceof OaValidationError) {
 *   // From this point on, `maybeFloat` will have type `OaValidationError`
 *   const error = maybeFloat;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFloat` will have type `Float`
 * const float = maybeFloat;
 * ```
 */
function validateFloat(maybeFloat) {
    const { value, error } = exports.FloatJoiSchema.validate(maybeFloat);
    if (error) {
        return new oaValidationError_1.OaValidationError('Float', maybeFloat, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateFloat = validateFloat;
