"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpportunityCapacityIsReservedByLeaseError = exports.OpportunityCapacityIsReservedByLeaseErrorOrSubClassJoiSchema = exports.OpportunityCapacityIsReservedByLeaseErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * OpportunityCapacityIsReservedByLeaseError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.OpportunityCapacityIsReservedByLeaseErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('OpportunityCapacityIsReservedByLeaseError').required(),
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
 * OpportunityCapacityIsReservedByLeaseError - Validation schema (w/ JOI)
 *
 *
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpportunityCapacityIsReservedByLeaseErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OpportunityCapacityIsReservedByLeaseErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OpportunityCapacityIsReservedByLeaseErrorJoiSchema,
]);
/**
 * Runtime validator for OpportunityCapacityIsReservedByLeaseError.
 *
 * If some data has a structure which matches a OpportunityCapacityIsReservedByLeaseError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpportunityCapacityIsReservedByLeaseError = OpportunityCapacityIsReservedByLeaseError.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpportunityCapacityIsReservedByLeaseError instanceof OaValidationError) {
 *   // From this point on, `maybeOpportunityCapacityIsReservedByLeaseError` will have type `OaValidationError`
 *   const error = maybeOpportunityCapacityIsReservedByLeaseError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpportunityCapacityIsReservedByLeaseError` will have type `OpportunityCapacityIsReservedByLeaseError`
 * const opportunityCapacityIsReservedByLeaseError = maybeOpportunityCapacityIsReservedByLeaseError;
 * ```
 */
function validateOpportunityCapacityIsReservedByLeaseError(maybeOpportunityCapacityIsReservedByLeaseError) {
    const { value, error } = exports.OpportunityCapacityIsReservedByLeaseErrorJoiSchema.validate(maybeOpportunityCapacityIsReservedByLeaseError);
    if (error) {
        return new oaValidationError_1.OaValidationError('OpportunityCapacityIsReservedByLeaseError', maybeOpportunityCapacityIsReservedByLeaseError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOpportunityCapacityIsReservedByLeaseError = validateOpportunityCapacityIsReservedByLeaseError;
