"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEngineSpecification = exports.EngineSpecificationOrSubClassJoiSchema = exports.EngineSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EngineSpecification - Validation schema (w/ JOI)
 */
exports.EngineSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('EngineSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    fuelType: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string().uri(), Joi.string()),
    engineType: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string()),
    engineDisplacement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    enginePower: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    torque: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:EngineSpecification - Validation schema (w/ JOI)
 *
 * This differs from EngineSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EngineSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EngineSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:EngineSpecification.
 *
 * If some data has a structure which matches a schema:EngineSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEngineSpecification = EngineSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEngineSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeEngineSpecification` will have type `OaValidationError`
 *   const error = maybeEngineSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEngineSpecification` will have type `EngineSpecification`
 * const engineSpecification = maybeEngineSpecification;
 * ```
 */
function validateEngineSpecification(maybeEngineSpecification) {
    const { value, error } = exports.EngineSpecificationJoiSchema.validate(maybeEngineSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('EngineSpecification', maybeEngineSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEngineSpecification = validateEngineSpecification;
