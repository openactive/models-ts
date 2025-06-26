"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalProcedure = exports.MedicalProcedureOrSubClassJoiSchema = exports.MedicalProcedureJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalProcedure - Validation schema (w/ JOI)
 */
exports.MedicalProcedureJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalProcedure').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    procedureType: Joi.alternatives().try(Joi.lazy(() => schema.MedicalProcedureTypeOrSubClassJoiSchema), Joi.string().uri()),
    howPerformed: Joi.string(),
    preparation: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    status: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MedicalStudyStatusOrSubClassJoiSchema), Joi.lazy(() => schema.EventStatusTypeJoiSchema), Joi.string().uri()),
    bodyLocation: Joi.string(),
    followup: Joi.string(),
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
 * schema:MedicalProcedure - Validation schema (w/ JOI)
 *
 * This differs from MedicalProcedureJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalProcedureOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalProcedureJoiSchema,
    Joi.lazy(() => schema.TherapeuticProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.PalliativeProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.SurgicalProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.DiagnosticProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.PhysicalExamOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalProcedure.
 *
 * If some data has a structure which matches a schema:MedicalProcedure, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalProcedure = validateMedicalProcedure(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalProcedure instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalProcedure` will have type `OaValidationError`
 *   const error = maybeMedicalProcedure;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalProcedure` will have type `MedicalProcedure`
 * const medicalProcedure = maybeMedicalProcedure;
 * ```
 */
function validateMedicalProcedure(maybeMedicalProcedure) {
    const { value, error } = exports.MedicalProcedureJoiSchema.validate(maybeMedicalProcedure);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalProcedure', maybeMedicalProcedure, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalProcedure = validateMedicalProcedure;
