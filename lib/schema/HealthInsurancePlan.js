"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHealthInsurancePlan = exports.HealthInsurancePlanOrSubClassJoiSchema = exports.HealthInsurancePlanJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:HealthInsurancePlan - Validation schema (w/ JOI)
 */
exports.HealthInsurancePlanJoiSchema = Joi.object({
    '@type': Joi.string().valid('HealthInsurancePlan').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    contactPoint: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    healthPlanDrugOption: Joi.string(),
    healthPlanMarketingUrl: Joi.string().uri(),
    usesHealthPlanIdStandard: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    benefitsSummaryUrl: Joi.string().uri(),
    healthPlanId: Joi.string(),
    includesHealthPlanNetwork: Joi.alternatives().try(Joi.lazy(() => schema.HealthPlanNetworkOrSubClassJoiSchema), Joi.string().uri()),
    healthPlanDrugTier: Joi.string(),
    includesHealthPlanFormulary: Joi.alternatives().try(Joi.lazy(() => schema.HealthPlanFormularyOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:HealthInsurancePlan - Validation schema (w/ JOI)
 *
 * This differs from HealthInsurancePlanJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.HealthInsurancePlanOrSubClassJoiSchema = Joi.alternatives().try([
    exports.HealthInsurancePlanJoiSchema,
]);
/**
 * Runtime validator for schema:HealthInsurancePlan.
 *
 * If some data has a structure which matches a schema:HealthInsurancePlan, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHealthInsurancePlan = validateHealthInsurancePlan(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHealthInsurancePlan instanceof OaValidationError) {
 *   // From this point on, `maybeHealthInsurancePlan` will have type `OaValidationError`
 *   const error = maybeHealthInsurancePlan;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHealthInsurancePlan` will have type `HealthInsurancePlan`
 * const healthInsurancePlan = maybeHealthInsurancePlan;
 * ```
 */
function validateHealthInsurancePlan(maybeHealthInsurancePlan) {
    const { value, error } = exports.HealthInsurancePlanJoiSchema.validate(maybeHealthInsurancePlan);
    if (error) {
        return new oaValidationError_1.OaValidationError('HealthInsurancePlan', maybeHealthInsurancePlan, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateHealthInsurancePlan = validateHealthInsurancePlan;
