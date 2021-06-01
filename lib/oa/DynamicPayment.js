"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDynamicPayment = exports.DynamicPaymentOrSubClassJoiSchema = exports.DynamicPaymentJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * DynamicPayment - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.DynamicPaymentJoiSchema = Joi.object({
    '@type': Joi.string().valid('DynamicPayment').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    accountId: Joi.string(),
    additionalProperty: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
    paymentMethod: Joi.lazy(() => oa.PaymentMethodJoiSchema),
    paymentProviderId: Joi.string(),
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
 * DynamicPayment - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from DynamicPaymentJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DynamicPaymentOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DynamicPaymentJoiSchema,
]);
/**
 * Runtime validator for DynamicPayment.
 *
 * If some data has a structure which matches a DynamicPayment, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDynamicPayment = DynamicPayment.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDynamicPayment instanceof OaValidationError) {
 *   // From this point on, `maybeDynamicPayment` will have type `OaValidationError`
 *   const error = maybeDynamicPayment;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDynamicPayment` will have type `DynamicPayment`
 * const dynamicPayment = maybeDynamicPayment;
 * ```
 */
function validateDynamicPayment(maybeDynamicPayment) {
    const { value, error } = exports.DynamicPaymentJoiSchema.validate(maybeDynamicPayment);
    if (error) {
        return new oaValidationError_1.OaValidationError('DynamicPayment', maybeDynamicPayment, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDynamicPayment = validateDynamicPayment;
