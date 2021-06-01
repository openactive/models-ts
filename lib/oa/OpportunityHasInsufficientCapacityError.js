"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpportunityHasInsufficientCapacityError = exports.OpportunityHasInsufficientCapacityErrorOrSubClassJoiSchema = exports.OpportunityHasInsufficientCapacityErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * OpportunityHasInsufficientCapacityError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: There are not enough available spaces in the Opportunity contained in the `orderedItem` property of the `OrderItem` to fulfil the number of repeated `OrderItem`s.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity - for example in an Opportunity with a `remainingAttendeeCapacity` of 2 and with 5 `OrderItem`s related to it, this error would only be emitted against 3 of the `OrderItem`s.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.OpportunityHasInsufficientCapacityErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('OpportunityHasInsufficientCapacityError').required(),
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
 * OpportunityHasInsufficientCapacityError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: There are not enough available spaces in the Opportunity contained in the `orderedItem` property of the `OrderItem` to fulfil the number of repeated `OrderItem`s.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity - for example in an Opportunity with a `remainingAttendeeCapacity` of 2 and with 5 `OrderItem`s related to it, this error would only be emitted against 3 of the `OrderItem`s.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpportunityHasInsufficientCapacityErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OpportunityHasInsufficientCapacityErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OpportunityHasInsufficientCapacityErrorJoiSchema,
]);
/**
 * Runtime validator for OpportunityHasInsufficientCapacityError.
 *
 * If some data has a structure which matches a OpportunityHasInsufficientCapacityError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpportunityHasInsufficientCapacityError = OpportunityHasInsufficientCapacityError.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpportunityHasInsufficientCapacityError instanceof OaValidationError) {
 *   // From this point on, `maybeOpportunityHasInsufficientCapacityError` will have type `OaValidationError`
 *   const error = maybeOpportunityHasInsufficientCapacityError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpportunityHasInsufficientCapacityError` will have type `OpportunityHasInsufficientCapacityError`
 * const opportunityHasInsufficientCapacityError = maybeOpportunityHasInsufficientCapacityError;
 * ```
 */
function validateOpportunityHasInsufficientCapacityError(maybeOpportunityHasInsufficientCapacityError) {
    const { value, error } = exports.OpportunityHasInsufficientCapacityErrorJoiSchema.validate(maybeOpportunityHasInsufficientCapacityError);
    if (error) {
        return new oaValidationError_1.OaValidationError('OpportunityHasInsufficientCapacityError', maybeOpportunityHasInsufficientCapacityError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOpportunityHasInsufficientCapacityError = validateOpportunityHasInsufficientCapacityError;
