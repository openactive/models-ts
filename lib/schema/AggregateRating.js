"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAggregateRating = exports.AggregateRatingOrSubClassJoiSchema = exports.AggregateRatingJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:AggregateRating - Validation schema (w/ JOI)
 */
exports.AggregateRatingJoiSchema = Joi.object({
    '@type': Joi.string().valid('AggregateRating').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    reviewCount: Joi.number().integer(),
    ratingCount: Joi.number().integer(),
    itemReviewed: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    worstRating: Joi.alternatives().try(Joi.number(), Joi.string()),
    author: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    reviewAspect: Joi.string(),
    ratingValue: Joi.alternatives().try(Joi.number(), Joi.string()),
    ratingExplanation: Joi.string(),
    bestRating: Joi.alternatives().try(Joi.number(), Joi.string()),
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
 * schema:AggregateRating - Validation schema (w/ JOI)
 *
 * This differs from AggregateRatingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.AggregateRatingOrSubClassJoiSchema = Joi.alternatives().try([
    exports.AggregateRatingJoiSchema,
    Joi.lazy(() => schema.EmployerAggregateRatingOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:AggregateRating.
 *
 * If some data has a structure which matches a schema:AggregateRating, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAggregateRating = validateAggregateRating(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAggregateRating instanceof OaValidationError) {
 *   // From this point on, `maybeAggregateRating` will have type `OaValidationError`
 *   const error = maybeAggregateRating;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAggregateRating` will have type `AggregateRating`
 * const aggregateRating = maybeAggregateRating;
 * ```
 */
function validateAggregateRating(maybeAggregateRating) {
    const { value, error } = exports.AggregateRatingJoiSchema.validate(maybeAggregateRating);
    if (error) {
        return new oaValidationError_1.OaValidationError('AggregateRating', maybeAggregateRating, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAggregateRating = validateAggregateRating;
