"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGene = exports.GeneOrSubClassJoiSchema = exports.GeneJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Gene - Validation schema (w/ JOI)
 */
exports.GeneJoiSchema = Joi.object({
    '@type': Joi.string().valid('Gene').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    alternativeOf: Joi.alternatives().try(Joi.lazy(() => schema.GeneOrSubClassJoiSchema), Joi.string().uri()),
    encodesBioChemEntity: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    expressedIn: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    hasBioPolymerSequence: Joi.string(),
    associatedDisease: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    bioChemInteraction: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    bioChemSimilarity: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    biologicalRole: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
    hasBioChemEntityPart: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    hasMolecularFunction: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    hasRepresentation: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    isEncodedByBioChemEntity: Joi.alternatives().try(Joi.lazy(() => schema.GeneOrSubClassJoiSchema), Joi.string().uri()),
    isInvolvedInBiologicalProcess: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    isLocatedInSubcellularLocation: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    isPartOfBioChemEntity: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    taxonomicRange: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.TaxonOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
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
 * schema:Gene - Validation schema (w/ JOI)
 *
 * This differs from GeneJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GeneOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GeneJoiSchema,
]);
/**
 * Runtime validator for schema:Gene.
 *
 * If some data has a structure which matches a schema:Gene, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGene = validateGene(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGene instanceof OaValidationError) {
 *   // From this point on, `maybeGene` will have type `OaValidationError`
 *   const error = maybeGene;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGene` will have type `Gene`
 * const gene = maybeGene;
 * ```
 */
function validateGene(maybeGene) {
    const { value, error } = exports.GeneJoiSchema.validate(maybeGene);
    if (error) {
        return new oaValidationError_1.OaValidationError('Gene', maybeGene, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGene = validateGene;
