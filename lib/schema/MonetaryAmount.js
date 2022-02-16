"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMonetaryAmount = exports.MonetaryAmountOrSubClassJoiSchema = exports.MonetaryAmountJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MonetaryAmount - Validation schema (w/ JOI)
 */
exports.MonetaryAmountJoiSchema = Joi.object({
    '@type': Joi.string().valid('MonetaryAmount').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    minValue: Joi.number(),
    validFrom: Joi.string().isoDate(),
    value: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.boolean(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    validThrough: Joi.string().isoDate(),
    maxValue: Joi.number(),
    currency: Joi.string(),
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
 * schema:MonetaryAmount - Validation schema (w/ JOI)
 *
 * This differs from MonetaryAmountJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MonetaryAmountOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MonetaryAmountJoiSchema,
]);
/**
 * Runtime validator for schema:MonetaryAmount.
 *
 * If some data has a structure which matches a schema:MonetaryAmount, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMonetaryAmount = validateMonetaryAmount(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMonetaryAmount instanceof OaValidationError) {
 *   // From this point on, `maybeMonetaryAmount` will have type `OaValidationError`
 *   const error = maybeMonetaryAmount;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMonetaryAmount` will have type `MonetaryAmount`
 * const monetaryAmount = maybeMonetaryAmount;
 * ```
 */
function validateMonetaryAmount(maybeMonetaryAmount) {
    const { value, error } = exports.MonetaryAmountJoiSchema.validate(maybeMonetaryAmount);
    if (error) {
        return new oaValidationError_1.OaValidationError('MonetaryAmount', maybeMonetaryAmount, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMonetaryAmount = validateMonetaryAmount;
