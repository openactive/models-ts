"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalTestPanel = exports.MedicalTestPanelOrSubClassJoiSchema = exports.MedicalTestPanelJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalTestPanel - Validation schema (w/ JOI)
 */
exports.MedicalTestPanelJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalTestPanel').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    subTest: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTestOrSubClassJoiSchema), Joi.string().uri()),
    usesDevice: Joi.alternatives().try(Joi.lazy(() => schema.MedicalDeviceOrSubClassJoiSchema), Joi.string().uri()),
    normalRange: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MedicalEnumerationJoiSchema)),
    affectedBy: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    signDetected: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSignOrSubClassJoiSchema), Joi.string().uri()),
    usedToDiagnose: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:MedicalTestPanel - Validation schema (w/ JOI)
 *
 * This differs from MedicalTestPanelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalTestPanelOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalTestPanelJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalTestPanel.
 *
 * If some data has a structure which matches a schema:MedicalTestPanel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalTestPanel = validateMedicalTestPanel(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalTestPanel instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalTestPanel` will have type `OaValidationError`
 *   const error = maybeMedicalTestPanel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalTestPanel` will have type `MedicalTestPanel`
 * const medicalTestPanel = maybeMedicalTestPanel;
 * ```
 */
function validateMedicalTestPanel(maybeMedicalTestPanel) {
    const { value, error } = exports.MedicalTestPanelJoiSchema.validate(maybeMedicalTestPanel);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalTestPanel', maybeMedicalTestPanel, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalTestPanel = validateMedicalTestPanel;
