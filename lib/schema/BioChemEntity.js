"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBioChemEntity = exports.BioChemEntityOrSubClassJoiSchema = exports.BioChemEntityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:BioChemEntity - Validation schema (w/ JOI)
 */
exports.BioChemEntityJoiSchema = Joi.object({
    '@type': Joi.string().valid('BioChemEntity').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    bioChemSimilarity: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    isPartOfBioChemEntity: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    hasMolecularFunction: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
    hasRepresentation: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema)),
    hasBioChemEntityPart: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    associatedDisease: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema)),
    taxonomicRange: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.TaxonOrSubClassJoiSchema)),
    isInvolvedInBiologicalProcess: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
    biologicalRole: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    bioChemInteraction: Joi.alternatives().try(Joi.lazy(() => schema.BioChemEntityOrSubClassJoiSchema), Joi.string().uri()),
    isEncodedByBioChemEntity: Joi.alternatives().try(Joi.lazy(() => schema.GeneOrSubClassJoiSchema), Joi.string().uri()),
    isLocatedInSubcellularLocation: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema)),
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
 * schema:BioChemEntity - Validation schema (w/ JOI)
 *
 * This differs from BioChemEntityJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BioChemEntityOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BioChemEntityJoiSchema,
    Joi.lazy(() => schema.MolecularEntityOrSubClassJoiSchema),
    Joi.lazy(() => schema.ProteinOrSubClassJoiSchema),
    Joi.lazy(() => schema.ChemicalSubstanceOrSubClassJoiSchema),
    Joi.lazy(() => schema.GeneOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:BioChemEntity.
 *
 * If some data has a structure which matches a schema:BioChemEntity, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBioChemEntity = validateBioChemEntity(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBioChemEntity instanceof OaValidationError) {
 *   // From this point on, `maybeBioChemEntity` will have type `OaValidationError`
 *   const error = maybeBioChemEntity;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBioChemEntity` will have type `BioChemEntity`
 * const bioChemEntity = maybeBioChemEntity;
 * ```
 */
function validateBioChemEntity(maybeBioChemEntity) {
    const { value, error } = exports.BioChemEntityJoiSchema.validate(maybeBioChemEntity);
    if (error) {
        return new oaValidationError_1.OaValidationError('BioChemEntity', maybeBioChemEntity, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBioChemEntity = validateBioChemEntity;
