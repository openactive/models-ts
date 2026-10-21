"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSpeakableSpecification = exports.SpeakableSpecificationOrSubClassJoiSchema = exports.SpeakableSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:SpeakableSpecification - Validation schema (w/ JOI)
 */
exports.SpeakableSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('SpeakableSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    xpath: Joi.lazy(() => schema.XPathTypeOrSubClassJoiSchema),
    cssSelector: Joi.lazy(() => schema.CssSelectorTypeOrSubClassJoiSchema),
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
 * schema:SpeakableSpecification - Validation schema (w/ JOI)
 *
 * This differs from SpeakableSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SpeakableSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SpeakableSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:SpeakableSpecification.
 *
 * If some data has a structure which matches a schema:SpeakableSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSpeakableSpecification = validateSpeakableSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSpeakableSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeSpeakableSpecification` will have type `OaValidationError`
 *   const error = maybeSpeakableSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSpeakableSpecification` will have type `SpeakableSpecification`
 * const speakableSpecification = maybeSpeakableSpecification;
 * ```
 */
function validateSpeakableSpecification(maybeSpeakableSpecification) {
    const { value, error } = exports.SpeakableSpecificationJoiSchema.validate(maybeSpeakableSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('SpeakableSpecification', maybeSpeakableSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSpeakableSpecification = validateSpeakableSpecification;
