"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInvalidAPITokenError = exports.InvalidAPITokenErrorOrSubClassJoiSchema = exports.InvalidAPITokenErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * InvalidAPITokenError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Broker supplied an invalid API key, either malformed or expired.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.InvalidAPITokenErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('InvalidAPITokenError').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    instance: Joi.string().uri(),
    requestId: Joi.string(),
    statusCode: Joi.number().integer(),
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
 * InvalidAPITokenError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Broker supplied an invalid API key, either malformed or expired.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from InvalidAPITokenErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InvalidAPITokenErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InvalidAPITokenErrorJoiSchema,
]);
/**
 * Runtime validator for InvalidAPITokenError.
 *
 * If some data has a structure which matches a InvalidAPITokenError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInvalidAPITokenError = validateInvalidAPITokenError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInvalidAPITokenError instanceof OaValidationError) {
 *   // From this point on, `maybeInvalidAPITokenError` will have type `OaValidationError`
 *   const error = maybeInvalidAPITokenError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInvalidAPITokenError` will have type `InvalidAPITokenError`
 * const invalidAPITokenError = maybeInvalidAPITokenError;
 * ```
 */
function validateInvalidAPITokenError(maybeInvalidAPITokenError) {
    const { value, error } = exports.InvalidAPITokenErrorJoiSchema.validate(maybeInvalidAPITokenError);
    if (error) {
        return new oaValidationError_1.OaValidationError('InvalidAPITokenError', maybeInvalidAPITokenError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInvalidAPITokenError = validateInvalidAPITokenError;
