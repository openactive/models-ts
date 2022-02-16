"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMerchantReturnPolicySeasonalOverride = exports.MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema = exports.MerchantReturnPolicySeasonalOverrideJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 */
exports.MerchantReturnPolicySeasonalOverrideJoiSchema = Joi.object({
    '@type': Joi.string().valid('MerchantReturnPolicySeasonalOverride').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    merchantReturnDays: Joi.alternatives().try(Joi.string().isoDate(), Joi.number().integer()),
    endDate: Joi.string().isoDate(),
    returnPolicyCategory: Joi.lazy(() => schema.MerchantReturnEnumerationJoiSchema),
    startDate: Joi.string().isoDate(),
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
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 *
 * This differs from MerchantReturnPolicySeasonalOverrideJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MerchantReturnPolicySeasonalOverrideJoiSchema,
]);
/**
 * Runtime validator for schema:MerchantReturnPolicySeasonalOverride.
 *
 * If some data has a structure which matches a schema:MerchantReturnPolicySeasonalOverride, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnPolicySeasonalOverride = validateMerchantReturnPolicySeasonalOverride(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnPolicySeasonalOverride instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `OaValidationError`
 *   const error = maybeMerchantReturnPolicySeasonalOverride;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `MerchantReturnPolicySeasonalOverride`
 * const merchantReturnPolicySeasonalOverride = maybeMerchantReturnPolicySeasonalOverride;
 * ```
 */
function validateMerchantReturnPolicySeasonalOverride(maybeMerchantReturnPolicySeasonalOverride) {
    const { value, error } = exports.MerchantReturnPolicySeasonalOverrideJoiSchema.validate(maybeMerchantReturnPolicySeasonalOverride);
    if (error) {
        return new oaValidationError_1.OaValidationError('MerchantReturnPolicySeasonalOverride', maybeMerchantReturnPolicySeasonalOverride, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMerchantReturnPolicySeasonalOverride = validateMerchantReturnPolicySeasonalOverride;
