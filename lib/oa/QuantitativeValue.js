"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuantitativeValue = exports.QuantitativeValueOrSubClassJoiSchema = exports.QuantitativeValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * QuantitativeValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 */
exports.QuantitativeValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('QuantitativeValue').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    maxValue: Joi.number().integer(),
    minValue: Joi.number().integer(),
    unitText: Joi.string(),
    value: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.boolean(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    valueReference: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.string().uri()),
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
 * QuantitativeValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from QuantitativeValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.QuantitativeValueOrSubClassJoiSchema = Joi.alternatives().try([
    exports.QuantitativeValueJoiSchema,
]);
/**
 * Runtime validator for QuantitativeValue.
 *
 * If some data has a structure which matches a QuantitativeValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeQuantitativeValue = validateQuantitativeValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeQuantitativeValue instanceof OaValidationError) {
 *   // From this point on, `maybeQuantitativeValue` will have type `OaValidationError`
 *   const error = maybeQuantitativeValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeQuantitativeValue` will have type `QuantitativeValue`
 * const quantitativeValue = maybeQuantitativeValue;
 * ```
 */
function validateQuantitativeValue(maybeQuantitativeValue) {
    const { value, error } = exports.QuantitativeValueJoiSchema.validate(maybeQuantitativeValue);
    if (error) {
        return new oaValidationError_1.OaValidationError('QuantitativeValue', maybeQuantitativeValue, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateQuantitativeValue = validateQuantitativeValue;
