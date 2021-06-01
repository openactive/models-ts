"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeliveryChargeSpecification = exports.DeliveryChargeSpecificationOrSubClassJoiSchema = exports.DeliveryChargeSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:DeliveryChargeSpecification - Validation schema (w/ JOI)
 */
exports.DeliveryChargeSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('DeliveryChargeSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    eligibleRegion: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    appliesToDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    validFrom: Joi.string().isoDate(),
    price: Joi.alternatives().try(Joi.number(), Joi.string()),
    minPrice: Joi.number(),
    maxPrice: Joi.number(),
    priceCurrency: Joi.string(),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    valueAddedTaxIncluded: Joi.boolean(),
    validThrough: Joi.string().isoDate(),
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
 * schema:DeliveryChargeSpecification - Validation schema (w/ JOI)
 *
 * This differs from DeliveryChargeSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DeliveryChargeSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DeliveryChargeSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:DeliveryChargeSpecification.
 *
 * If some data has a structure which matches a schema:DeliveryChargeSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDeliveryChargeSpecification = DeliveryChargeSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDeliveryChargeSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeDeliveryChargeSpecification` will have type `OaValidationError`
 *   const error = maybeDeliveryChargeSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDeliveryChargeSpecification` will have type `DeliveryChargeSpecification`
 * const deliveryChargeSpecification = maybeDeliveryChargeSpecification;
 * ```
 */
function validateDeliveryChargeSpecification(maybeDeliveryChargeSpecification) {
    const { value, error } = exports.DeliveryChargeSpecificationJoiSchema.validate(maybeDeliveryChargeSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('DeliveryChargeSpecification', maybeDeliveryChargeSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDeliveryChargeSpecification = validateDeliveryChargeSpecification;
