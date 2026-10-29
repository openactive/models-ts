"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatisticalVariable = exports.StatisticalVariableOrSubClassJoiSchema = exports.StatisticalVariableJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:StatisticalVariable - Validation schema (w/ JOI)
 */
exports.StatisticalVariableJoiSchema = Joi.object({
    '@type': Joi.string().valid('StatisticalVariable').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    measuredProperty: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
    measurementDenominator: Joi.alternatives().try(Joi.lazy(() => schema.StatisticalVariableOrSubClassJoiSchema), Joi.string().uri()),
    measurementMethod: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementMethodEnumJoiSchema), Joi.string(), Joi.string().uri()),
    measurementQualifier: Joi.alternatives().try(Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.string().uri()),
    measurementTechnique: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementMethodEnumJoiSchema), Joi.string(), Joi.string().uri()),
    populationType: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.string().uri()),
    statType: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string(), Joi.string().uri()),
    constraintProperty: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
    numConstraints: Joi.number().integer(),
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
 * schema:StatisticalVariable - Validation schema (w/ JOI)
 *
 * This differs from StatisticalVariableJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.StatisticalVariableOrSubClassJoiSchema = Joi.alternatives().try([
    exports.StatisticalVariableJoiSchema,
]);
/**
 * Runtime validator for schema:StatisticalVariable.
 *
 * If some data has a structure which matches a schema:StatisticalVariable, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStatisticalVariable = validateStatisticalVariable(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStatisticalVariable instanceof OaValidationError) {
 *   // From this point on, `maybeStatisticalVariable` will have type `OaValidationError`
 *   const error = maybeStatisticalVariable;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStatisticalVariable` will have type `StatisticalVariable`
 * const statisticalVariable = maybeStatisticalVariable;
 * ```
 */
function validateStatisticalVariable(maybeStatisticalVariable) {
    const { value, error } = exports.StatisticalVariableJoiSchema.validate(maybeStatisticalVariable);
    if (error) {
        return new oaValidationError_1.OaValidationError('StatisticalVariable', maybeStatisticalVariable, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateStatisticalVariable = validateStatisticalVariable;
