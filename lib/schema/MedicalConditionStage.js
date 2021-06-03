"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalConditionStage = exports.MedicalConditionStageOrSubClassJoiSchema = exports.MedicalConditionStageJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalConditionStage - Validation schema (w/ JOI)
 */
exports.MedicalConditionStageJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalConditionStage').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    subStageSuffix: Joi.string(),
    stageAsNumber: Joi.number(),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * schema:MedicalConditionStage - Validation schema (w/ JOI)
 *
 * This differs from MedicalConditionStageJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalConditionStageOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalConditionStageJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalConditionStage.
 *
 * If some data has a structure which matches a schema:MedicalConditionStage, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalConditionStage = validateMedicalConditionStage(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalConditionStage instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalConditionStage` will have type `OaValidationError`
 *   const error = maybeMedicalConditionStage;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalConditionStage` will have type `MedicalConditionStage`
 * const medicalConditionStage = maybeMedicalConditionStage;
 * ```
 */
function validateMedicalConditionStage(maybeMedicalConditionStage) {
    const { value, error } = exports.MedicalConditionStageJoiSchema.validate(maybeMedicalConditionStage);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalConditionStage', maybeMedicalConditionStage, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalConditionStage = validateMedicalConditionStage;
