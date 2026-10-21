"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaxon = exports.TaxonOrSubClassJoiSchema = exports.TaxonJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Taxon - Validation schema (w/ JOI)
 */
exports.TaxonJoiSchema = Joi.object({
    '@type': Joi.string().valid('Taxon').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    hasDefinedTerm: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    childTaxon: Joi.alternatives().try(Joi.lazy(() => schema.TaxonOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    parentTaxon: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.TaxonOrSubClassJoiSchema), Joi.string()),
    taxonRank: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
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
 * schema:Taxon - Validation schema (w/ JOI)
 *
 * This differs from TaxonJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TaxonOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TaxonJoiSchema,
]);
/**
 * Runtime validator for schema:Taxon.
 *
 * If some data has a structure which matches a schema:Taxon, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTaxon = validateTaxon(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTaxon instanceof OaValidationError) {
 *   // From this point on, `maybeTaxon` will have type `OaValidationError`
 *   const error = maybeTaxon;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTaxon` will have type `Taxon`
 * const taxon = maybeTaxon;
 * ```
 */
function validateTaxon(maybeTaxon) {
    const { value, error } = exports.TaxonJoiSchema.validate(maybeTaxon);
    if (error) {
        return new oaValidationError_1.OaValidationError('Taxon', maybeTaxon, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTaxon = validateTaxon;
