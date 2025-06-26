"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntitlement = exports.EntitlementOrSubClassJoiSchema = exports.EntitlementJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Entitlement - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 */
exports.EntitlementJoiSchema = Joi.object({
    '@type': Joi.string().valid('Entitlement').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    entitlementType: Joi.alternatives().try(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema), Joi.string().uri()),
    evidenceRequestAction: Joi.lazy(() => oa.ActionOrSubClassJoiSchema),
    validFrom: Joi.string().isoDate(),
    validUntil: Joi.string().isoDate(),
    issuedThrough: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    validFor: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    permitAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    issuedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    validIn: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
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
 * Entitlement - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from EntitlementJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EntitlementOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EntitlementJoiSchema,
]);
/**
 * Runtime validator for Entitlement.
 *
 * If some data has a structure which matches a Entitlement, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEntitlement = validateEntitlement(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEntitlement instanceof OaValidationError) {
 *   // From this point on, `maybeEntitlement` will have type `OaValidationError`
 *   const error = maybeEntitlement;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEntitlement` will have type `Entitlement`
 * const entitlement = maybeEntitlement;
 * ```
 */
function validateEntitlement(maybeEntitlement) {
    const { value, error } = exports.EntitlementJoiSchema.validate(maybeEntitlement);
    if (error) {
        return new oaValidationError_1.OaValidationError('Entitlement', maybeEntitlement, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEntitlement = validateEntitlement;
