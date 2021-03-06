"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuantitativeValue = exports.QuantitativeValueOrSubClassJoiSchema = exports.QuantitativeValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:QuantitativeValue - Validation schema (w/ JOI)
 */
exports.QuantitativeValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('QuantitativeValue').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    maxValue: Joi.number(),
    unitText: Joi.string(),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    valueReference: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    minValue: Joi.number(),
    value: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.boolean(), Joi.string(), Joi.string().uri()),
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
 * schema:QuantitativeValue - Validation schema (w/ JOI)
 *
 * This differs from QuantitativeValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.QuantitativeValueOrSubClassJoiSchema = Joi.alternatives().try([
    exports.QuantitativeValueJoiSchema,
]);
/**
 * Runtime validator for schema:QuantitativeValue.
 *
 * If some data has a structure which matches a schema:QuantitativeValue, it will be returned with the correct type.
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
