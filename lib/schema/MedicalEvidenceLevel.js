"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalEvidenceLevel = exports.MedicalEvidenceLevelOrSubClassJoiSchema = exports.MedicalEvidenceLevelJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalEvidenceLevel - Validation schema (w/ JOI)
 */
exports.MedicalEvidenceLevelJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalEvidenceLevel').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalEvidenceLevel - Validation schema (w/ JOI)
 *
 * This differs from MedicalEvidenceLevelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalEvidenceLevelOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalEvidenceLevelJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalEvidenceLevel.
 *
 * If some data has a structure which matches a schema:MedicalEvidenceLevel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalEvidenceLevel = MedicalEvidenceLevel.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalEvidenceLevel instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalEvidenceLevel` will have type `OaValidationError`
 *   const error = maybeMedicalEvidenceLevel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalEvidenceLevel` will have type `MedicalEvidenceLevel`
 * const medicalEvidenceLevel = maybeMedicalEvidenceLevel;
 * ```
 */
function validateMedicalEvidenceLevel(maybeMedicalEvidenceLevel) {
    const { value, error } = exports.MedicalEvidenceLevelJoiSchema.validate(maybeMedicalEvidenceLevel);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalEvidenceLevel', maybeMedicalEvidenceLevel, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalEvidenceLevel = validateMedicalEvidenceLevel;
