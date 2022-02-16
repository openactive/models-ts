import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Protein
 */
export declare type Protein = {
    '@type': 'Protein';
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
     * A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
     */
    hasBioPolymerSequence?: string;
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
 * schema:Protein
 *
 * This differs from Protein because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type ProteinOrSubClass = Protein;
/**
 * schema:Protein - Validation schema (w/ JOI)
 */
export declare const ProteinJoiSchema: Joi.ObjectSchema;
/**
 * schema:Protein - Validation schema (w/ JOI)
 *
 * This differs from ProteinJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const ProteinOrSubClassJoiSchema: Joi.AlternativesSchema;
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
export declare function validateProtein(maybeProtein: unknown): Protein | OaValidationError;
