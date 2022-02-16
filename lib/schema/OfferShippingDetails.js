"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOfferShippingDetails = exports.OfferShippingDetailsOrSubClassJoiSchema = exports.OfferShippingDetailsJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:OfferShippingDetails - Validation schema (w/ JOI)
 */
exports.OfferShippingDetailsJoiSchema = Joi.object({
    '@type': Joi.string().valid('OfferShippingDetails').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    shippingLabel: Joi.string(),
    doesNotShip: Joi.boolean(),
    shippingDestination: Joi.alternatives().try(Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema), Joi.string().uri()),
    shippingRate: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    shippingSettingsLink: Joi.string().uri(),
    deliveryTime: Joi.alternatives().try(Joi.lazy(() => schema.ShippingDeliveryTimeOrSubClassJoiSchema), Joi.string().uri()),
    transitTimeLabel: Joi.string(),
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
 * schema:OfferShippingDetails - Validation schema (w/ JOI)
 *
 * This differs from OfferShippingDetailsJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OfferShippingDetailsOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OfferShippingDetailsJoiSchema,
]);
/**
 * Runtime validator for schema:OfferShippingDetails.
 *
 * If some data has a structure which matches a schema:OfferShippingDetails, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferShippingDetails = validateOfferShippingDetails(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferShippingDetails instanceof OaValidationError) {
 *   // From this point on, `maybeOfferShippingDetails` will have type `OaValidationError`
 *   const error = maybeOfferShippingDetails;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferShippingDetails` will have type `OfferShippingDetails`
 * const offerShippingDetails = maybeOfferShippingDetails;
 * ```
 */
function validateOfferShippingDetails(maybeOfferShippingDetails) {
    const { value, error } = exports.OfferShippingDetailsJoiSchema.validate(maybeOfferShippingDetails);
    if (error) {
        return new oaValidationError_1.OaValidationError('OfferShippingDetails', maybeOfferShippingDetails, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOfferShippingDetails = validateOfferShippingDetails;
