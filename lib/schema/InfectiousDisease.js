"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInfectiousDisease = exports.InfectiousDiseaseOrSubClassJoiSchema = exports.InfectiousDiseaseJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:InfectiousDisease - Validation schema (w/ JOI)
 */
exports.InfectiousDiseaseJoiSchema = Joi.object({
    '@type': Joi.string().valid('InfectiousDisease').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    infectiousAgent: Joi.string(),
    infectiousAgentClass: Joi.alternatives().try(Joi.lazy(() => schema.InfectiousAgentClassOrSubClassJoiSchema), Joi.string().uri()),
    transmissionMethod: Joi.string(),
    associatedAnatomy: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.lazy(() => schema.SuperficialAnatomyOrSubClassJoiSchema), Joi.string().uri()),
    cause: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCauseOrSubClassJoiSchema), Joi.string().uri()),
    differentialDiagnosis: Joi.alternatives().try(Joi.lazy(() => schema.DDxElementOrSubClassJoiSchema), Joi.string().uri()),
    drug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    epidemiology: Joi.string(),
    expectedPrognosis: Joi.string(),
    naturalProgression: Joi.string(),
    pathophysiology: Joi.string(),
    possibleComplication: Joi.string(),
    possibleTreatment: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.lazy(() => schema.LifestyleModificationOrSubClassJoiSchema), Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    primaryPrevention: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    riskFactor: Joi.alternatives().try(Joi.lazy(() => schema.MedicalRiskFactorOrSubClassJoiSchema), Joi.string().uri()),
    secondaryPrevention: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.lazy(() => schema.LifestyleModificationOrSubClassJoiSchema), Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    signOrSymptom: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSignOrSymptomOrSubClassJoiSchema), Joi.string().uri()),
    stage: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionStageOrSubClassJoiSchema), Joi.string().uri()),
    status: Joi.alternatives().try(Joi.lazy(() => schema.EventStatusTypeJoiSchema), Joi.lazy(() => schema.MedicalStudyStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    typicalTest: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTestOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
    funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.string().uri()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:InfectiousDisease - Validation schema (w/ JOI)
 *
 * This differs from InfectiousDiseaseJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InfectiousDiseaseOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InfectiousDiseaseJoiSchema,
]);
/**
 * Runtime validator for schema:InfectiousDisease.
 *
 * If some data has a structure which matches a schema:InfectiousDisease, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInfectiousDisease = validateInfectiousDisease(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInfectiousDisease instanceof OaValidationError) {
 *   // From this point on, `maybeInfectiousDisease` will have type `OaValidationError`
 *   const error = maybeInfectiousDisease;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInfectiousDisease` will have type `InfectiousDisease`
 * const infectiousDisease = maybeInfectiousDisease;
 * ```
 */
function validateInfectiousDisease(maybeInfectiousDisease) {
    const { value, error } = exports.InfectiousDiseaseJoiSchema.validate(maybeInfectiousDisease);
    if (error) {
        return new oaValidationError_1.OaValidationError('InfectiousDisease', maybeInfectiousDisease, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInfectiousDisease = validateInfectiousDisease;
