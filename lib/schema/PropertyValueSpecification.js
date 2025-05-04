"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePropertyValueSpecification = exports.PropertyValueSpecificationOrSubClassJoiSchema = exports.PropertyValueSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PropertyValueSpecification - Validation schema (w/ JOI)
 */
exports.PropertyValueSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('PropertyValueSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    multipleValues: Joi.boolean(),
    valueMaxLength: Joi.number(),
    readonlyValue: Joi.boolean(),
    valueMinLength: Joi.number(),
    valuePattern: Joi.string(),
    valueRequired: Joi.boolean(),
    minValue: Joi.number(),
    valueName: Joi.string(),
    stepValue: Joi.number(),
    maxValue: Joi.number(),
    defaultValue: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
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
 * schema:PropertyValueSpecification - Validation schema (w/ JOI)
 *
 * This differs from PropertyValueSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PropertyValueSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PropertyValueSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:PropertyValueSpecification.
 *
 * If some data has a structure which matches a schema:PropertyValueSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePropertyValueSpecification = validatePropertyValueSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePropertyValueSpecification instanceof OaValidationError) {
 *   // From this point on, `maybePropertyValueSpecification` will have type `OaValidationError`
 *   const error = maybePropertyValueSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePropertyValueSpecification` will have type `PropertyValueSpecification`
 * const propertyValueSpecification = maybePropertyValueSpecification;
 * ```
 */
function validatePropertyValueSpecification(maybePropertyValueSpecification) {
    const { value, error } = exports.PropertyValueSpecificationJoiSchema.validate(maybePropertyValueSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('PropertyValueSpecification', maybePropertyValueSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePropertyValueSpecification = validatePropertyValueSpecification;
