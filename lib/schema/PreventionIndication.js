"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePreventionIndication = exports.PreventionIndicationOrSubClassJoiSchema = exports.PreventionIndicationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PreventionIndication - Validation schema (w/ JOI)
 */
exports.PreventionIndicationJoiSchema = Joi.object({
    '@type': Joi.string().valid('PreventionIndication').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:PreventionIndication - Validation schema (w/ JOI)
 *
 * This differs from PreventionIndicationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PreventionIndicationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PreventionIndicationJoiSchema,
]);
/**
 * Runtime validator for schema:PreventionIndication.
 *
 * If some data has a structure which matches a schema:PreventionIndication, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePreventionIndication = validatePreventionIndication(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePreventionIndication instanceof OaValidationError) {
 *   // From this point on, `maybePreventionIndication` will have type `OaValidationError`
 *   const error = maybePreventionIndication;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePreventionIndication` will have type `PreventionIndication`
 * const preventionIndication = maybePreventionIndication;
 * ```
 */
function validatePreventionIndication(maybePreventionIndication) {
    const { value, error } = exports.PreventionIndicationJoiSchema.validate(maybePreventionIndication);
    if (error) {
        return new oaValidationError_1.OaValidationError('PreventionIndication', maybePreventionIndication, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePreventionIndication = validatePreventionIndication;
