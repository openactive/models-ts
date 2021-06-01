"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCancellationNotPermittedError = exports.CancellationNotPermittedErrorOrSubClassJoiSchema = exports.CancellationNotPermittedErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * CancellationNotPermittedError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: Cancellation is not permitted due to internal rules of the Booking System not otherwise exposed to the Broker.  The `description` property of the object MUST include a Customer-facing description of the reason that cancellation is not permitted.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.CancellationNotPermittedErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('CancellationNotPermittedError').required(),
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
 * CancellationNotPermittedError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: Cancellation is not permitted due to internal rules of the Booking System not otherwise exposed to the Broker.  The `description` property of the object MUST include a Customer-facing description of the reason that cancellation is not permitted.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CancellationNotPermittedErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CancellationNotPermittedErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CancellationNotPermittedErrorJoiSchema,
]);
/**
 * Runtime validator for CancellationNotPermittedError.
 *
 * If some data has a structure which matches a CancellationNotPermittedError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCancellationNotPermittedError = CancellationNotPermittedError.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCancellationNotPermittedError instanceof OaValidationError) {
 *   // From this point on, `maybeCancellationNotPermittedError` will have type `OaValidationError`
 *   const error = maybeCancellationNotPermittedError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCancellationNotPermittedError` will have type `CancellationNotPermittedError`
 * const cancellationNotPermittedError = maybeCancellationNotPermittedError;
 * ```
 */
function validateCancellationNotPermittedError(maybeCancellationNotPermittedError) {
    const { value, error } = exports.CancellationNotPermittedErrorJoiSchema.validate(maybeCancellationNotPermittedError);
    if (error) {
        return new oaValidationError_1.OaValidationError('CancellationNotPermittedError', maybeCancellationNotPermittedError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCancellationNotPermittedError = validateCancellationNotPermittedError;
