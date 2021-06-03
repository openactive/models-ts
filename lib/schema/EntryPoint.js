"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntryPoint = exports.EntryPointOrSubClassJoiSchema = exports.EntryPointJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EntryPoint - Validation schema (w/ JOI)
 */
exports.EntryPointJoiSchema = Joi.object({
    '@type': Joi.string().valid('EntryPoint').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    contentType: Joi.string(),
    application: Joi.alternatives().try(Joi.lazy(() => schema.SoftwareApplicationOrSubClassJoiSchema), Joi.string().uri()),
    encodingType: Joi.string(),
    actionApplication: Joi.alternatives().try(Joi.lazy(() => schema.SoftwareApplicationOrSubClassJoiSchema), Joi.string().uri()),
    httpMethod: Joi.string(),
    actionPlatform: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    urlTemplate: Joi.string(),
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
 * schema:EntryPoint - Validation schema (w/ JOI)
 *
 * This differs from EntryPointJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EntryPointOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EntryPointJoiSchema,
]);
/**
 * Runtime validator for schema:EntryPoint.
 *
 * If some data has a structure which matches a schema:EntryPoint, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEntryPoint = validateEntryPoint(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEntryPoint instanceof OaValidationError) {
 *   // From this point on, `maybeEntryPoint` will have type `OaValidationError`
 *   const error = maybeEntryPoint;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEntryPoint` will have type `EntryPoint`
 * const entryPoint = maybeEntryPoint;
 * ```
 */
function validateEntryPoint(maybeEntryPoint) {
    const { value, error } = exports.EntryPointJoiSchema.validate(maybeEntryPoint);
    if (error) {
        return new oaValidationError_1.OaValidationError('EntryPoint', maybeEntryPoint, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEntryPoint = validateEntryPoint;
