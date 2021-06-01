"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalSpecialty = exports.MedicalSpecialtyOrSubClassJoiSchema = exports.MedicalSpecialtyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalSpecialty - Validation schema (w/ JOI)
 */
exports.MedicalSpecialtyJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalSpecialty').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalSpecialty - Validation schema (w/ JOI)
 *
 * This differs from MedicalSpecialtyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalSpecialtyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalSpecialtyJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalSpecialty.
 *
 * If some data has a structure which matches a schema:MedicalSpecialty, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalSpecialty = MedicalSpecialty.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalSpecialty instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalSpecialty` will have type `OaValidationError`
 *   const error = maybeMedicalSpecialty;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalSpecialty` will have type `MedicalSpecialty`
 * const medicalSpecialty = maybeMedicalSpecialty;
 * ```
 */
function validateMedicalSpecialty(maybeMedicalSpecialty) {
    const { value, error } = exports.MedicalSpecialtyJoiSchema.validate(maybeMedicalSpecialty);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalSpecialty', maybeMedicalSpecialty, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalSpecialty = validateMedicalSpecialty;
