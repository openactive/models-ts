"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConcept = exports.ConceptOrSubClassJoiSchema = exports.ConceptJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * Concept - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 */
exports.ConceptJoiSchema = Joi.object({
    '@type': Joi.string().valid('Concept').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
    altLabel: Joi.array().items(Joi.string()),
    broader: Joi.array().items(Joi.string().uri()),
    definition: Joi.string(),
    hiddenLabel: Joi.array().items(Joi.string()),
    inScheme: Joi.string().uri(),
    narrower: Joi.array().items(Joi.string().uri()),
    notation: Joi.string(),
    prefLabel: Joi.string(),
    related: Joi.array().items(Joi.string().uri()),
    topConceptOf: Joi.string().uri(),
});
/**
 * Concept - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 *
 * This differs from ConceptJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ConceptOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ConceptJoiSchema,
]);
/**
 * Runtime validator for Concept.
 *
 * If some data has a structure which matches a Concept, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConcept = validateConcept(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConcept instanceof OaValidationError) {
 *   // From this point on, `maybeConcept` will have type `OaValidationError`
 *   const error = maybeConcept;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConcept` will have type `Concept`
 * const concept = maybeConcept;
 * ```
 */
function validateConcept(maybeConcept) {
    const { value, error } = exports.ConceptJoiSchema.validate(maybeConcept);
    if (error) {
        return new oaValidationError_1.OaValidationError('Concept', maybeConcept, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateConcept = validateConcept;
