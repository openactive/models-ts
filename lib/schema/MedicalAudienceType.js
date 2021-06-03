"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalAudienceType = exports.MedicalAudienceTypeOrSubClassJoiSchema = exports.MedicalAudienceTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalAudienceType - Validation schema (w/ JOI)
 */
exports.MedicalAudienceTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalAudienceType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalAudienceType - Validation schema (w/ JOI)
 *
 * This differs from MedicalAudienceTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalAudienceTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalAudienceTypeJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalAudienceType.
 *
 * If some data has a structure which matches a schema:MedicalAudienceType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalAudienceType = validateMedicalAudienceType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalAudienceType instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalAudienceType` will have type `OaValidationError`
 *   const error = maybeMedicalAudienceType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalAudienceType` will have type `MedicalAudienceType`
 * const medicalAudienceType = maybeMedicalAudienceType;
 * ```
 */
function validateMedicalAudienceType(maybeMedicalAudienceType) {
    const { value, error } = exports.MedicalAudienceTypeJoiSchema.validate(maybeMedicalAudienceType);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalAudienceType', maybeMedicalAudienceType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalAudienceType = validateMedicalAudienceType;
