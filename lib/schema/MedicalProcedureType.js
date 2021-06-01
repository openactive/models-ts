"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalProcedureType = exports.MedicalProcedureTypeOrSubClassJoiSchema = exports.MedicalProcedureTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 */
exports.MedicalProcedureTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalProcedureType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 *
 * This differs from MedicalProcedureTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalProcedureTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalProcedureTypeJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalProcedureType.
 *
 * If some data has a structure which matches a schema:MedicalProcedureType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalProcedureType = MedicalProcedureType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalProcedureType instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalProcedureType` will have type `OaValidationError`
 *   const error = maybeMedicalProcedureType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalProcedureType` will have type `MedicalProcedureType`
 * const medicalProcedureType = maybeMedicalProcedureType;
 * ```
 */
function validateMedicalProcedureType(maybeMedicalProcedureType) {
    const { value, error } = exports.MedicalProcedureTypeJoiSchema.validate(maybeMedicalProcedureType);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalProcedureType', maybeMedicalProcedureType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalProcedureType = validateMedicalProcedureType;
