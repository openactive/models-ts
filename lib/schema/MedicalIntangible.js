"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalIntangible = exports.MedicalIntangibleOrSubClassJoiSchema = exports.MedicalIntangibleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalIntangible - Validation schema (w/ JOI)
 */
exports.MedicalIntangibleJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalIntangible').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
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
 * schema:MedicalIntangible - Validation schema (w/ JOI)
 *
 * This differs from MedicalIntangibleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalIntangibleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalIntangibleJoiSchema,
    Joi.lazy(() => schema.DDxElementOrSubClassJoiSchema),
    Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema),
    Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema),
    Joi.lazy(() => schema.DrugStrengthOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalConditionStageOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalIntangible.
 *
 * If some data has a structure which matches a schema:MedicalIntangible, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalIntangible = validateMedicalIntangible(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalIntangible instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalIntangible` will have type `OaValidationError`
 *   const error = maybeMedicalIntangible;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalIntangible` will have type `MedicalIntangible`
 * const medicalIntangible = maybeMedicalIntangible;
 * ```
 */
function validateMedicalIntangible(maybeMedicalIntangible) {
    const { value, error } = exports.MedicalIntangibleJoiSchema.validate(maybeMedicalIntangible);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalIntangible', maybeMedicalIntangible, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalIntangible = validateMedicalIntangible;
