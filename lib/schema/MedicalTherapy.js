"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalTherapy = exports.MedicalTherapyOrSubClassJoiSchema = exports.MedicalTherapyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalTherapy - Validation schema (w/ JOI)
 */
exports.MedicalTherapyJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalTherapy').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    seriousAdverseOutcome: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
    contraindication: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MedicalContraindicationOrSubClassJoiSchema), Joi.string().uri()),
    duplicateTherapy: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
    drug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    adverseOutcome: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
    doseSchedule: Joi.alternatives().try(Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
    preparation: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    followup: Joi.string(),
    howPerformed: Joi.string(),
    status: Joi.alternatives().try(Joi.lazy(() => schema.EventStatusTypeJoiSchema), Joi.string(), Joi.lazy(() => schema.MedicalStudyStatusOrSubClassJoiSchema), Joi.string().uri()),
    procedureType: Joi.alternatives().try(Joi.lazy(() => schema.MedicalProcedureTypeOrSubClassJoiSchema), Joi.string().uri()),
    bodyLocation: Joi.string(),
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
 * schema:MedicalTherapy - Validation schema (w/ JOI)
 *
 * This differs from MedicalTherapyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalTherapyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalTherapyJoiSchema,
    Joi.lazy(() => schema.OccupationalTherapyOrSubClassJoiSchema),
    Joi.lazy(() => schema.PalliativeProcedureOrSubClassJoiSchema),
    Joi.lazy(() => schema.PhysicalTherapyOrSubClassJoiSchema),
    Joi.lazy(() => schema.RadiationTherapyOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalTherapy.
 *
 * If some data has a structure which matches a schema:MedicalTherapy, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalTherapy = MedicalTherapy.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalTherapy instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalTherapy` will have type `OaValidationError`
 *   const error = maybeMedicalTherapy;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalTherapy` will have type `MedicalTherapy`
 * const medicalTherapy = maybeMedicalTherapy;
 * ```
 */
function validateMedicalTherapy(maybeMedicalTherapy) {
    const { value, error } = exports.MedicalTherapyJoiSchema.validate(maybeMedicalTherapy);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalTherapy', maybeMedicalTherapy, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalTherapy = validateMedicalTherapy;
