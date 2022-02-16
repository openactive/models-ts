// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ChemicalSubstance
 */
export type ChemicalSubstance = {
  '@type': 'ChemicalSubstance';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance.
   */
  chemicalComposition?: string;
  /**
   * A role played by the BioChemEntity within a chemical context.
   */
  chemicalRole?: schema.DefinedTermOrSubClass | string;
  /**
   * Intended use of the BioChemEntity by humans.
   */
  potentialUse?: schema.DefinedTermOrSubClass | string;
  /**
   * A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms.
   */
  bioChemSimilarity?: schema.BioChemEntityOrSubClass | string;
  /**
   * Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. 
   */
  isPartOfBioChemEntity?: schema.BioChemEntityOrSubClass | string;
  /**
   * Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence.
   */
  hasMolecularFunction?: schema.PropertyValueOrSubClass | string | schema.DefinedTermOrSubClass;
  /**
   * A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image.
   */
  hasRepresentation?: string | schema.PropertyValueOrSubClass;
  /**
   * Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. 
   */
  hasBioChemEntityPart?: schema.BioChemEntityOrSubClass | string;
  /**
   * Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue.
   */
  associatedDisease?: schema.MedicalConditionOrSubClass | string | schema.PropertyValueOrSubClass;
  /**
   * The taxonomic grouping of the organism that expresses, encodes, or in someway related to the BioChemEntity.
   */
  taxonomicRange?: string | schema.DefinedTermOrSubClass | schema.TaxonOrSubClass;
  /**
   * Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence.
   */
  isInvolvedInBiologicalProcess?: schema.PropertyValueOrSubClass | string | schema.DefinedTermOrSubClass;
  /**
   * A role played by the BioChemEntity within a biological context.
   */
  biologicalRole?: schema.DefinedTermOrSubClass | string;
  /**
   * A BioChemEntity that is known to interact with this item.
   */
  bioChemInteraction?: schema.BioChemEntityOrSubClass | string;
  /**
   * Another BioChemEntity encoding by this one.
   */
  isEncodedByBioChemEntity?: schema.GeneOrSubClass | string;
  /**
   * Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence.
   */
  isLocatedInSubcellularLocation?: schema.DefinedTermOrSubClass | string | schema.PropertyValueOrSubClass;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
};

/**
 * schema:ChemicalSubstance
 *
 * This differs from ChemicalSubstance because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ChemicalSubstanceOrSubClass =
  | ChemicalSubstance
  ;

/**
 * schema:ChemicalSubstance - Validation schema (w/ JOI)
 */
export const ChemicalSubstanceJoiSchema = Joi.object({
  '@type': Joi.string().valid('ChemicalSubstance').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  chemicalComposition: Joi.string(),
  chemicalRole: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ChemicalSubstance - Validation schema (w/ JOI)
 *
 * This differs from ChemicalSubstanceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ChemicalSubstanceOrSubClassJoiSchema = Joi.alternatives().try([
  ChemicalSubstanceJoiSchema,
]);

/**
 * Runtime validator for schema:ChemicalSubstance.
 *
 * If some data has a structure which matches a schema:ChemicalSubstance, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeChemicalSubstance = validateChemicalSubstance(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeChemicalSubstance instanceof OaValidationError) {
 *   // From this point on, `maybeChemicalSubstance` will have type `OaValidationError`
 *   const error = maybeChemicalSubstance;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeChemicalSubstance` will have type `ChemicalSubstance`
 * const chemicalSubstance = maybeChemicalSubstance;
 * ```
 */
export function validateChemicalSubstance(maybeChemicalSubstance: unknown): ChemicalSubstance | OaValidationError {
  const { value, error } = ChemicalSubstanceJoiSchema.validate(maybeChemicalSubstance);
  if (error) {
    return new OaValidationError('ChemicalSubstance', maybeChemicalSubstance, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ChemicalSubstance;
}
