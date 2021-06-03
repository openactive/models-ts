"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSellerRequestedCancellationWithMessageSimulateAction = exports.SellerRequestedCancellationWithMessageSimulateActionOrSubClassJoiSchema = exports.SellerRequestedCancellationWithMessageSimulateActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * test:SellerRequestedCancellationWithMessageSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
exports.SellerRequestedCancellationWithMessageSimulateActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('SellerRequestedCancellationWithMessageSimulateAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    object: Joi.alternatives().try(Joi.lazy(() => oa.OrderOrSubClassJoiSchema), Joi.lazy(() => oa.Event_OrSubClassJoiSchema)),
    startTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    agent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
    endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
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
 * test:SellerRequestedCancellationWithMessageSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from SellerRequestedCancellationWithMessageSimulateActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SellerRequestedCancellationWithMessageSimulateActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SellerRequestedCancellationWithMessageSimulateActionJoiSchema,
]);
/**
 * Runtime validator for test:SellerRequestedCancellationWithMessageSimulateAction.
 *
 * If some data has a structure which matches a test:SellerRequestedCancellationWithMessageSimulateAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSellerRequestedCancellationWithMessageSimulateAction = validateSellerRequestedCancellationWithMessageSimulateAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSellerRequestedCancellationWithMessageSimulateAction instanceof OaValidationError) {
 *   // From this point on, `maybeSellerRequestedCancellationWithMessageSimulateAction` will have type `OaValidationError`
 *   const error = maybeSellerRequestedCancellationWithMessageSimulateAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSellerRequestedCancellationWithMessageSimulateAction` will have type `SellerRequestedCancellationWithMessageSimulateAction`
 * const sellerRequestedCancellationWithMessageSimulateAction = maybeSellerRequestedCancellationWithMessageSimulateAction;
 * ```
 */
function validateSellerRequestedCancellationWithMessageSimulateAction(maybeSellerRequestedCancellationWithMessageSimulateAction) {
    const { value, error } = exports.SellerRequestedCancellationWithMessageSimulateActionJoiSchema.validate(maybeSellerRequestedCancellationWithMessageSimulateAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('SellerRequestedCancellationWithMessageSimulateAction', maybeSellerRequestedCancellationWithMessageSimulateAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSellerRequestedCancellationWithMessageSimulateAction = validateSellerRequestedCancellationWithMessageSimulateAction;
