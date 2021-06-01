"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePriceSpecification = exports.PriceSpecificationOrSubClassJoiSchema = exports.PriceSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PriceSpecification - Validation schema (w/ JOI)
 */
exports.PriceSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('PriceSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:PriceSpecification - Validation schema (w/ JOI)
 *
 * This differs from PriceSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PriceSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PriceSpecificationJoiSchema,
    Joi.lazy(() => schema.DeliveryChargeSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.CompoundPriceSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.UnitPriceSpecificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.PaymentChargeSpecificationOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:PriceSpecification.
 *
 * If some data has a structure which matches a schema:PriceSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePriceSpecification = PriceSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePriceSpecification instanceof OaValidationError) {
 *   // From this point on, `maybePriceSpecification` will have type `OaValidationError`
 *   const error = maybePriceSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePriceSpecification` will have type `PriceSpecification`
 * const priceSpecification = maybePriceSpecification;
 * ```
 */
function validatePriceSpecification(maybePriceSpecification) {
    const { value, error } = exports.PriceSpecificationJoiSchema.validate(maybePriceSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('PriceSpecification', maybePriceSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePriceSpecification = validatePriceSpecification;
