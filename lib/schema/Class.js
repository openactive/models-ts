"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateClass = exports.ClassOrSubClassJoiSchema = exports.ClassJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:Class - Validation schema (w/ JOI)
 */
exports.ClassJoiSchema = Joi.object({
    '@type': Joi.string().valid('Class').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:Class - Validation schema (w/ JOI)
 *
 * This differs from ClassJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ClassOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ClassJoiSchema,
]);
/**
 * Runtime validator for schema:Class.
 *
 * If some data has a structure which matches a schema:Class, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeClass = validateClass(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeClass instanceof OaValidationError) {
 *   // From this point on, `maybeClass` will have type `OaValidationError`
 *   const error = maybeClass;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeClass` will have type `Class`
 * const class = maybeClass;
 * ```
 */
function validateClass(maybeClass) {
    const { value, error } = exports.ClassJoiSchema.validate(maybeClass);
    if (error) {
        return new oaValidationError_1.OaValidationError('Class', maybeClass, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateClass = validateClass;
