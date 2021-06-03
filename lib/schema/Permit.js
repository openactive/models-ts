"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePermit = exports.PermitOrSubClassJoiSchema = exports.PermitJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Permit - Validation schema (w/ JOI)
 */
exports.PermitJoiSchema = Joi.object({
    '@type': Joi.string().valid('Permit').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    validFrom: Joi.string().isoDate(),
    permitAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    validIn: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    issuedThrough: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    issuedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    validUntil: Joi.string().isoDate(),
    validFor: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
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
 * schema:Permit - Validation schema (w/ JOI)
 *
 * This differs from PermitJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PermitOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PermitJoiSchema,
    Joi.lazy(() => schema.GovernmentPermitOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Permit.
 *
 * If some data has a structure which matches a schema:Permit, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePermit = validatePermit(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePermit instanceof OaValidationError) {
 *   // From this point on, `maybePermit` will have type `OaValidationError`
 *   const error = maybePermit;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePermit` will have type `Permit`
 * const permit = maybePermit;
 * ```
 */
function validatePermit(maybePermit) {
    const { value, error } = exports.PermitJoiSchema.validate(maybePermit);
    if (error) {
        return new oaValidationError_1.OaValidationError('Permit', maybePermit, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePermit = validatePermit;
