"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWearableSizeGroupEnumeration = exports.WearableSizeGroupEnumerationOrSubClassJoiSchema = exports.WearableSizeGroupEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:WearableSizeGroupEnumeration - Validation schema (w/ JOI)
 */
exports.WearableSizeGroupEnumerationJoiSchema = Joi.object({
    '@type': Joi.string().valid('WearableSizeGroupEnumeration').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:WearableSizeGroupEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableSizeGroupEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.WearableSizeGroupEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.WearableSizeGroupEnumerationJoiSchema,
]);
/**
 * Runtime validator for schema:WearableSizeGroupEnumeration.
 *
 * If some data has a structure which matches a schema:WearableSizeGroupEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableSizeGroupEnumeration = validateWearableSizeGroupEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableSizeGroupEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableSizeGroupEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableSizeGroupEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableSizeGroupEnumeration` will have type `WearableSizeGroupEnumeration`
 * const wearableSizeGroupEnumeration = maybeWearableSizeGroupEnumeration;
 * ```
 */
function validateWearableSizeGroupEnumeration(maybeWearableSizeGroupEnumeration) {
    const { value, error } = exports.WearableSizeGroupEnumerationJoiSchema.validate(maybeWearableSizeGroupEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('WearableSizeGroupEnumeration', maybeWearableSizeGroupEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateWearableSizeGroupEnumeration = validateWearableSizeGroupEnumeration;
