"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderAlreadyExistsError = exports.OrderAlreadyExistsErrorOrSubClassJoiSchema = exports.OrderAlreadyExistsErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * OrderAlreadyExistsError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Order UUID used for an `OrderQuote` already represents a completed `Order` with a different set of `OrderItem`s to those specified (note call to B is idempotent for the case where `OrderItem`s match). This happens in the rare event of a Order UUID clash.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.OrderAlreadyExistsErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('OrderAlreadyExistsError').required(),
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
 * OrderAlreadyExistsError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The Order UUID used for an `OrderQuote` already represents a completed `Order` with a different set of `OrderItem`s to those specified (note call to B is idempotent for the case where `OrderItem`s match). This happens in the rare event of a Order UUID clash.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderAlreadyExistsErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OrderAlreadyExistsErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OrderAlreadyExistsErrorJoiSchema,
]);
/**
 * Runtime validator for OrderAlreadyExistsError.
 *
 * If some data has a structure which matches a OrderAlreadyExistsError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderAlreadyExistsError = validateOrderAlreadyExistsError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderAlreadyExistsError instanceof OaValidationError) {
 *   // From this point on, `maybeOrderAlreadyExistsError` will have type `OaValidationError`
 *   const error = maybeOrderAlreadyExistsError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderAlreadyExistsError` will have type `OrderAlreadyExistsError`
 * const orderAlreadyExistsError = maybeOrderAlreadyExistsError;
 * ```
 */
function validateOrderAlreadyExistsError(maybeOrderAlreadyExistsError) {
    const { value, error } = exports.OrderAlreadyExistsErrorJoiSchema.validate(maybeOrderAlreadyExistsError);
    if (error) {
        return new oaValidationError_1.OaValidationError('OrderAlreadyExistsError', maybeOrderAlreadyExistsError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrderAlreadyExistsError = validateOrderAlreadyExistsError;
