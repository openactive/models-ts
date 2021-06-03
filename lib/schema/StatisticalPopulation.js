"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatisticalPopulation = exports.StatisticalPopulationOrSubClassJoiSchema = exports.StatisticalPopulationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:StatisticalPopulation - Validation schema (w/ JOI)
 */
exports.StatisticalPopulationJoiSchema = Joi.object({
    '@type': Joi.string().valid('StatisticalPopulation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    numConstraints: Joi.number().integer(),
    constrainingProperty: Joi.number().integer(),
    populationType: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:StatisticalPopulation - Validation schema (w/ JOI)
 *
 * This differs from StatisticalPopulationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.StatisticalPopulationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.StatisticalPopulationJoiSchema,
]);
/**
 * Runtime validator for schema:StatisticalPopulation.
 *
 * If some data has a structure which matches a schema:StatisticalPopulation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStatisticalPopulation = validateStatisticalPopulation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStatisticalPopulation instanceof OaValidationError) {
 *   // From this point on, `maybeStatisticalPopulation` will have type `OaValidationError`
 *   const error = maybeStatisticalPopulation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStatisticalPopulation` will have type `StatisticalPopulation`
 * const statisticalPopulation = maybeStatisticalPopulation;
 * ```
 */
function validateStatisticalPopulation(maybeStatisticalPopulation) {
    const { value, error } = exports.StatisticalPopulationJoiSchema.validate(maybeStatisticalPopulation);
    if (error) {
        return new oaValidationError_1.OaValidationError('StatisticalPopulation', maybeStatisticalPopulation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateStatisticalPopulation = validateStatisticalPopulation;
