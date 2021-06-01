import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:BrainStructure
 */
export declare type BrainStructure = {
    '@type': 'BrainStructure';
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
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     */
    associatedPathophysiology?: string;
    /**
     * Other anatomical structures to which this structure is connected.
     */
    connectedTo?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * A medical therapy related to this anatomy.
     */
    relatedTherapy?: schema.MedicalTherapyOrSubClass | string;
    /**
     * A medical condition associated with this anatomy.
     */
    relatedCondition?: schema.MedicalConditionOrSubClass | string;
    /**
     * Component (sub-)structure(s) that comprise this anatomical structure.
     */
    subStructure?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * The anatomical or organ system that this structure is part of.
     */
    partOfSystem?: schema.AnatomicalSystemOrSubClass | string;
    /**
     * Location in the body of the anatomical structure.
     */
    bodyLocation?: string;
    /**
     * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
     */
    diagram?: schema.ImageObjectOrSubClass | string;
    /**
     * A medical guideline related to this entity.
     */
    guideline?: schema.MedicalGuidelineOrSubClass | string;
    /**
     * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
     */
    recognizingAuthority?: schema.OrganizationOrSubClass | string;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     */
    legalStatus?: schema.MedicalEnumeration | string | schema.DrugLegalStatusOrSubClass;
    /**
     * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
     */
    code?: schema.MedicalCodeOrSubClass | string;
    /**
     * If applicable, a medical specialty in which this entity is relevant.
     */
    relevantSpecialty?: schema.MedicalSpecialtyOrSubClass | string;
    /**
     * A medical study or trial related to this entity.
     */
    study?: schema.MedicalStudyOrSubClass | string;
    /**
     * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
     */
    medicineSystem?: schema.MedicineSystemOrSubClass | string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     */
    additionalType?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * URL of the item.
     */
    url?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
};
/**
 * schema:BrainStructure
 *
 * This differs from BrainStructure because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type BrainStructureOrSubClass = BrainStructure;
/**
 * schema:BrainStructure - Validation schema (w/ JOI)
 */
export declare const BrainStructureJoiSchema: Joi.ObjectSchema;
/**
 * schema:BrainStructure - Validation schema (w/ JOI)
 *
 * This differs from BrainStructureJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const BrainStructureOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:BrainStructure.
 *
 * If some data has a structure which matches a schema:BrainStructure, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBrainStructure = BrainStructure.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBrainStructure instanceof OaValidationError) {
 *   // From this point on, `maybeBrainStructure` will have type `OaValidationError`
 *   const error = maybeBrainStructure;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBrainStructure` will have type `BrainStructure`
 * const brainStructure = maybeBrainStructure;
 * ```
 */
export declare function validateBrainStructure(maybeBrainStructure: unknown): BrainStructure | OaValidationError;
