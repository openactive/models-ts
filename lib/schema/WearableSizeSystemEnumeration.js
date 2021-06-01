"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWearableSizeSystemEnumeration = exports.WearableSizeSystemEnumerationOrSubClassJoiSchema = exports.WearableSizeSystemEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 */
exports.WearableSizeSystemEnumerationJoiSchema = Joi.object({
    '@type': Joi.string().valid('WearableSizeSystemEnumeration').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableSizeSystemEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.WearableSizeSystemEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.WearableSizeSystemEnumerationJoiSchema,
]);
/**
 * Runtime validator for schema:WearableSizeSystemEnumeration.
 *
 * If some data has a structure which matches a schema:WearableSizeSystemEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableSizeSystemEnumeration = WearableSizeSystemEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableSizeSystemEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableSizeSystemEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableSizeSystemEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableSizeSystemEnumeration` will have type `WearableSizeSystemEnumeration`
 * const wearableSizeSystemEnumeration = maybeWearableSizeSystemEnumeration;
 * ```
 */
function validateWearableSizeSystemEnumeration(maybeWearableSizeSystemEnumeration) {
    const { value, error } = exports.WearableSizeSystemEnumerationJoiSchema.validate(maybeWearableSizeSystemEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('WearableSizeSystemEnumeration', maybeWearableSizeSystemEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateWearableSizeSystemEnumeration = validateWearableSizeSystemEnumeration;
