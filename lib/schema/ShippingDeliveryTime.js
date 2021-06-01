"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateShippingDeliveryTime = exports.ShippingDeliveryTimeOrSubClassJoiSchema = exports.ShippingDeliveryTimeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ShippingDeliveryTime - Validation schema (w/ JOI)
 */
exports.ShippingDeliveryTimeJoiSchema = Joi.object({
    '@type': Joi.string().valid('ShippingDeliveryTime').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    handlingTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    businessDays: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    cutoffTime: Joi.string(),
    transitTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ShippingDeliveryTime - Validation schema (w/ JOI)
 *
 * This differs from ShippingDeliveryTimeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ShippingDeliveryTimeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ShippingDeliveryTimeJoiSchema,
]);
/**
 * Runtime validator for schema:ShippingDeliveryTime.
 *
 * If some data has a structure which matches a schema:ShippingDeliveryTime, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeShippingDeliveryTime = ShippingDeliveryTime.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeShippingDeliveryTime instanceof OaValidationError) {
 *   // From this point on, `maybeShippingDeliveryTime` will have type `OaValidationError`
 *   const error = maybeShippingDeliveryTime;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeShippingDeliveryTime` will have type `ShippingDeliveryTime`
 * const shippingDeliveryTime = maybeShippingDeliveryTime;
 * ```
 */
function validateShippingDeliveryTime(maybeShippingDeliveryTime) {
    const { value, error } = exports.ShippingDeliveryTimeJoiSchema.validate(maybeShippingDeliveryTime);
    if (error) {
        return new oaValidationError_1.OaValidationError('ShippingDeliveryTime', maybeShippingDeliveryTime, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateShippingDeliveryTime = validateShippingDeliveryTime;
