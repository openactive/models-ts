"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIPTCDigitalSourceEnumeration = exports.IPTCDigitalSourceEnumerationOrSubClassJoiSchema = exports.IPTCDigitalSourceEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:IPTCDigitalSourceEnumeration - Validation schema (w/ JOI)
 */
exports.IPTCDigitalSourceEnumerationJoiSchema = Joi.object({
    '@type': Joi.string().valid('IPTCDigitalSourceEnumeration').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:IPTCDigitalSourceEnumeration - Validation schema (w/ JOI)
 *
 * This differs from IPTCDigitalSourceEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.IPTCDigitalSourceEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.IPTCDigitalSourceEnumerationJoiSchema,
]);
/**
 * Runtime validator for schema:IPTCDigitalSourceEnumeration.
 *
 * If some data has a structure which matches a schema:IPTCDigitalSourceEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIPTCDigitalSourceEnumeration = validateIPTCDigitalSourceEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIPTCDigitalSourceEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeIPTCDigitalSourceEnumeration` will have type `OaValidationError`
 *   const error = maybeIPTCDigitalSourceEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIPTCDigitalSourceEnumeration` will have type `IPTCDigitalSourceEnumeration`
 * const iPTCDigitalSourceEnumeration = maybeIPTCDigitalSourceEnumeration;
 * ```
 */
function validateIPTCDigitalSourceEnumeration(maybeIPTCDigitalSourceEnumeration) {
    const { value, error } = exports.IPTCDigitalSourceEnumerationJoiSchema.validate(maybeIPTCDigitalSourceEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('IPTCDigitalSourceEnumeration', maybeIPTCDigitalSourceEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateIPTCDigitalSourceEnumeration = validateIPTCDigitalSourceEnumeration;
