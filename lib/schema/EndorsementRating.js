"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEndorsementRating = exports.EndorsementRatingOrSubClassJoiSchema = exports.EndorsementRatingJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EndorsementRating - Validation schema (w/ JOI)
 */
exports.EndorsementRatingJoiSchema = Joi.object({
    '@type': Joi.string().valid('EndorsementRating').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    reviewAspect: Joi.string(),
    ratingValue: Joi.alternatives().try(Joi.number(), Joi.string()),
    worstRating: Joi.alternatives().try(Joi.string(), Joi.number()),
    author: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    ratingExplanation: Joi.string(),
    bestRating: Joi.alternatives().try(Joi.string(), Joi.number()),
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
 * schema:EndorsementRating - Validation schema (w/ JOI)
 *
 * This differs from EndorsementRatingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EndorsementRatingOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EndorsementRatingJoiSchema,
]);
/**
 * Runtime validator for schema:EndorsementRating.
 *
 * If some data has a structure which matches a schema:EndorsementRating, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEndorsementRating = validateEndorsementRating(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEndorsementRating instanceof OaValidationError) {
 *   // From this point on, `maybeEndorsementRating` will have type `OaValidationError`
 *   const error = maybeEndorsementRating;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEndorsementRating` will have type `EndorsementRating`
 * const endorsementRating = maybeEndorsementRating;
 * ```
 */
function validateEndorsementRating(maybeEndorsementRating) {
    const { value, error } = exports.EndorsementRatingJoiSchema.validate(maybeEndorsementRating);
    if (error) {
        return new oaValidationError_1.OaValidationError('EndorsementRating', maybeEndorsementRating, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEndorsementRating = validateEndorsementRating;
