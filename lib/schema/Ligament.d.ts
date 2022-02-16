import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Ligament
 */
export declare type Ligament = {
    '@type': 'Ligament';
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
     * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
     */
    diagram?: schema.ImageObjectOrSubClass | string;
    /**
     * Component (sub-)structure(s) that comprise this anatomical structure.
     */
    subStructure?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * Other anatomical structures to which this structure is connected.
     */
    connectedTo?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * A medical condition associated with this anatomy.
     */
    relatedCondition?: schema.MedicalConditionOrSubClass | string;
    /**
     * Location in the body of the anatomical structure.
     */
    bodyLocation?: string;
    /**
     * A medical therapy related to this anatomy.
     */
    relatedTherapy?: schema.MedicalTherapyOrSubClass | string;
    /**
     * The anatomical or organ system that this structure is part of.
     */
    partOfSystem?: schema.AnatomicalSystemOrSubClass | string;
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     */
    associatedPathophysiology?: string;
    /**
     * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
     */
    medicineSystem?: schema.MedicineSystemOrSubClass | string;
    /**
     * A medical guideline related to this entity.
     */
    guideline?: schema.MedicalGuidelineOrSubClass | string;
    /**
     * A medical study or trial related to this entity.
     */
    study?: schema.MedicalStudyOrSubClass | string;
    /**
     * If applicable, a medical specialty in which this entity is relevant.
     */
    relevantSpecialty?: schema.MedicalSpecialtyOrSubClass | string;
    /**
     * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
     */
    recognizingAuthority?: schema.OrganizationOrSubClass | string;
    /**
     * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
     */
    code?: schema.MedicalCodeOrSubClass | string;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     */
    legalStatus?: schema.MedicalEnumeration | schema.DrugLegalStatusOrSubClass | string;
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
 * schema:Ligament
 *
 * This differs from Ligament because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type LigamentOrSubClass = Ligament;
/**
 * schema:Ligament - Validation schema (w/ JOI)
 */
export declare const LigamentJoiSchema: Joi.ObjectSchema;
/**
 * schema:Ligament - Validation schema (w/ JOI)
 *
 * This differs from LigamentJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const LigamentOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Ligament.
 *
 * If some data has a structure which matches a schema:Ligament, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLigament = validateLigament(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLigament instanceof OaValidationError) {
 *   // From this point on, `maybeLigament` will have type `OaValidationError`
 *   const error = maybeLigament;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLigament` will have type `Ligament`
 * const ligament = maybeLigament;
 * ```
 */
export declare function validateLigament(maybeLigament: unknown): Ligament | OaValidationError;
