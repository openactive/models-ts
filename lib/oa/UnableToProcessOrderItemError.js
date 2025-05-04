"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnableToProcessOrderItemError = exports.UnableToProcessOrderItemErrorOrSubClassJoiSchema = exports.UnableToProcessOrderItemErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * UnableToProcessOrderItemError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: `OrderItem` errors would have been generated at C2 given the same set of `OrderItem`s. The Broker is expected to retry C2 to retrieve such errors.  This error MUST only be used as a response from P or B.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.UnableToProcessOrderItemErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('UnableToProcessOrderItemError').required(),
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
 * UnableToProcessOrderItemError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: `OrderItem` errors would have been generated at C2 given the same set of `OrderItem`s. The Broker is expected to retry C2 to retrieve such errors.  This error MUST only be used as a response from P or B.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from UnableToProcessOrderItemErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.UnableToProcessOrderItemErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.UnableToProcessOrderItemErrorJoiSchema,
]);
/**
 * Runtime validator for UnableToProcessOrderItemError.
 *
 * If some data has a structure which matches a UnableToProcessOrderItemError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUnableToProcessOrderItemError = validateUnableToProcessOrderItemError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUnableToProcessOrderItemError instanceof OaValidationError) {
 *   // From this point on, `maybeUnableToProcessOrderItemError` will have type `OaValidationError`
 *   const error = maybeUnableToProcessOrderItemError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUnableToProcessOrderItemError` will have type `UnableToProcessOrderItemError`
 * const unableToProcessOrderItemError = maybeUnableToProcessOrderItemError;
 * ```
 */
function validateUnableToProcessOrderItemError(maybeUnableToProcessOrderItemError) {
    const { value, error } = exports.UnableToProcessOrderItemErrorJoiSchema.validate(maybeUnableToProcessOrderItemError);
    if (error) {
        return new oaValidationError_1.OaValidationError('UnableToProcessOrderItemError', maybeUnableToProcessOrderItemError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUnableToProcessOrderItemError = validateUnableToProcessOrderItemError;
