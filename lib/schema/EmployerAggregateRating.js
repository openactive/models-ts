"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmployerAggregateRating = exports.EmployerAggregateRatingOrSubClassJoiSchema = exports.EmployerAggregateRatingJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EmployerAggregateRating - Validation schema (w/ JOI)
 */
exports.EmployerAggregateRatingJoiSchema = Joi.object({
    '@type': Joi.string().valid('EmployerAggregateRating').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    itemReviewed: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    ratingCount: Joi.number().integer(),
    reviewCount: Joi.number().integer(),
    author: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    bestRating: Joi.alternatives().try(Joi.number(), Joi.string()),
    ratingExplanation: Joi.string(),
    ratingValue: Joi.alternatives().try(Joi.number(), Joi.string()),
    reviewAspect: Joi.alternatives().try(Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    worstRating: Joi.alternatives().try(Joi.number(), Joi.string()),
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
 * schema:EmployerAggregateRating - Validation schema (w/ JOI)
 *
 * This differs from EmployerAggregateRatingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EmployerAggregateRatingOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EmployerAggregateRatingJoiSchema,
]);
/**
 * Runtime validator for schema:EmployerAggregateRating.
 *
 * If some data has a structure which matches a schema:EmployerAggregateRating, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEmployerAggregateRating = validateEmployerAggregateRating(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEmployerAggregateRating instanceof OaValidationError) {
 *   // From this point on, `maybeEmployerAggregateRating` will have type `OaValidationError`
 *   const error = maybeEmployerAggregateRating;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEmployerAggregateRating` will have type `EmployerAggregateRating`
 * const employerAggregateRating = maybeEmployerAggregateRating;
 * ```
 */
function validateEmployerAggregateRating(maybeEmployerAggregateRating) {
    const { value, error } = exports.EmployerAggregateRatingJoiSchema.validate(maybeEmployerAggregateRating);
    if (error) {
        return new oaValidationError_1.OaValidationError('EmployerAggregateRating', maybeEmployerAggregateRating, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEmployerAggregateRating = validateEmployerAggregateRating;
