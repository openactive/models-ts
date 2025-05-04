"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePaymentChargeSpecification = exports.PaymentChargeSpecificationOrSubClassJoiSchema = exports.PaymentChargeSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PaymentChargeSpecification - Validation schema (w/ JOI)
 */
exports.PaymentChargeSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('PaymentChargeSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    appliesToDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    appliesToPaymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
    valueAddedTaxIncluded: Joi.boolean(),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    priceCurrency: Joi.string(),
    price: Joi.alternatives().try(Joi.number(), Joi.string()),
    maxPrice: Joi.number(),
    minPrice: Joi.number(),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:PaymentChargeSpecification - Validation schema (w/ JOI)
 *
 * This differs from PaymentChargeSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PaymentChargeSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PaymentChargeSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:PaymentChargeSpecification.
 *
 * If some data has a structure which matches a schema:PaymentChargeSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentChargeSpecification = validatePaymentChargeSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentChargeSpecification instanceof OaValidationError) {
 *   // From this point on, `maybePaymentChargeSpecification` will have type `OaValidationError`
 *   const error = maybePaymentChargeSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentChargeSpecification` will have type `PaymentChargeSpecification`
 * const paymentChargeSpecification = maybePaymentChargeSpecification;
 * ```
 */
function validatePaymentChargeSpecification(maybePaymentChargeSpecification) {
    const { value, error } = exports.PaymentChargeSpecificationJoiSchema.validate(maybePaymentChargeSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('PaymentChargeSpecification', maybePaymentChargeSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePaymentChargeSpecification = validatePaymentChargeSpecification;
