"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBrand = exports.BrandOrSubClassJoiSchema = exports.BrandJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Brand - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 */
exports.BrandJoiSchema = Joi.object({
    '@type': Joi.string().valid('Brand').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    logo: Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema),
    url: Joi.string().uri(),
    'beta:formattedDescription': Joi.string(),
    'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * Brand - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from BrandJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BrandOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BrandJoiSchema,
]);
/**
 * Runtime validator for Brand.
 *
 * If some data has a structure which matches a Brand, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBrand = Brand.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBrand instanceof OaValidationError) {
 *   // From this point on, `maybeBrand` will have type `OaValidationError`
 *   const error = maybeBrand;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBrand` will have type `Brand`
 * const brand = maybeBrand;
 * ```
 */
function validateBrand(maybeBrand) {
    const { value, error } = exports.BrandJoiSchema.validate(maybeBrand);
    if (error) {
        return new oaValidationError_1.OaValidationError('Brand', maybeBrand, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBrand = validateBrand;
