"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVitalSign = exports.VitalSignOrSubClassJoiSchema = exports.VitalSignJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:VitalSign - Validation schema (w/ JOI)
 */
exports.VitalSignJoiSchema = Joi.object({
    '@type': Joi.string().valid('VitalSign').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    identifyingExam: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalExamOrSubClassJoiSchema), Joi.string().uri()),
    identifyingTest: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTestOrSubClassJoiSchema), Joi.string().uri()),
    possibleTreatment: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    differentialDiagnosis: Joi.alternatives().try(Joi.lazy(() => schema.DDxElementOrSubClassJoiSchema), Joi.string().uri()),
    epidemiology: Joi.string(),
    associatedAnatomy: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.lazy(() => schema.SuperficialAnatomyOrSubClassJoiSchema), Joi.string().uri()),
    naturalProgression: Joi.string(),
    secondaryPrevention: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    status: Joi.alternatives().try(Joi.lazy(() => schema.EventStatusTypeJoiSchema), Joi.string(), Joi.lazy(() => schema.MedicalStudyStatusOrSubClassJoiSchema), Joi.string().uri()),
    possibleComplication: Joi.string(),
    primaryPrevention: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    drug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    signOrSymptom: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSignOrSymptomOrSubClassJoiSchema), Joi.string().uri()),
    expectedPrognosis: Joi.string(),
    riskFactor: Joi.alternatives().try(Joi.lazy(() => schema.MedicalRiskFactorOrSubClassJoiSchema), Joi.string().uri()),
    stage: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionStageOrSubClassJoiSchema), Joi.string().uri()),
    typicalTest: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTestOrSubClassJoiSchema), Joi.string().uri()),
    pathophysiology: Joi.string(),
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
 * schema:VitalSign - Validation schema (w/ JOI)
 *
 * This differs from VitalSignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.VitalSignOrSubClassJoiSchema = Joi.alternatives().try([
    exports.VitalSignJoiSchema,
]);
/**
 * Runtime validator for schema:VitalSign.
 *
 * If some data has a structure which matches a schema:VitalSign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeVitalSign = VitalSign.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeVitalSign instanceof OaValidationError) {
 *   // From this point on, `maybeVitalSign` will have type `OaValidationError`
 *   const error = maybeVitalSign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeVitalSign` will have type `VitalSign`
 * const vitalSign = maybeVitalSign;
 * ```
 */
function validateVitalSign(maybeVitalSign) {
    const { value, error } = exports.VitalSignJoiSchema.validate(maybeVitalSign);
    if (error) {
        return new oaValidationError_1.OaValidationError('VitalSign', maybeVitalSign, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateVitalSign = validateVitalSign;
