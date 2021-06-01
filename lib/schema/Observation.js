"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObservation = exports.ObservationOrSubClassJoiSchema = exports.ObservationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:Observation - Validation schema (w/ JOI)
 */
exports.ObservationJoiSchema = Joi.object({
    '@type': Joi.string().valid('Observation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    marginOfError: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    observedNode: Joi.alternatives().try(Joi.lazy(() => schema.StatisticalPopulationOrSubClassJoiSchema), Joi.string().uri()),
    measuredProperty: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
    observationDate: Joi.string().isoDate(),
    measuredValue: Joi.lazy(() => schema.DataTypeOrSubClassJoiSchema),
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
 * schema:Observation - Validation schema (w/ JOI)
 *
 * This differs from ObservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ObservationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ObservationJoiSchema,
]);
/**
 * Runtime validator for schema:Observation.
 *
 * If some data has a structure which matches a schema:Observation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeObservation = Observation.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeObservation instanceof OaValidationError) {
 *   // From this point on, `maybeObservation` will have type `OaValidationError`
 *   const error = maybeObservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeObservation` will have type `Observation`
 * const observation = maybeObservation;
 * ```
 */
function validateObservation(maybeObservation) {
    const { value, error } = exports.ObservationJoiSchema.validate(maybeObservation);
    if (error) {
        return new oaValidationError_1.OaValidationError('Observation', maybeObservation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateObservation = validateObservation;