"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParcelDelivery = exports.ParcelDeliveryOrSubClassJoiSchema = exports.ParcelDeliveryJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ParcelDelivery - Validation schema (w/ JOI)
 */
exports.ParcelDeliveryJoiSchema = Joi.object({
    '@type': Joi.string().valid('ParcelDelivery').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    trackingNumber: Joi.string(),
    itemShipped: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    trackingUrl: Joi.string().uri(),
    expectedArrivalFrom: Joi.string().isoDate(),
    expectedArrivalUntil: Joi.string().isoDate(),
    deliveryAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    hasDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    carrier: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    originAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    deliveryStatus: Joi.alternatives().try(Joi.lazy(() => schema.DeliveryEventOrSubClassJoiSchema), Joi.string().uri()),
    partOfOrder: Joi.alternatives().try(Joi.lazy(() => schema.OrderOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ParcelDelivery - Validation schema (w/ JOI)
 *
 * This differs from ParcelDeliveryJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ParcelDeliveryOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ParcelDeliveryJoiSchema,
]);
/**
 * Runtime validator for schema:ParcelDelivery.
 *
 * If some data has a structure which matches a schema:ParcelDelivery, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParcelDelivery = validateParcelDelivery(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParcelDelivery instanceof OaValidationError) {
 *   // From this point on, `maybeParcelDelivery` will have type `OaValidationError`
 *   const error = maybeParcelDelivery;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParcelDelivery` will have type `ParcelDelivery`
 * const parcelDelivery = maybeParcelDelivery;
 * ```
 */
function validateParcelDelivery(maybeParcelDelivery) {
    const { value, error } = exports.ParcelDeliveryJoiSchema.validate(maybeParcelDelivery);
    if (error) {
        return new oaValidationError_1.OaValidationError('ParcelDelivery', maybeParcelDelivery, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateParcelDelivery = validateParcelDelivery;
