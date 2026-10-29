"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParentAudience = exports.ParentAudienceOrSubClassJoiSchema = exports.ParentAudienceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ParentAudience - Validation schema (w/ JOI)
 */
exports.ParentAudienceJoiSchema = Joi.object({
    '@type': Joi.string().valid('ParentAudience').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    childMaxAge: Joi.number(),
    childMinAge: Joi.number(),
    healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
    requiredGender: Joi.string(),
    requiredMaxAge: Joi.number().integer(),
    requiredMinAge: Joi.number().integer(),
    suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedGender: Joi.alternatives().try(Joi.lazy(() => schema.GenderTypeJoiSchema), Joi.string()),
    suggestedMaxAge: Joi.number(),
    suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedMinAge: Joi.number(),
    audienceType: Joi.string(),
    geographicArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ParentAudience - Validation schema (w/ JOI)
 *
 * This differs from ParentAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ParentAudienceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ParentAudienceJoiSchema,
]);
/**
 * Runtime validator for schema:ParentAudience.
 *
 * If some data has a structure which matches a schema:ParentAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParentAudience = validateParentAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParentAudience instanceof OaValidationError) {
 *   // From this point on, `maybeParentAudience` will have type `OaValidationError`
 *   const error = maybeParentAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParentAudience` will have type `ParentAudience`
 * const parentAudience = maybeParentAudience;
 * ```
 */
function validateParentAudience(maybeParentAudience) {
    const { value, error } = exports.ParentAudienceJoiSchema.validate(maybeParentAudience);
    if (error) {
        return new oaValidationError_1.OaValidationError('ParentAudience', maybeParentAudience, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateParentAudience = validateParentAudience;
