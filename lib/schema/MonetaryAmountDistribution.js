"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMonetaryAmountDistribution = exports.MonetaryAmountDistributionOrSubClassJoiSchema = exports.MonetaryAmountDistributionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MonetaryAmountDistribution - Validation schema (w/ JOI)
 */
exports.MonetaryAmountDistributionJoiSchema = Joi.object({
    '@type': Joi.string().valid('MonetaryAmountDistribution').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    currency: Joi.string(),
    median: Joi.number(),
    percentile75: Joi.number(),
    percentile25: Joi.number(),
    percentile10: Joi.number(),
    percentile90: Joi.number(),
    duration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
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
 * schema:MonetaryAmountDistribution - Validation schema (w/ JOI)
 *
 * This differs from MonetaryAmountDistributionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MonetaryAmountDistributionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MonetaryAmountDistributionJoiSchema,
]);
/**
 * Runtime validator for schema:MonetaryAmountDistribution.
 *
 * If some data has a structure which matches a schema:MonetaryAmountDistribution, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMonetaryAmountDistribution = validateMonetaryAmountDistribution(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMonetaryAmountDistribution instanceof OaValidationError) {
 *   // From this point on, `maybeMonetaryAmountDistribution` will have type `OaValidationError`
 *   const error = maybeMonetaryAmountDistribution;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMonetaryAmountDistribution` will have type `MonetaryAmountDistribution`
 * const monetaryAmountDistribution = maybeMonetaryAmountDistribution;
 * ```
 */
function validateMonetaryAmountDistribution(maybeMonetaryAmountDistribution) {
    const { value, error } = exports.MonetaryAmountDistributionJoiSchema.validate(maybeMonetaryAmountDistribution);
    if (error) {
        return new oaValidationError_1.OaValidationError('MonetaryAmountDistribution', maybeMonetaryAmountDistribution, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMonetaryAmountDistribution = validateMonetaryAmountDistribution;
