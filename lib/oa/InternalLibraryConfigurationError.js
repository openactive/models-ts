"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInternalLibraryConfigurationError = exports.InternalLibraryConfigurationErrorOrSubClassJoiSchema = exports.InternalLibraryConfigurationErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * InternalLibraryConfigurationError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: An exception has been thrown due to the misconfiguration of an OpenActive SDK library or component.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.InternalLibraryConfigurationErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('InternalLibraryConfigurationError').required(),
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
 * InternalLibraryConfigurationError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: An exception has been thrown due to the misconfiguration of an OpenActive SDK library or component.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from InternalLibraryConfigurationErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InternalLibraryConfigurationErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InternalLibraryConfigurationErrorJoiSchema,
]);
/**
 * Runtime validator for InternalLibraryConfigurationError.
 *
 * If some data has a structure which matches a InternalLibraryConfigurationError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInternalLibraryConfigurationError = validateInternalLibraryConfigurationError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInternalLibraryConfigurationError instanceof OaValidationError) {
 *   // From this point on, `maybeInternalLibraryConfigurationError` will have type `OaValidationError`
 *   const error = maybeInternalLibraryConfigurationError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInternalLibraryConfigurationError` will have type `InternalLibraryConfigurationError`
 * const internalLibraryConfigurationError = maybeInternalLibraryConfigurationError;
 * ```
 */
function validateInternalLibraryConfigurationError(maybeInternalLibraryConfigurationError) {
    const { value, error } = exports.InternalLibraryConfigurationErrorJoiSchema.validate(maybeInternalLibraryConfigurationError);
    if (error) {
        return new oaValidationError_1.OaValidationError('InternalLibraryConfigurationError', maybeInternalLibraryConfigurationError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInternalLibraryConfigurationError = validateInternalLibraryConfigurationError;
