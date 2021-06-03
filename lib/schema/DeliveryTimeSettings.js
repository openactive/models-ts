"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeliveryTimeSettings = exports.DeliveryTimeSettingsOrSubClassJoiSchema = exports.DeliveryTimeSettingsJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:DeliveryTimeSettings - Validation schema (w/ JOI)
 */
exports.DeliveryTimeSettingsJoiSchema = Joi.object({
    '@type': Joi.string().valid('DeliveryTimeSettings').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    isUnlabelledFallback: Joi.boolean(),
    shippingDestination: Joi.alternatives().try(Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema), Joi.string().uri()),
    transitTimeLabel: Joi.string(),
    deliveryTime: Joi.alternatives().try(Joi.lazy(() => schema.ShippingDeliveryTimeOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:DeliveryTimeSettings - Validation schema (w/ JOI)
 *
 * This differs from DeliveryTimeSettingsJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DeliveryTimeSettingsOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DeliveryTimeSettingsJoiSchema,
]);
/**
 * Runtime validator for schema:DeliveryTimeSettings.
 *
 * If some data has a structure which matches a schema:DeliveryTimeSettings, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDeliveryTimeSettings = validateDeliveryTimeSettings(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDeliveryTimeSettings instanceof OaValidationError) {
 *   // From this point on, `maybeDeliveryTimeSettings` will have type `OaValidationError`
 *   const error = maybeDeliveryTimeSettings;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDeliveryTimeSettings` will have type `DeliveryTimeSettings`
 * const deliveryTimeSettings = maybeDeliveryTimeSettings;
 * ```
 */
function validateDeliveryTimeSettings(maybeDeliveryTimeSettings) {
    const { value, error } = exports.DeliveryTimeSettingsJoiSchema.validate(maybeDeliveryTimeSettings);
    if (error) {
        return new oaValidationError_1.OaValidationError('DeliveryTimeSettings', maybeDeliveryTimeSettings, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDeliveryTimeSettings = validateDeliveryTimeSettings;
