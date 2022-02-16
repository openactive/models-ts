"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOfferCatalog = exports.OfferCatalogOrSubClassJoiSchema = exports.OfferCatalogJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:OfferCatalog - Validation schema (w/ JOI)
 */
exports.OfferCatalogJoiSchema = Joi.object({
    '@type': Joi.string().valid('OfferCatalog').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    itemListElement: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    numberOfItems: Joi.number().integer(),
    itemListOrder: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrderTypeJoiSchema), Joi.string()),
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
 * schema:OfferCatalog - Validation schema (w/ JOI)
 *
 * This differs from OfferCatalogJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OfferCatalogOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OfferCatalogJoiSchema,
]);
/**
 * Runtime validator for schema:OfferCatalog.
 *
 * If some data has a structure which matches a schema:OfferCatalog, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferCatalog = validateOfferCatalog(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferCatalog instanceof OaValidationError) {
 *   // From this point on, `maybeOfferCatalog` will have type `OaValidationError`
 *   const error = maybeOfferCatalog;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferCatalog` will have type `OfferCatalog`
 * const offerCatalog = maybeOfferCatalog;
 * ```
 */
function validateOfferCatalog(maybeOfferCatalog) {
    const { value, error } = exports.OfferCatalogJoiSchema.validate(maybeOfferCatalog);
    if (error) {
        return new oaValidationError_1.OaValidationError('OfferCatalog', maybeOfferCatalog, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOfferCatalog = validateOfferCatalog;
