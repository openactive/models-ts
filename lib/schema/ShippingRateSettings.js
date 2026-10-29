"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateShippingRateSettings = exports.ShippingRateSettingsOrSubClassJoiSchema = exports.ShippingRateSettingsJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ShippingRateSettings - Validation schema (w/ JOI)
 */
exports.ShippingRateSettingsJoiSchema = Joi.object({
    '@type': Joi.string().valid('ShippingRateSettings').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    doesNotShip: Joi.boolean(),
    freeShippingThreshold: Joi.alternatives().try(Joi.lazy(() => schema.DeliveryChargeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    isUnlabelledFallback: Joi.boolean(),
    minimumOrderValue: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    orderPercentage: Joi.number(),
    shippingDestination: Joi.alternatives().try(Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema), Joi.string().uri()),
    shippingLabel: Joi.string(),
    shippingRate: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.ShippingRateSettingsOrSubClassJoiSchema), Joi.string().uri()),
    weightPercentage: Joi.number(),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:ShippingRateSettings - Validation schema (w/ JOI)
 *
 * This differs from ShippingRateSettingsJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ShippingRateSettingsOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ShippingRateSettingsJoiSchema,
]);
/**
 * Runtime validator for schema:ShippingRateSettings.
 *
 * If some data has a structure which matches a schema:ShippingRateSettings, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeShippingRateSettings = validateShippingRateSettings(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeShippingRateSettings instanceof OaValidationError) {
 *   // From this point on, `maybeShippingRateSettings` will have type `OaValidationError`
 *   const error = maybeShippingRateSettings;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeShippingRateSettings` will have type `ShippingRateSettings`
 * const shippingRateSettings = maybeShippingRateSettings;
 * ```
 */
function validateShippingRateSettings(maybeShippingRateSettings) {
    const { value, error } = exports.ShippingRateSettingsJoiSchema.validate(maybeShippingRateSettings);
    if (error) {
        return new oaValidationError_1.OaValidationError('ShippingRateSettings', maybeShippingRateSettings, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateShippingRateSettings = validateShippingRateSettings;
