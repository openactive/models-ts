"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInternalOpenBookingError = exports.InternalOpenBookingErrorOrSubClassJoiSchema = exports.InternalOpenBookingErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * InternalOpenBookingError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: A generic internal error type, which is not intended to be used directly.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.InternalOpenBookingErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('InternalOpenBookingError').required(),
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
 * InternalOpenBookingError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: A generic internal error type, which is not intended to be used directly.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from InternalOpenBookingErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InternalOpenBookingErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InternalOpenBookingErrorJoiSchema,
    Joi.lazy(() => oa.InternalApplicationErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InternalLibraryConfigurationErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InternalLibraryErrorOrSubClassJoiSchema),
]);
/**
 * Runtime validator for InternalOpenBookingError.
 *
 * If some data has a structure which matches a InternalOpenBookingError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInternalOpenBookingError = validateInternalOpenBookingError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInternalOpenBookingError instanceof OaValidationError) {
 *   // From this point on, `maybeInternalOpenBookingError` will have type `OaValidationError`
 *   const error = maybeInternalOpenBookingError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInternalOpenBookingError` will have type `InternalOpenBookingError`
 * const internalOpenBookingError = maybeInternalOpenBookingError;
 * ```
 */
function validateInternalOpenBookingError(maybeInternalOpenBookingError) {
    const { value, error } = exports.InternalOpenBookingErrorJoiSchema.validate(maybeInternalOpenBookingError);
    if (error) {
        return new oaValidationError_1.OaValidationError('InternalOpenBookingError', maybeInternalOpenBookingError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInternalOpenBookingError = validateInternalOpenBookingError;
