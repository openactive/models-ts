"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalEntity = exports.MedicalEntityOrSubClassJoiSchema = exports.MedicalEntityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalEntity - Validation schema (w/ JOI)
 */
exports.MedicalEntityJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalEntity').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:MedicalEntity - Validation schema (w/ JOI)
 *
 * This differs from MedicalEntityJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalEntityOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalEntityJoiSchema,
    Joi.lazy(() => schema.MedicalContraindicationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalIntangibleOrSubClassJoiSchema),
    Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalIndicationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalRiskFactorOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalCauseOrSubClassJoiSchema),
    Joi.lazy(() => schema.SubstanceOrSubClassJoiSchema),
    Joi.lazy(() => schema.SuperficialAnatomyOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalRiskEstimatorOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema),
    Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema),
    Joi.lazy(() => schema.DrugCostOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalTestOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema),
    Joi.lazy(() => schema.LifestyleModificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalDeviceOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalEntity.
 *
 * If some data has a structure which matches a schema:MedicalEntity, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalEntity = validateMedicalEntity(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalEntity instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalEntity` will have type `OaValidationError`
 *   const error = maybeMedicalEntity;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalEntity` will have type `MedicalEntity`
 * const medicalEntity = maybeMedicalEntity;
 * ```
 */
function validateMedicalEntity(maybeMedicalEntity) {
    const { value, error } = exports.MedicalEntityJoiSchema.validate(maybeMedicalEntity);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalEntity', maybeMedicalEntity, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalEntity = validateMedicalEntity;
