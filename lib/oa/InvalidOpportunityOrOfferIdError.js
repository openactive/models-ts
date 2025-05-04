"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInvalidOpportunityOrOfferIdError = exports.InvalidOpportunityOrOfferIdErrorOrSubClassJoiSchema = exports.InvalidOpportunityOrOfferIdErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * InvalidOpportunityOrOfferIdError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `@id` provided for the `orderedItem` or `acceptedOffer` does not match a recognised URL format within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.InvalidOpportunityOrOfferIdErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('InvalidOpportunityOrOfferIdError').required(),
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
 * InvalidOpportunityOrOfferIdError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The `@id` provided for the `orderedItem` or `acceptedOffer` does not match a recognised URL format within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from InvalidOpportunityOrOfferIdErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InvalidOpportunityOrOfferIdErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InvalidOpportunityOrOfferIdErrorJoiSchema,
]);
/**
 * Runtime validator for InvalidOpportunityOrOfferIdError.
 *
 * If some data has a structure which matches a InvalidOpportunityOrOfferIdError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInvalidOpportunityOrOfferIdError = validateInvalidOpportunityOrOfferIdError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInvalidOpportunityOrOfferIdError instanceof OaValidationError) {
 *   // From this point on, `maybeInvalidOpportunityOrOfferIdError` will have type `OaValidationError`
 *   const error = maybeInvalidOpportunityOrOfferIdError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInvalidOpportunityOrOfferIdError` will have type `InvalidOpportunityOrOfferIdError`
 * const invalidOpportunityOrOfferIdError = maybeInvalidOpportunityOrOfferIdError;
 * ```
 */
function validateInvalidOpportunityOrOfferIdError(maybeInvalidOpportunityOrOfferIdError) {
    const { value, error } = exports.InvalidOpportunityOrOfferIdErrorJoiSchema.validate(maybeInvalidOpportunityOrOfferIdError);
    if (error) {
        return new oaValidationError_1.OaValidationError('InvalidOpportunityOrOfferIdError', maybeInvalidOpportunityOrOfferIdError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInvalidOpportunityOrOfferIdError = validateInvalidOpportunityOrOfferIdError;
