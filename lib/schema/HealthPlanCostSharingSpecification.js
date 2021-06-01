"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHealthPlanCostSharingSpecification = exports.HealthPlanCostSharingSpecificationOrSubClassJoiSchema = exports.HealthPlanCostSharingSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:HealthPlanCostSharingSpecification - Validation schema (w/ JOI)
 */
exports.HealthPlanCostSharingSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('HealthPlanCostSharingSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    healthPlanCopay: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    healthPlanCopayOption: Joi.string(),
    healthPlanPharmacyCategory: Joi.string(),
    healthPlanCoinsuranceRate: Joi.number(),
    healthPlanCoinsuranceOption: Joi.string(),
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
 * schema:HealthPlanCostSharingSpecification - Validation schema (w/ JOI)
 *
 * This differs from HealthPlanCostSharingSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.HealthPlanCostSharingSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.HealthPlanCostSharingSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:HealthPlanCostSharingSpecification.
 *
 * If some data has a structure which matches a schema:HealthPlanCostSharingSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHealthPlanCostSharingSpecification = HealthPlanCostSharingSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHealthPlanCostSharingSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeHealthPlanCostSharingSpecification` will have type `OaValidationError`
 *   const error = maybeHealthPlanCostSharingSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHealthPlanCostSharingSpecification` will have type `HealthPlanCostSharingSpecification`
 * const healthPlanCostSharingSpecification = maybeHealthPlanCostSharingSpecification;
 * ```
 */
function validateHealthPlanCostSharingSpecification(maybeHealthPlanCostSharingSpecification) {
    const { value, error } = exports.HealthPlanCostSharingSpecificationJoiSchema.validate(maybeHealthPlanCostSharingSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('HealthPlanCostSharingSpecification', maybeHealthPlanCostSharingSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateHealthPlanCostSharingSpecification = validateHealthPlanCostSharingSpecification;
