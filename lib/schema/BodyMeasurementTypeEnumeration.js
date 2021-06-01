"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBodyMeasurementTypeEnumeration = exports.BodyMeasurementTypeEnumerationOrSubClassJoiSchema = exports.BodyMeasurementTypeEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:BodyMeasurementTypeEnumeration - Validation schema (w/ JOI)
 */
exports.BodyMeasurementTypeEnumerationJoiSchema = Joi.object({
    '@type': Joi.string().valid('BodyMeasurementTypeEnumeration').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:BodyMeasurementTypeEnumeration - Validation schema (w/ JOI)
 *
 * This differs from BodyMeasurementTypeEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BodyMeasurementTypeEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BodyMeasurementTypeEnumerationJoiSchema,
]);
/**
 * Runtime validator for schema:BodyMeasurementTypeEnumeration.
 *
 * If some data has a structure which matches a schema:BodyMeasurementTypeEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBodyMeasurementTypeEnumeration = BodyMeasurementTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBodyMeasurementTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeBodyMeasurementTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeBodyMeasurementTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBodyMeasurementTypeEnumeration` will have type `BodyMeasurementTypeEnumeration`
 * const bodyMeasurementTypeEnumeration = maybeBodyMeasurementTypeEnumeration;
 * ```
 */
function validateBodyMeasurementTypeEnumeration(maybeBodyMeasurementTypeEnumeration) {
    const { value, error } = exports.BodyMeasurementTypeEnumerationJoiSchema.validate(maybeBodyMeasurementTypeEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('BodyMeasurementTypeEnumeration', maybeBodyMeasurementTypeEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBodyMeasurementTypeEnumeration = validateBodyMeasurementTypeEnumeration;
