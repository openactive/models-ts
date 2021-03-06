"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMedicalAudience = exports.MedicalAudienceOrSubClassJoiSchema = exports.MedicalAudienceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MedicalAudience - Validation schema (w/ JOI)
 */
exports.MedicalAudienceJoiSchema = Joi.object({
    '@type': Joi.string().valid('MedicalAudience').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    geographicArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    audienceType: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    requiredMaxAge: Joi.number().integer(),
    suggestedGender: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GenderTypeJoiSchema)),
    healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
    requiredGender: Joi.string(),
    suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedMinAge: Joi.number(),
    suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    requiredMinAge: Joi.number().integer(),
    suggestedMaxAge: Joi.number(),
});
/**
 * schema:MedicalAudience - Validation schema (w/ JOI)
 *
 * This differs from MedicalAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MedicalAudienceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MedicalAudienceJoiSchema,
    Joi.lazy(() => schema.PatientOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:MedicalAudience.
 *
 * If some data has a structure which matches a schema:MedicalAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalAudience = validateMedicalAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalAudience instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalAudience` will have type `OaValidationError`
 *   const error = maybeMedicalAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalAudience` will have type `MedicalAudience`
 * const medicalAudience = maybeMedicalAudience;
 * ```
 */
function validateMedicalAudience(maybeMedicalAudience) {
    const { value, error } = exports.MedicalAudienceJoiSchema.validate(maybeMedicalAudience);
    if (error) {
        return new oaValidationError_1.OaValidationError('MedicalAudience', maybeMedicalAudience, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMedicalAudience = validateMedicalAudience;
