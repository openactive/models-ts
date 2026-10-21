"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMolecularEntity = exports.MolecularEntityOrSubClassJoiSchema = exports.MolecularEntityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MolecularEntity - Validation schema (w/ JOI)
 */
exports.MolecularEntityJoiSchema = Joi.object({
    '@type': Joi.string().valid('MolecularEntity').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    iupacName: Joi.string(),
    smiles: Joi.string(),
    molecularWeight: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    inChI: Joi.string(),
    molecularFormula: Joi.string(),
    chemicalRole: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    inChIKey: Joi.string(),
    monoisotopicMolecularWeight: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    potentialUse: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:MolecularEntity - Validation schema (w/ JOI)
 *
 * This differs from MolecularEntityJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MolecularEntityOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MolecularEntityJoiSchema,
]);
/**
 * Runtime validator for schema:MolecularEntity.
 *
 * If some data has a structure which matches a schema:MolecularEntity, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMolecularEntity = validateMolecularEntity(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMolecularEntity instanceof OaValidationError) {
 *   // From this point on, `maybeMolecularEntity` will have type `OaValidationError`
 *   const error = maybeMolecularEntity;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMolecularEntity` will have type `MolecularEntity`
 * const molecularEntity = maybeMolecularEntity;
 * ```
 */
function validateMolecularEntity(maybeMolecularEntity) {
    const { value, error } = exports.MolecularEntityJoiSchema.validate(maybeMolecularEntity);
    if (error) {
        return new oaValidationError_1.OaValidationError('MolecularEntity', maybeMolecularEntity, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMolecularEntity = validateMolecularEntity;
