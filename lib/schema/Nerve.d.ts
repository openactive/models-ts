import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Nerve
 */
export declare type Nerve = {
    '@type': 'Nerve';
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
    description?: string | schema.TextObjectOrSubClass;
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]].
     */
    branch?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * The neurological pathway extension that involves muscle control.
     */
    nerveMotor?: schema.MuscleOrSubClass | string;
    /**
     * The neurological pathway extension that inputs and sends information to the brain or spinal cord.
     */
    sensoryUnit?: schema.AnatomicalStructureOrSubClass | schema.SuperficialAnatomyOrSubClass | string;
    /**
     * The neurological pathway that originates the neurons.
     */
    sourcedFrom?: schema.BrainStructureOrSubClass | string;
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     */
    associatedPathophysiology?: string;
    /**
     * Location in the body of the anatomical structure.
     */
    bodyLocation?: string;
    /**
     * Other anatomical structures to which this structure is connected.
     */
    connectedTo?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
     */
    diagram?: schema.ImageObjectOrSubClass | string;
    /**
     * The anatomical or organ system that this structure is part of.
     */
    partOfSystem?: schema.AnatomicalSystemOrSubClass | string;
    /**
     * A medical condition associated with this anatomy.
     */
    relatedCondition?: schema.MedicalConditionOrSubClass | string;
    /**
     * A medical therapy related to this anatomy.
     */
    relatedTherapy?: schema.MedicalTherapyOrSubClass | string;
    /**
     * Component (sub-)structure(s) that comprise this anatomical structure.
     */
    subStructure?: schema.AnatomicalStructureOrSubClass | string;
    /**
     * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
     */
    code?: schema.MedicalCodeOrSubClass | string;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     */
    funding?: schema.GrantOrSubClass | string;
    /**
     * A medical guideline related to this entity.
     */
    guideline?: schema.MedicalGuidelineOrSubClass | string;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     */
    legalStatus?: schema.DrugLegalStatusOrSubClass | schema.MedicalEnumeration | string;
    /**
     * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
     */
    medicineSystem?: schema.MedicineSystemOrSubClass | string;
    /**
     * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
     */
    recognizingAuthority?: schema.OrganizationOrSubClass | string;
    /**
     * If applicable, a medical specialty in which this entity is relevant.
     */
    relevantSpecialty?: schema.MedicalSpecialtyOrSubClass | string;
    /**
     * A medical study or trial related to this entity.
     */
    study?: schema.MedicalStudyOrSubClass | string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
     *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
     */
    additionalType?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
    /**
     * A person or organization who owns this Thing.
     */
    owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
    /**
     * URL of the item.
     */
    url?: string;
};
/**
 * schema:Nerve
 *
 * This differs from Nerve because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type NerveOrSubClass = Nerve;
/**
 * schema:Nerve - Validation schema (w/ JOI)
 */
export declare const NerveJoiSchema: Joi.ObjectSchema;
/**
 * schema:Nerve - Validation schema (w/ JOI)
 *
 * This differs from NerveJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const NerveOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Nerve.
 *
 * If some data has a structure which matches a schema:Nerve, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNerve = validateNerve(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNerve instanceof OaValidationError) {
 *   // From this point on, `maybeNerve` will have type `OaValidationError`
 *   const error = maybeNerve;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNerve` will have type `Nerve`
 * const nerve = maybeNerve;
 * ```
 */
export declare function validateNerve(maybeNerve: unknown): Nerve | OaValidationError;
