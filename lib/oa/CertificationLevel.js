"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCertificationLevel = exports.CertificationLevelOrSubClassJoiSchema = exports.CertificationLevelJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * beta:CertificationLevel - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.CertificationLevelJoiSchema = Joi.object({
    '@type': Joi.string().valid('CertificationLevel').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * beta:CertificationLevel - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CertificationLevelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CertificationLevelOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CertificationLevelJoiSchema,
]);
/**
 * Runtime validator for beta:CertificationLevel.
 *
 * If some data has a structure which matches a beta:CertificationLevel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCertificationLevel = validateCertificationLevel(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCertificationLevel instanceof OaValidationError) {
 *   // From this point on, `maybeCertificationLevel` will have type `OaValidationError`
 *   const error = maybeCertificationLevel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCertificationLevel` will have type `CertificationLevel`
 * const certificationLevel = maybeCertificationLevel;
 * ```
 */
function validateCertificationLevel(maybeCertificationLevel) {
    const { value, error } = exports.CertificationLevelJoiSchema.validate(maybeCertificationLevel);
    if (error) {
        return new oaValidationError_1.OaValidationError('CertificationLevel', maybeCertificationLevel, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCertificationLevel = validateCertificationLevel;
