"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStructuredValue = exports.StructuredValueOrSubClassJoiSchema = exports.StructuredValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:StructuredValue - Validation schema (w/ JOI)
 */
exports.StructuredValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('StructuredValue').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:StructuredValue - Validation schema (w/ JOI)
 *
 * This differs from StructuredValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.StructuredValueOrSubClassJoiSchema = Joi.alternatives().try([
    exports.StructuredValueJoiSchema,
    Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema),
    Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema),
    Joi.lazy(() => schema.NutritionInformationOrSubClassJoiSchema),
    Joi.lazy(() => schema.QuantitativeValueDistributionOrSubClassJoiSchema),
    Joi.lazy(() => schema.OwnershipInfoOrSubClassJoiSchema),
    Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema),
    Joi.lazy(() => schema.EngineSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.DeliveryTimeSettingsOrSubClassJoiSchema),
    Joi.lazy(() => schema.PostalCodeRangeSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema),
    Joi.lazy(() => schema.OfferShippingDetailsOrSubClassJoiSchema),
    Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema),
    Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema),
    Joi.lazy(() => schema.RepaymentSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.ShippingDeliveryTimeOrSubClassJoiSchema),
    Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema),
    Joi.lazy(() => schema.DatedMoneySpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.CDCPMDRecordOrSubClassJoiSchema),
    Joi.lazy(() => schema.ExchangeRateSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.ShippingRateSettingsOrSubClassJoiSchema),
    Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema),
    Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema),
    Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:StructuredValue.
 *
 * If some data has a structure which matches a schema:StructuredValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStructuredValue = validateStructuredValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStructuredValue instanceof OaValidationError) {
 *   // From this point on, `maybeStructuredValue` will have type `OaValidationError`
 *   const error = maybeStructuredValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStructuredValue` will have type `StructuredValue`
 * const structuredValue = maybeStructuredValue;
 * ```
 */
function validateStructuredValue(maybeStructuredValue) {
    const { value, error } = exports.StructuredValueJoiSchema.validate(maybeStructuredValue);
    if (error) {
        return new oaValidationError_1.OaValidationError('StructuredValue', maybeStructuredValue, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateStructuredValue = validateStructuredValue;
