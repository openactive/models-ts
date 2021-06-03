"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalDevicePurpose = exports.MedicalDevicePurposeOrSubClassJoiSchema = exports.MedicalDevicePurposeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 */
exports.MedicalDevicePurposeJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalDevicePurpose').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 *
 * This differs from MedicalDevicePurposeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalDevicePurposeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalDevicePurposeJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalDevicePurpose.
 *
 * If some data has a structure which matches a schema:MedicalDevicePurpose, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalDevicePurpose = validateMedicalDevicePurpose(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalDevicePurpose instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalDevicePurpose` will have type `OaValidationError`
 *   const error = maybeMedicalDevicePurpose;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalDevicePurpose` will have type `MedicalDevicePurpose`
 * const medicalDevicePurpose = maybeMedicalDevicePurpose;
 * ```
 */
function validateMedicalDevicePurpose(maybeMedicalDevicePurpose) {
    const { value, error } = exports.MedicalDevicePurposeJoiSchema.validate(maybeMedicalDevicePurpose);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalDevicePurpose', maybeMedicalDevicePurpose, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalDevicePurpose = validateMedicalDevicePurpose;
