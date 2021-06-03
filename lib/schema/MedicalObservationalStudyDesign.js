"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalObservationalStudyDesign = exports.MedicalObservationalStudyDesignOrSubClassJoiSchema = exports.MedicalObservationalStudyDesignJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 */
exports.MedicalObservationalStudyDesignJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalObservationalStudyDesign').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 *
 * This differs from MedicalObservationalStudyDesignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalObservationalStudyDesignOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalObservationalStudyDesignJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalObservationalStudyDesign.
 *
 * If some data has a structure which matches a schema:MedicalObservationalStudyDesign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalObservationalStudyDesign = validateMedicalObservationalStudyDesign(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalObservationalStudyDesign instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalObservationalStudyDesign` will have type `OaValidationError`
 *   const error = maybeMedicalObservationalStudyDesign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalObservationalStudyDesign` will have type `MedicalObservationalStudyDesign`
 * const medicalObservationalStudyDesign = maybeMedicalObservationalStudyDesign;
 * ```
 */
function validateMedicalObservationalStudyDesign(maybeMedicalObservationalStudyDesign) {
    const { value, error } = exports.MedicalObservationalStudyDesignJoiSchema.validate(maybeMedicalObservationalStudyDesign);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalObservationalStudyDesign', maybeMedicalObservationalStudyDesign, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalObservationalStudyDesign = validateMedicalObservationalStudyDesign;
