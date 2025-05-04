"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLease = exports.LeaseOrSubClassJoiSchema = exports.LeaseJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Lease - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.LeaseJoiSchema = Joi.object({
    '@type': Joi.string().valid('Lease').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    leaseExpires: Joi.string().isoDate(),
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
 * Lease - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from LeaseJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.LeaseOrSubClassJoiSchema = Joi.alternatives().try([
    exports.LeaseJoiSchema,
]);
/**
 * Runtime validator for Lease.
 *
 * If some data has a structure which matches a Lease, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLease = validateLease(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLease instanceof OaValidationError) {
 *   // From this point on, `maybeLease` will have type `OaValidationError`
 *   const error = maybeLease;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLease` will have type `Lease`
 * const lease = maybeLease;
 * ```
 */
function validateLease(maybeLease) {
    const { value, error } = exports.LeaseJoiSchema.validate(maybeLease);
    if (error) {
        return new oaValidationError_1.OaValidationError('Lease', maybeLease, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateLease = validateLease;
