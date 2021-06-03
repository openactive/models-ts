"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnatomicalSystem = exports.AnatomicalSystemOrSubClassJoiSchema = exports.AnatomicalSystemJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:AnatomicalSystem - Validation schema (w/ JOI)
 */
exports.AnatomicalSystemJoiSchema = Joi.object({
    '@type': Joi.string().valid('AnatomicalSystem').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    associatedPathophysiology: Joi.string(),
    relatedTherapy: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    relatedCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
    relatedStructure: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.string().uri()),
    comprisedOf: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:AnatomicalSystem - Validation schema (w/ JOI)
 *
 * This differs from AnatomicalSystemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.AnatomicalSystemOrSubClassJoiSchema = Joi.alternatives().try([
    exports.AnatomicalSystemJoiSchema,
]);
/**
 * Runtime validator for schema:AnatomicalSystem.
 *
 * If some data has a structure which matches a schema:AnatomicalSystem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAnatomicalSystem = validateAnatomicalSystem(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAnatomicalSystem instanceof OaValidationError) {
 *   // From this point on, `maybeAnatomicalSystem` will have type `OaValidationError`
 *   const error = maybeAnatomicalSystem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAnatomicalSystem` will have type `AnatomicalSystem`
 * const anatomicalSystem = maybeAnatomicalSystem;
 * ```
 */
function validateAnatomicalSystem(maybeAnatomicalSystem) {
    const { value, error } = exports.AnatomicalSystemJoiSchema.validate(maybeAnatomicalSystem);
    if (error) {
        return new oaValidationError_1.OaValidationError('AnatomicalSystem', maybeAnatomicalSystem, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAnatomicalSystem = validateAnatomicalSystem;
