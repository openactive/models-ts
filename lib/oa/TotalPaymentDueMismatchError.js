"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTotalPaymentDueMismatchError = exports.TotalPaymentDueMismatchErrorOrSubClassJoiSchema = exports.TotalPaymentDueMismatchErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * TotalPaymentDueMismatchError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `totalPaymentDue` property of the submitted `Order` or `OrderProposal` does not match the value calculated for that `Order` or `OrderProposal` by the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.TotalPaymentDueMismatchErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('TotalPaymentDueMismatchError').required(),
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
 * TotalPaymentDueMismatchError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `totalPaymentDue` property of the submitted `Order` or `OrderProposal` does not match the value calculated for that `Order` or `OrderProposal` by the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from TotalPaymentDueMismatchErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TotalPaymentDueMismatchErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TotalPaymentDueMismatchErrorJoiSchema,
]);
/**
 * Runtime validator for TotalPaymentDueMismatchError.
 *
 * If some data has a structure which matches a TotalPaymentDueMismatchError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTotalPaymentDueMismatchError = validateTotalPaymentDueMismatchError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTotalPaymentDueMismatchError instanceof OaValidationError) {
 *   // From this point on, `maybeTotalPaymentDueMismatchError` will have type `OaValidationError`
 *   const error = maybeTotalPaymentDueMismatchError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTotalPaymentDueMismatchError` will have type `TotalPaymentDueMismatchError`
 * const totalPaymentDueMismatchError = maybeTotalPaymentDueMismatchError;
 * ```
 */
function validateTotalPaymentDueMismatchError(maybeTotalPaymentDueMismatchError) {
    const { value, error } = exports.TotalPaymentDueMismatchErrorJoiSchema.validate(maybeTotalPaymentDueMismatchError);
    if (error) {
        return new oaValidationError_1.OaValidationError('TotalPaymentDueMismatchError', maybeTotalPaymentDueMismatchError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTotalPaymentDueMismatchError = validateTotalPaymentDueMismatchError;
