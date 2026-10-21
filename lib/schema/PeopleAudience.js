"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePeopleAudience = exports.PeopleAudienceOrSubClassJoiSchema = exports.PeopleAudienceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PeopleAudience - Validation schema (w/ JOI)
 */
exports.PeopleAudienceJoiSchema = Joi.object({
    '@type': Joi.string().valid('PeopleAudience').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    suggestedGender: Joi.alternatives().try(Joi.lazy(() => schema.GenderTypeJoiSchema), Joi.string()),
    requiredMaxAge: Joi.number().integer(),
    suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedMaxAge: Joi.number(),
    suggestedMinAge: Joi.number(),
    suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    requiredGender: Joi.string(),
    healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
    requiredMinAge: Joi.number().integer(),
    audienceType: Joi.string(),
    geographicArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:PeopleAudience - Validation schema (w/ JOI)
 *
 * This differs from PeopleAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PeopleAudienceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PeopleAudienceJoiSchema,
    Joi.lazy(() => schema.MedicalAudienceOrSubClassJoiSchema),
    Joi.lazy(() => schema.ParentAudienceOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:PeopleAudience.
 *
 * If some data has a structure which matches a schema:PeopleAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePeopleAudience = validatePeopleAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePeopleAudience instanceof OaValidationError) {
 *   // From this point on, `maybePeopleAudience` will have type `OaValidationError`
 *   const error = maybePeopleAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePeopleAudience` will have type `PeopleAudience`
 * const peopleAudience = maybePeopleAudience;
 * ```
 */
function validatePeopleAudience(maybePeopleAudience) {
    const { value, error } = exports.PeopleAudienceJoiSchema.validate(maybePeopleAudience);
    if (error) {
        return new oaValidationError_1.OaValidationError('PeopleAudience', maybePeopleAudience, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePeopleAudience = validatePeopleAudience;
