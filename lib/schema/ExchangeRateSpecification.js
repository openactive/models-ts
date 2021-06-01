"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExchangeRateSpecification = exports.ExchangeRateSpecificationOrSubClassJoiSchema = exports.ExchangeRateSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ExchangeRateSpecification - Validation schema (w/ JOI)
 */
exports.ExchangeRateSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('ExchangeRateSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    currentExchangeRate: Joi.alternatives().try(Joi.lazy(() => schema.UnitPriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    exchangeRateSpread: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    currency: Joi.string(),
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
 * schema:ExchangeRateSpecification - Validation schema (w/ JOI)
 *
 * This differs from ExchangeRateSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ExchangeRateSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ExchangeRateSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:ExchangeRateSpecification.
 *
 * If some data has a structure which matches a schema:ExchangeRateSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeExchangeRateSpecification = ExchangeRateSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeExchangeRateSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeExchangeRateSpecification` will have type `OaValidationError`
 *   const error = maybeExchangeRateSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeExchangeRateSpecification` will have type `ExchangeRateSpecification`
 * const exchangeRateSpecification = maybeExchangeRateSpecification;
 * ```
 */
function validateExchangeRateSpecification(maybeExchangeRateSpecification) {
    const { value, error } = exports.ExchangeRateSpecificationJoiSchema.validate(maybeExchangeRateSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('ExchangeRateSpecification', maybeExchangeRateSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateExchangeRateSpecification = validateExchangeRateSpecification;
