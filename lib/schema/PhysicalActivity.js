"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhysicalActivity = exports.PhysicalActivityOrSubClassJoiSchema = exports.PhysicalActivityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PhysicalActivity - Validation schema (w/ JOI)
 */
exports.PhysicalActivityJoiSchema = Joi.object({
    '@type': Joi.string().valid('PhysicalActivity').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    epidemiology: Joi.string(),
    associatedAnatomy: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.lazy(() => schema.SuperficialAnatomyOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
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
 * schema:PhysicalActivity - Validation schema (w/ JOI)
 *
 * This differs from PhysicalActivityJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PhysicalActivityOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PhysicalActivityJoiSchema,
    Joi.lazy(() => schema.ExercisePlanOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:PhysicalActivity.
 *
 * If some data has a structure which matches a schema:PhysicalActivity, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePhysicalActivity = validatePhysicalActivity(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePhysicalActivity instanceof OaValidationError) {
 *   // From this point on, `maybePhysicalActivity` will have type `OaValidationError`
 *   const error = maybePhysicalActivity;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePhysicalActivity` will have type `PhysicalActivity`
 * const physicalActivity = maybePhysicalActivity;
 * ```
 */
function validatePhysicalActivity(maybePhysicalActivity) {
    const { value, error } = exports.PhysicalActivityJoiSchema.validate(maybePhysicalActivity);
    if (error) {
        return new oaValidationError_1.OaValidationError('PhysicalActivity', maybePhysicalActivity, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePhysicalActivity = validatePhysicalActivity;
