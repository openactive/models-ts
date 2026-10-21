"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProgramMembership = exports.ProgramMembershipOrSubClassJoiSchema = exports.ProgramMembershipJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ProgramMembership - Validation schema (w/ JOI)
 */
exports.ProgramMembershipJoiSchema = Joi.object({
    '@type': Joi.string().valid('ProgramMembership').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    membershipNumber: Joi.string(),
    membershipPointsEarned: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    member: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    members: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    programName: Joi.string(),
    hostingOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ProgramMembership - Validation schema (w/ JOI)
 *
 * This differs from ProgramMembershipJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ProgramMembershipOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ProgramMembershipJoiSchema,
]);
/**
 * Runtime validator for schema:ProgramMembership.
 *
 * If some data has a structure which matches a schema:ProgramMembership, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProgramMembership = validateProgramMembership(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProgramMembership instanceof OaValidationError) {
 *   // From this point on, `maybeProgramMembership` will have type `OaValidationError`
 *   const error = maybeProgramMembership;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProgramMembership` will have type `ProgramMembership`
 * const programMembership = maybeProgramMembership;
 * ```
 */
function validateProgramMembership(maybeProgramMembership) {
    const { value, error } = exports.ProgramMembershipJoiSchema.validate(maybeProgramMembership);
    if (error) {
        return new oaValidationError_1.OaValidationError('ProgramMembership', maybeProgramMembership, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateProgramMembership = validateProgramMembership;
