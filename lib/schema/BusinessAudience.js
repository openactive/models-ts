"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBusinessAudience = exports.BusinessAudienceOrSubClassJoiSchema = exports.BusinessAudienceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:BusinessAudience - Validation schema (w/ JOI)
 */
exports.BusinessAudienceJoiSchema = Joi.object({
    '@type': Joi.string().valid('BusinessAudience').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    yearlyRevenue: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    yearsInOperation: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
});
/**
 * schema:BusinessAudience - Validation schema (w/ JOI)
 *
 * This differs from BusinessAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BusinessAudienceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BusinessAudienceJoiSchema,
]);
/**
 * Runtime validator for schema:BusinessAudience.
 *
 * If some data has a structure which matches a schema:BusinessAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBusinessAudience = validateBusinessAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBusinessAudience instanceof OaValidationError) {
 *   // From this point on, `maybeBusinessAudience` will have type `OaValidationError`
 *   const error = maybeBusinessAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBusinessAudience` will have type `BusinessAudience`
 * const businessAudience = maybeBusinessAudience;
 * ```
 */
function validateBusinessAudience(maybeBusinessAudience) {
    const { value, error } = exports.BusinessAudienceJoiSchema.validate(maybeBusinessAudience);
    if (error) {
        return new oaValidationError_1.OaValidationError('BusinessAudience', maybeBusinessAudience, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBusinessAudience = validateBusinessAudience;
