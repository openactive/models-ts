"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMerchantReturnPolicy = exports.MerchantReturnPolicyOrSubClassJoiSchema = exports.MerchantReturnPolicyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MerchantReturnPolicy - Validation schema (w/ JOI)
 */
exports.MerchantReturnPolicyJoiSchema = Joi.object({
    '@type': Joi.string().valid('MerchantReturnPolicy').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    customerRemorseReturnFees: Joi.lazy(() => schema.ReturnFeesEnumerationJoiSchema),
    customerRemorseReturnShippingFeesAmount: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    inStoreReturnsOffered: Joi.boolean(),
    itemDefectReturnShippingFeesAmount: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    returnFees: Joi.lazy(() => schema.ReturnFeesEnumerationJoiSchema),
    merchantReturnLink: Joi.string().uri(),
    itemDefectReturnLabelSource: Joi.lazy(() => schema.ReturnLabelSourceEnumerationJoiSchema),
    merchantReturnDays: Joi.alternatives().try(Joi.string().isoDate(), Joi.number().integer()),
    returnLabelSource: Joi.lazy(() => schema.ReturnLabelSourceEnumerationJoiSchema),
    returnPolicySeasonalOverride: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema), Joi.string().uri()),
    refundType: Joi.lazy(() => schema.RefundTypeEnumerationJoiSchema),
    returnPolicyCategory: Joi.lazy(() => schema.MerchantReturnEnumerationJoiSchema),
    returnPolicyCountry: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    itemDefectReturnFees: Joi.lazy(() => schema.ReturnFeesEnumerationJoiSchema),
    returnMethod: Joi.lazy(() => schema.ReturnMethodEnumerationJoiSchema),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    restockingFee: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    returnShippingFeesAmount: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    customerRemorseReturnLabelSource: Joi.lazy(() => schema.ReturnLabelSourceEnumerationJoiSchema),
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
 * schema:MerchantReturnPolicy - Validation schema (w/ JOI)
 *
 * This differs from MerchantReturnPolicyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MerchantReturnPolicyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MerchantReturnPolicyJoiSchema,
]);
/**
 * Runtime validator for schema:MerchantReturnPolicy.
 *
 * If some data has a structure which matches a schema:MerchantReturnPolicy, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnPolicy = validateMerchantReturnPolicy(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnPolicy instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnPolicy` will have type `OaValidationError`
 *   const error = maybeMerchantReturnPolicy;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnPolicy` will have type `MerchantReturnPolicy`
 * const merchantReturnPolicy = maybeMerchantReturnPolicy;
 * ```
 */
function validateMerchantReturnPolicy(maybeMerchantReturnPolicy) {
    const { value, error } = exports.MerchantReturnPolicyJoiSchema.validate(maybeMerchantReturnPolicy);
    if (error) {
        return new oaValidationError_1.OaValidationError('MerchantReturnPolicy', maybeMerchantReturnPolicy, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMerchantReturnPolicy = validateMerchantReturnPolicy;
