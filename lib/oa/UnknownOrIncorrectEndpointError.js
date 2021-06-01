"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnknownOrIncorrectEndpointError = exports.UnknownOrIncorrectEndpointErrorOrSubClassJoiSchema = exports.UnknownOrIncorrectEndpointErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * UnknownOrIncorrectEndpointError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Booking System has no endpoint matching the one requested.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.UnknownOrIncorrectEndpointErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('UnknownOrIncorrectEndpointError').required(),
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
 * UnknownOrIncorrectEndpointError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Booking System has no endpoint matching the one requested.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from UnknownOrIncorrectEndpointErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.UnknownOrIncorrectEndpointErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.UnknownOrIncorrectEndpointErrorJoiSchema,
]);
/**
 * Runtime validator for UnknownOrIncorrectEndpointError.
 *
 * If some data has a structure which matches a UnknownOrIncorrectEndpointError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUnknownOrIncorrectEndpointError = UnknownOrIncorrectEndpointError.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUnknownOrIncorrectEndpointError instanceof OaValidationError) {
 *   // From this point on, `maybeUnknownOrIncorrectEndpointError` will have type `OaValidationError`
 *   const error = maybeUnknownOrIncorrectEndpointError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUnknownOrIncorrectEndpointError` will have type `UnknownOrIncorrectEndpointError`
 * const unknownOrIncorrectEndpointError = maybeUnknownOrIncorrectEndpointError;
 * ```
 */
function validateUnknownOrIncorrectEndpointError(maybeUnknownOrIncorrectEndpointError) {
    const { value, error } = exports.UnknownOrIncorrectEndpointErrorJoiSchema.validate(maybeUnknownOrIncorrectEndpointError);
    if (error) {
        return new oaValidationError_1.OaValidationError('UnknownOrIncorrectEndpointError', maybeUnknownOrIncorrectEndpointError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUnknownOrIncorrectEndpointError = validateUnknownOrIncorrectEndpointError;
