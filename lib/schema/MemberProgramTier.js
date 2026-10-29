"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMemberProgramTier = exports.MemberProgramTierOrSubClassJoiSchema = exports.MemberProgramTierJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MemberProgramTier - Validation schema (w/ JOI)
 */
exports.MemberProgramTierJoiSchema = Joi.object({
    '@type': Joi.string().valid('MemberProgramTier').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    hasTierBenefit: Joi.lazy(() => schema.TierBenefitEnumerationJoiSchema),
    hasTierRequirement: Joi.alternatives().try(Joi.lazy(() => schema.CreditCardOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.UnitPriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    isTierOf: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramOrSubClassJoiSchema), Joi.string().uri()),
    membershipPointsEarned: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:MemberProgramTier - Validation schema (w/ JOI)
 *
 * This differs from MemberProgramTierJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MemberProgramTierOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MemberProgramTierJoiSchema,
]);
/**
 * Runtime validator for schema:MemberProgramTier.
 *
 * If some data has a structure which matches a schema:MemberProgramTier, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMemberProgramTier = validateMemberProgramTier(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMemberProgramTier instanceof OaValidationError) {
 *   // From this point on, `maybeMemberProgramTier` will have type `OaValidationError`
 *   const error = maybeMemberProgramTier;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMemberProgramTier` will have type `MemberProgramTier`
 * const memberProgramTier = maybeMemberProgramTier;
 * ```
 */
function validateMemberProgramTier(maybeMemberProgramTier) {
    const { value, error } = exports.MemberProgramTierJoiSchema.validate(maybeMemberProgramTier);
    if (error) {
        return new oaValidationError_1.OaValidationError('MemberProgramTier', maybeMemberProgramTier, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMemberProgramTier = validateMemberProgramTier;
