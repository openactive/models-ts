"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePaymentMethod = exports.PaymentMethodOrSubClassJoiSchema = exports.PaymentMethodJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PaymentMethod - Validation schema (w/ JOI)
 */
exports.PaymentMethodJoiSchema = Joi.object({
    '@type': Joi.string().valid('PaymentMethod').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    paymentMethodType: Joi.lazy(() => schema.PaymentMethodTypeJoiSchema),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:PaymentMethod - Validation schema (w/ JOI)
 *
 * This differs from PaymentMethodJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PaymentMethodOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PaymentMethodJoiSchema,
    Joi.lazy(() => schema.PaymentCardOrSubClassJoiSchema),
    Joi.lazy(() => schema.PaymentServiceOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:PaymentMethod.
 *
 * If some data has a structure which matches a schema:PaymentMethod, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentMethod = validatePaymentMethod(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentMethod instanceof OaValidationError) {
 *   // From this point on, `maybePaymentMethod` will have type `OaValidationError`
 *   const error = maybePaymentMethod;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentMethod` will have type `PaymentMethod`
 * const paymentMethod = maybePaymentMethod;
 * ```
 */
function validatePaymentMethod(maybePaymentMethod) {
    const { value, error } = exports.PaymentMethodJoiSchema.validate(maybePaymentMethod);
    if (error) {
        return new oaValidationError_1.OaValidationError('PaymentMethod', maybePaymentMethod, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePaymentMethod = validatePaymentMethod;
