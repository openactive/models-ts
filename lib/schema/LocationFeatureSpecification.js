"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLocationFeatureSpecification = exports.LocationFeatureSpecificationOrSubClassJoiSchema = exports.LocationFeatureSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:LocationFeatureSpecification - Validation schema (w/ JOI)
 */
exports.LocationFeatureSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('LocationFeatureSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    measurementTechnique: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    minValue: Joi.number(),
    unitText: Joi.string(),
    value: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.boolean(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    propertyID: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    maxValue: Joi.number(),
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
 * schema:LocationFeatureSpecification - Validation schema (w/ JOI)
 *
 * This differs from LocationFeatureSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.LocationFeatureSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.LocationFeatureSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:LocationFeatureSpecification.
 *
 * If some data has a structure which matches a schema:LocationFeatureSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLocationFeatureSpecification = validateLocationFeatureSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLocationFeatureSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeLocationFeatureSpecification` will have type `OaValidationError`
 *   const error = maybeLocationFeatureSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLocationFeatureSpecification` will have type `LocationFeatureSpecification`
 * const locationFeatureSpecification = maybeLocationFeatureSpecification;
 * ```
 */
function validateLocationFeatureSpecification(maybeLocationFeatureSpecification) {
    const { value, error } = exports.LocationFeatureSpecificationJoiSchema.validate(maybeLocationFeatureSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('LocationFeatureSpecification', maybeLocationFeatureSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateLocationFeatureSpecification = validateLocationFeatureSpecification;
