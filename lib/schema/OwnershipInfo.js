"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOwnershipInfo = exports.OwnershipInfoOrSubClassJoiSchema = exports.OwnershipInfoJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:OwnershipInfo - Validation schema (w/ JOI)
 */
exports.OwnershipInfoJoiSchema = Joi.object({
    '@type': Joi.string().valid('OwnershipInfo').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    ownedFrom: Joi.string().isoDate(),
    ownedThrough: Joi.string().isoDate(),
    typeOfGood: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    acquiredFrom: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:OwnershipInfo - Validation schema (w/ JOI)
 *
 * This differs from OwnershipInfoJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OwnershipInfoOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OwnershipInfoJoiSchema,
]);
/**
 * Runtime validator for schema:OwnershipInfo.
 *
 * If some data has a structure which matches a schema:OwnershipInfo, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOwnershipInfo = validateOwnershipInfo(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOwnershipInfo instanceof OaValidationError) {
 *   // From this point on, `maybeOwnershipInfo` will have type `OaValidationError`
 *   const error = maybeOwnershipInfo;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOwnershipInfo` will have type `OwnershipInfo`
 * const ownershipInfo = maybeOwnershipInfo;
 * ```
 */
function validateOwnershipInfo(maybeOwnershipInfo) {
    const { value, error } = exports.OwnershipInfoJoiSchema.validate(maybeOwnershipInfo);
    if (error) {
        return new oaValidationError_1.OaValidationError('OwnershipInfo', maybeOwnershipInfo, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOwnershipInfo = validateOwnershipInfo;
