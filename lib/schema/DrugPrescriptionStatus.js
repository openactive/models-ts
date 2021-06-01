"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDrugPrescriptionStatus = exports.DrugPrescriptionStatusOrSubClassJoiSchema = exports.DrugPrescriptionStatusJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:DrugPrescriptionStatus - Validation schema (w/ JOI)
 */
exports.DrugPrescriptionStatusJoiSchema = Joi.object({
    '@type': Joi.string().valid('DrugPrescriptionStatus').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:DrugPrescriptionStatus - Validation schema (w/ JOI)
 *
 * This differs from DrugPrescriptionStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DrugPrescriptionStatusOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DrugPrescriptionStatusJoiSchema,
]);
/**
 * Runtime validator for schema:DrugPrescriptionStatus.
 *
 * If some data has a structure which matches a schema:DrugPrescriptionStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrugPrescriptionStatus = DrugPrescriptionStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrugPrescriptionStatus instanceof OaValidationError) {
 *   // From this point on, `maybeDrugPrescriptionStatus` will have type `OaValidationError`
 *   const error = maybeDrugPrescriptionStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrugPrescriptionStatus` will have type `DrugPrescriptionStatus`
 * const drugPrescriptionStatus = maybeDrugPrescriptionStatus;
 * ```
 */
function validateDrugPrescriptionStatus(maybeDrugPrescriptionStatus) {
    const { value, error } = exports.DrugPrescriptionStatusJoiSchema.validate(maybeDrugPrescriptionStatus);
    if (error) {
        return new oaValidationError_1.OaValidationError('DrugPrescriptionStatus', maybeDrugPrescriptionStatus, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDrugPrescriptionStatus = validateDrugPrescriptionStatus;
