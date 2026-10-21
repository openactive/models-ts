"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProtein = exports.ProteinOrSubClassJoiSchema = exports.ProteinJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Protein - Validation schema (w/ JOI)
 */
exports.ProteinJoiSchema = Joi.object({
    '@type': Joi.string().valid('Protein').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    hasBioPolymerSequence: Joi.string(),
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
 * schema:Protein - Validation schema (w/ JOI)
 *
 * This differs from ProteinJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ProteinOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ProteinJoiSchema,
]);
/**
 * Runtime validator for schema:Protein.
 *
 * If some data has a structure which matches a schema:Protein, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProtein = validateProtein(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProtein instanceof OaValidationError) {
 *   // From this point on, `maybeProtein` will have type `OaValidationError`
 *   const error = maybeProtein;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProtein` will have type `Protein`
 * const protein = maybeProtein;
 * ```
 */
function validateProtein(maybeProtein) {
    const { value, error } = exports.ProteinJoiSchema.validate(maybeProtein);
    if (error) {
        return new oaValidationError_1.OaValidationError('Protein', maybeProtein, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateProtein = validateProtein;
