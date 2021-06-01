"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuantity = exports.QuantityOrSubClassJoiSchema = exports.QuantityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Quantity - Validation schema (w/ JOI)
 */
exports.QuantityJoiSchema = Joi.object({
    '@type': Joi.string().valid('Quantity').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:Quantity - Validation schema (w/ JOI)
 *
 * This differs from QuantityJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.QuantityOrSubClassJoiSchema = Joi.alternatives().try([
    exports.QuantityJoiSchema,
    Joi.lazy(() => schema.MassOrSubClassJoiSchema),
    Joi.lazy(() => schema.DurationOrSubClassJoiSchema),
    Joi.lazy(() => schema.EnergyOrSubClassJoiSchema),
    Joi.lazy(() => schema.DistanceOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Quantity.
 *
 * If some data has a structure which matches a schema:Quantity, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeQuantity = Quantity.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeQuantity instanceof OaValidationError) {
 *   // From this point on, `maybeQuantity` will have type `OaValidationError`
 *   const error = maybeQuantity;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeQuantity` will have type `Quantity`
 * const quantity = maybeQuantity;
 * ```
 */
function validateQuantity(maybeQuantity) {
    const { value, error } = exports.QuantityJoiSchema.validate(maybeQuantity);
    if (error) {
        return new oaValidationError_1.OaValidationError('Quantity', maybeQuantity, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateQuantity = validateQuantity;
