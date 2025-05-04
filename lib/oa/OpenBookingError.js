"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpenBookingError = exports.OpenBookingErrorOrSubClassJoiSchema = exports.OpenBookingErrorJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * OpenBookingError - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.OpenBookingErrorJoiSchema = Joi.object({
    '@type': Joi.string().valid('OpenBookingError').required(),
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
 * OpenBookingError - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpenBookingErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OpenBookingErrorOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OpenBookingErrorJoiSchema,
    Joi.lazy(() => oa.CancellationNotPermittedErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.GoneErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompleteAttendeeDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompleteBrokerDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompleteCustomerDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompleteIntakeFormErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompleteOrderItemErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.IncompletePaymentDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InternalOpenBookingErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InvalidAPITokenErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InvalidAuthorizationDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InvalidIntakeFormErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InvalidOpportunityOrOfferIdErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.InvalidPaymentDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.MethodNotAllowedErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.MissingPaymentDetailsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.NoAPITokenErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.NotFoundErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityCapacityIsReservedByLeaseErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityHasInsufficientCapacityErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityIntractableErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityIsFullErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityIsInConflictErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpportunityOfferPairNotBookableErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OrderAlreadyExistsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OrderCreationFailedErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OrderItemIdInvalidErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OrderItemNotWithinOrderErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.OrderProposalVersionOutdatedErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.PatchContainsExcessivePropertiesErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.PatchNotAllowedOnPropertyErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.SellerMismatchErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.SellerNotFoundErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TemporarilyUnableToCreateOrderErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TemporarilyUnableToDeleteOrderErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TemporarilyUnableToProduceOrderQuoteErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TemporarilyUnableToUpdateOrderErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TooManyRequestsErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.TotalPaymentDueMismatchErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnableToProcessOrderItemErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnacceptableOfferErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnauthenticatedErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnexpectedOrderTypeErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnknownOfferErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnknownOpportunityErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnknownOrIncorrectEndpointErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnknownOrderErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.UnnecessaryPaymentDetailsErrorOrSubClassJoiSchema),
]);
/**
 * Runtime validator for OpenBookingError.
 *
 * If some data has a structure which matches a OpenBookingError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpenBookingError = validateOpenBookingError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpenBookingError instanceof OaValidationError) {
 *   // From this point on, `maybeOpenBookingError` will have type `OaValidationError`
 *   const error = maybeOpenBookingError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpenBookingError` will have type `OpenBookingError`
 * const openBookingError = maybeOpenBookingError;
 * ```
 */
function validateOpenBookingError(maybeOpenBookingError) {
    const { value, error } = exports.OpenBookingErrorJoiSchema.validate(maybeOpenBookingError);
    if (error) {
        return new oaValidationError_1.OaValidationError('OpenBookingError', maybeOpenBookingError, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOpenBookingError = validateOpenBookingError;
