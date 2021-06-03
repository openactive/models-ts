"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConceptScheme = exports.ConceptSchemeOrSubClassJoiSchema = exports.ConceptSchemeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
/**
 * ConceptScheme - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 */
exports.ConceptSchemeJoiSchema = Joi.object({
    '@type': Joi.string().valid('ConceptScheme').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    title: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    concept: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    license: Joi.string().uri(),
    url: Joi.string().uri(),
});
/**
 * ConceptScheme - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 *
 * This differs from ConceptSchemeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ConceptSchemeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ConceptSchemeJoiSchema,
]);
/**
 * Runtime validator for ConceptScheme.
 *
 * If some data has a structure which matches a ConceptScheme, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConceptScheme = validateConceptScheme(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConceptScheme instanceof OaValidationError) {
 *   // From this point on, `maybeConceptScheme` will have type `OaValidationError`
 *   const error = maybeConceptScheme;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConceptScheme` will have type `ConceptScheme`
 * const conceptScheme = maybeConceptScheme;
 * ```
 */
function validateConceptScheme(maybeConceptScheme) {
    const { value, error } = exports.ConceptSchemeJoiSchema.validate(maybeConceptScheme);
    if (error) {
        return new oaValidationError_1.OaValidationError('ConceptScheme', maybeConceptScheme, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateConceptScheme = validateConceptScheme;
