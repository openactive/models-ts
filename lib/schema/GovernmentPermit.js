"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGovernmentPermit = exports.GovernmentPermitOrSubClassJoiSchema = exports.GovernmentPermitJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:GovernmentPermit - Validation schema (w/ JOI)
 */
exports.GovernmentPermitJoiSchema = Joi.object({
    '@type': Joi.string().valid('GovernmentPermit').required(),
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
 * schema:GovernmentPermit - Validation schema (w/ JOI)
 *
 * This differs from GovernmentPermitJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GovernmentPermitOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GovernmentPermitJoiSchema,
]);
/**
 * Runtime validator for schema:GovernmentPermit.
 *
 * If some data has a structure which matches a schema:GovernmentPermit, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGovernmentPermit = GovernmentPermit.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGovernmentPermit instanceof OaValidationError) {
 *   // From this point on, `maybeGovernmentPermit` will have type `OaValidationError`
 *   const error = maybeGovernmentPermit;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGovernmentPermit` will have type `GovernmentPermit`
 * const governmentPermit = maybeGovernmentPermit;
 * ```
 */
function validateGovernmentPermit(maybeGovernmentPermit) {
    const { value, error } = exports.GovernmentPermitJoiSchema.validate(maybeGovernmentPermit);
    if (error) {
        return new oaValidationError_1.OaValidationError('GovernmentPermit', maybeGovernmentPermit, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGovernmentPermit = validateGovernmentPermit;
