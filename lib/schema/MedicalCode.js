"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalCode = exports.MedicalCodeOrSubClassJoiSchema = exports.MedicalCodeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalCode - Validation schema (w/ JOI)
 */
exports.MedicalCodeJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalCode').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    codeValue: Joi.string(),
    codingSystem: Joi.string(),
    inCodeSet: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CategoryCodeSetOrSubClassJoiSchema)),
    inDefinedTermSet: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermSetOrSubClassJoiSchema), Joi.string().uri()),
    termCode: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * schema:MedicalCode - Validation schema (w/ JOI)
 *
 * This differs from MedicalCodeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalCodeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalCodeJoiSchema,
]);
/**
 * Runtime validator for schema:MedicalCode.
 *
 * If some data has a structure which matches a schema:MedicalCode, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalCode = validateMedicalCode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalCode instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalCode` will have type `OaValidationError`
 *   const error = maybeMedicalCode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalCode` will have type `MedicalCode`
 * const medicalCode = maybeMedicalCode;
 * ```
 */
function validateMedicalCode(maybeMedicalCode) {
    const { value, error } = exports.MedicalCodeJoiSchema.validate(maybeMedicalCode);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalCode', maybeMedicalCode, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalCode = validateMedicalCode;
