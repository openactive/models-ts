"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSteeringPositionValue = exports.SteeringPositionValueOrSubClassJoiSchema = exports.SteeringPositionValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:SteeringPositionValue - Validation schema (w/ JOI)
 */
exports.SteeringPositionValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('SteeringPositionValue').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:SteeringPositionValue - Validation schema (w/ JOI)
 *
 * This differs from SteeringPositionValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SteeringPositionValueOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SteeringPositionValueJoiSchema,
]);
/**
 * Runtime validator for schema:SteeringPositionValue.
 *
 * If some data has a structure which matches a schema:SteeringPositionValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSteeringPositionValue = SteeringPositionValue.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSteeringPositionValue instanceof OaValidationError) {
 *   // From this point on, `maybeSteeringPositionValue` will have type `OaValidationError`
 *   const error = maybeSteeringPositionValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSteeringPositionValue` will have type `SteeringPositionValue`
 * const steeringPositionValue = maybeSteeringPositionValue;
 * ```
 */
function validateSteeringPositionValue(maybeSteeringPositionValue) {
    const { value, error } = exports.SteeringPositionValueJoiSchema.validate(maybeSteeringPositionValue);
    if (error) {
        return new oaValidationError_1.OaValidationError('SteeringPositionValue', maybeSteeringPositionValue, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSteeringPositionValue = validateSteeringPositionValue;
