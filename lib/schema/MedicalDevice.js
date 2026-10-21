"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalDevice = exports.MedicalDeviceOrSubClassJoiSchema = exports.MedicalDeviceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalDevice - Validation schema (w/ JOI)
 */
exports.MedicalDeviceJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalDevice').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    postOp: Joi.string(),
    preOp: Joi.string(),
    seriousAdverseOutcome: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
    procedure: Joi.string(),
    adverseOutcome: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
    contraindication: Joi.alternatives().try(Joi.lazy(() => schema.MedicalContraindicationOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * schema:MedicalDevice - Validation schema (w/ JOI)
 *
 * This differs from MedicalDeviceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalDeviceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalDeviceJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalDevice.
 *
 * If some data has a structure which matches a schema:MedicalDevice, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalDevice = validateMedicalDevice(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalDevice instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalDevice` will have type `OaValidationError`
 *   const error = maybeMedicalDevice;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalDevice` will have type `MedicalDevice`
 * const medicalDevice = maybeMedicalDevice;
 * ```
 */
function validateMedicalDevice(maybeMedicalDevice) {
    const { value, error } = exports.MedicalDeviceJoiSchema.validate(maybeMedicalDevice);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalDevice', maybeMedicalDevice, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalDevice = validateMedicalDevice;
