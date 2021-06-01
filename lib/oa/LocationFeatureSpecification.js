"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLocationFeatureSpecification = exports.LocationFeatureSpecificationOrSubClassJoiSchema = exports.LocationFeatureSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * LocationFeatureSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 */
exports.LocationFeatureSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('LocationFeatureSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    value: Joi.boolean(),
    validFrom: Joi.string().isoDate(),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    validThrough: Joi.string().isoDate(),
    maxValue: Joi.number(),
    unitText: Joi.string(),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    valueReference: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    measurementTechnique: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    minValue: Joi.number(),
    propertyID: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
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
 * LocationFeatureSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from LocationFeatureSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.LocationFeatureSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.LocationFeatureSpecificationJoiSchema,
    Joi.lazy(() => oa.BabyChangingOrSubClassJoiSchema),
    Joi.lazy(() => oa.ChangingFacilitiesOrSubClassJoiSchema),
    Joi.lazy(() => oa.CrecheOrSubClassJoiSchema),
    Joi.lazy(() => oa.LockersOrSubClassJoiSchema),
    Joi.lazy(() => oa.ParkingOrSubClassJoiSchema),
    Joi.lazy(() => oa.ShowersOrSubClassJoiSchema),
    Joi.lazy(() => oa.ToiletsOrSubClassJoiSchema),
    Joi.lazy(() => oa.TowelsOrSubClassJoiSchema),
    Joi.lazy(() => oa.CafeOrSubClassJoiSchema),
    Joi.lazy(() => oa.BarOrSubClassJoiSchema),
]);
/**
 * Runtime validator for LocationFeatureSpecification.
 *
 * If some data has a structure which matches a LocationFeatureSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLocationFeatureSpecification = LocationFeatureSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
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
