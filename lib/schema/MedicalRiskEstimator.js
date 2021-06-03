"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalRiskEstimator = exports.MedicalRiskEstimatorOrSubClassJoiSchema = exports.MedicalRiskEstimatorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalRiskEstimator - Validation schema (w/ JOI)
 */
exports.MedicalRiskEstimatorJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalRiskEstimator').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    includedRiskFactor: Joi.alternatives().try(Joi.lazy(() => schema.MedicalRiskFactorOrSubClassJoiSchema), Joi.string().uri()),
    estimatesRiskOf: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:MedicalRiskEstimator - Validation schema (w/ JOI)
 *
 * This differs from MedicalRiskEstimatorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalRiskEstimatorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalRiskEstimatorJoiSchema,
    Joi.lazy(() => schema.MedicalRiskCalculatorOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalRiskScoreOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalRiskEstimator.
 *
 * If some data has a structure which matches a schema:MedicalRiskEstimator, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalRiskEstimator = validateMedicalRiskEstimator(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalRiskEstimator instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalRiskEstimator` will have type `OaValidationError`
 *   const error = maybeMedicalRiskEstimator;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalRiskEstimator` will have type `MedicalRiskEstimator`
 * const medicalRiskEstimator = maybeMedicalRiskEstimator;
 * ```
 */
function validateMedicalRiskEstimator(maybeMedicalRiskEstimator) {
    const { value, error } = exports.MedicalRiskEstimatorJoiSchema.validate(maybeMedicalRiskEstimator);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalRiskEstimator', maybeMedicalRiskEstimator, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalRiskEstimator = validateMedicalRiskEstimator;
