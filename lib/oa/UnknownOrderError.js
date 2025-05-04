"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnknownOrderError = exports.UnknownOrderErrorOrSubClassJoiSchema = exports.UnknownOrderErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * UnknownOrderError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Booking System has no `Order` matching the one requested.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.UnknownOrderErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('UnknownOrderError').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    instance: Joi.string().uri(),
    requestId: Joi.string(),
    statusCode: Joi.number().integer(),
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
 * UnknownOrderError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Booking System has no `Order` matching the one requested.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from UnknownOrderErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.UnknownOrderErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.UnknownOrderErrorJoiSchema,
]);
/**
 * Runtime validator for UnknownOrderError.
 *
 * If some data has a structure which matches a UnknownOrderError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUnknownOrderError = validateUnknownOrderError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUnknownOrderError instanceof OaValidationError) {
 *   // From this point on, `maybeUnknownOrderError` will have type `OaValidationError`
 *   const error = maybeUnknownOrderError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUnknownOrderError` will have type `UnknownOrderError`
 * const unknownOrderError = maybeUnknownOrderError;
 * ```
 */
function validateUnknownOrderError(maybeUnknownOrderError) {
    const { value, error } = exports.UnknownOrderErrorJoiSchema.validate(maybeUnknownOrderError);
    if (error) {
        return new oaValidationError_1.OaValidationError('UnknownOrderError', maybeUnknownOrderError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUnknownOrderError = validateUnknownOrderError;
