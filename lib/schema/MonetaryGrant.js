"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMonetaryGrant = exports.MonetaryGrantOrSubClassJoiSchema = exports.MonetaryGrantJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MonetaryGrant - Validation schema (w/ JOI)
 */
exports.MonetaryGrantJoiSchema = Joi.object({
    '@type': Joi.string().valid('MonetaryGrant').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    amount: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    fundedItem: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:MonetaryGrant - Validation schema (w/ JOI)
 *
 * This differs from MonetaryGrantJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MonetaryGrantOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MonetaryGrantJoiSchema,
]);
/**
 * Runtime validator for schema:MonetaryGrant.
 *
 * If some data has a structure which matches a schema:MonetaryGrant, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMonetaryGrant = validateMonetaryGrant(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMonetaryGrant instanceof OaValidationError) {
 *   // From this point on, `maybeMonetaryGrant` will have type `OaValidationError`
 *   const error = maybeMonetaryGrant;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMonetaryGrant` will have type `MonetaryGrant`
 * const monetaryGrant = maybeMonetaryGrant;
 * ```
 */
function validateMonetaryGrant(maybeMonetaryGrant) {
    const { value, error } = exports.MonetaryGrantJoiSchema.validate(maybeMonetaryGrant);
    if (error) {
        return new oaValidationError_1.OaValidationError('MonetaryGrant', maybeMonetaryGrant, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMonetaryGrant = validateMonetaryGrant;
