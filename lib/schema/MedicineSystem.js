"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicineSystem = exports.MedicineSystemOrSubClassJoiSchema = exports.MedicineSystemJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MedicineSystem - Validation schema (w/ JOI)
 */
exports.MedicineSystemJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicineSystem').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:MedicineSystem - Validation schema (w/ JOI)
 *
 * This differs from MedicineSystemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicineSystemOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicineSystemJoiSchema,
]);
/**
 * Runtime validator for schema:MedicineSystem.
 *
 * If some data has a structure which matches a schema:MedicineSystem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicineSystem = validateMedicineSystem(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicineSystem instanceof OaValidationError) {
 *   // From this point on, `maybeMedicineSystem` will have type `OaValidationError`
 *   const error = maybeMedicineSystem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicineSystem` will have type `MedicineSystem`
 * const medicineSystem = maybeMedicineSystem;
 * ```
 */
function validateMedicineSystem(maybeMedicineSystem) {
    const { value, error } = exports.MedicineSystemJoiSchema.validate(maybeMedicineSystem);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicineSystem', maybeMedicineSystem, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicineSystem = validateMedicineSystem;
