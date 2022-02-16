"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProperty = exports.PropertyOrSubClassJoiSchema = exports.PropertyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:Property - Validation schema (w/ JOI)
 */
exports.PropertyJoiSchema = Joi.object({
    '@type': Joi.string().valid('Property').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    domainIncludes: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.string().uri()),
    rangeIncludes: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.string().uri()),
    inverseOf: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
    supersededBy: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
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
 * schema:Property - Validation schema (w/ JOI)
 *
 * This differs from PropertyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PropertyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PropertyJoiSchema,
]);
/**
 * Runtime validator for schema:Property.
 *
 * If some data has a structure which matches a schema:Property, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProperty = validateProperty(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProperty instanceof OaValidationError) {
 *   // From this point on, `maybeProperty` will have type `OaValidationError`
 *   const error = maybeProperty;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProperty` will have type `Property`
 * const property = maybeProperty;
 * ```
 */
function validateProperty(maybeProperty) {
    const { value, error } = exports.PropertyJoiSchema.validate(maybeProperty);
    if (error) {
        return new oaValidationError_1.OaValidationError('Property', maybeProperty, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateProperty = validateProperty;
