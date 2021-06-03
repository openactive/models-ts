"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateThing = exports.ThingOrSubClassJoiSchema = exports.ThingJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:Thing - Validation schema (w/ JOI)
 */
exports.ThingJoiSchema = Joi.object({
    '@type': Joi.string().valid('Thing').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:Thing - Validation schema (w/ JOI)
 *
 * This differs from ThingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ThingOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ThingJoiSchema,
    Joi.lazy(() => oa.LeaseOrSubClassJoiSchema),
    Joi.lazy(() => oa.OpenBookingErrorOrSubClassJoiSchema),
    Joi.lazy(() => oa.PaymentOrSubClassJoiSchema),
    Joi.lazy(() => oa.CertificationSchemeOrSubClassJoiSchema),
    Joi.lazy(() => oa.CertificationLevelOrSubClassJoiSchema),
    Joi.lazy(() => oa.TrustCertificationOrSubClassJoiSchema),
    Joi.lazy(() => schema.Event_OrSubClassJoiSchema),
    Joi.lazy(() => schema.ProductOrSubClassJoiSchema),
    Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema),
    Joi.lazy(() => schema.IntangibleOrSubClassJoiSchema),
    Joi.lazy(() => schema.PersonOrSubClassJoiSchema),
    Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema),
    Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema),
    Joi.lazy(() => schema.ActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.PlaceOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Thing.
 *
 * If some data has a structure which matches a schema:Thing, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeThing = validateThing(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeThing instanceof OaValidationError) {
 *   // From this point on, `maybeThing` will have type `OaValidationError`
 *   const error = maybeThing;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeThing` will have type `Thing`
 * const thing = maybeThing;
 * ```
 */
function validateThing(maybeThing) {
    const { value, error } = exports.ThingJoiSchema.validate(maybeThing);
    if (error) {
        return new oaValidationError_1.OaValidationError('Thing', maybeThing, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateThing = validateThing;
