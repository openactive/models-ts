import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:TherapeuticProcedure
 */
export declare type TherapeuticProcedure = {
    '@type': 'TherapeuticProcedure';
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
     * Specifying a drug or medicine used in a medication procedure.
     */
    drug?: schema.DrugOrSubClass | string;
    /**
     * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
     */
    adverseOutcome?: schema.MedicalEntityOrSubClass | string;
    /**
     * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
     */
    doseSchedule?: schema.DoseScheduleOrSubClass | string;
    /**
     * Typical preparation that a patient must undergo before having the procedure performed.
     */
    preparation?: schema.MedicalEntityOrSubClass | string;
    /**
     * Typical or recommended followup care after the procedure is performed.
     */
    followup?: string;
    /**
     * How the procedure is performed.
     */
    howPerformed?: string;
    /**
     * The status of the study (enumerated).
     */
    status?: schema.EventStatusType | string | schema.MedicalStudyStatusOrSubClass;
    /**
     * The type of procedure, for example Surgical, Noninvasive, or Percutaneous.
     */
    procedureType?: schema.MedicalProcedureTypeOrSubClass | string;
    /**
     * Location in the body of the anatomical structure.
     */
    bodyLocation?: string;
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
 * schema:TherapeuticProcedure
 *
 * This differs from TherapeuticProcedure because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type TherapeuticProcedureOrSubClass = TherapeuticProcedure | schema.MedicalTherapyOrSubClass | schema.PsychologicalTreatmentOrSubClass;
/**
 * schema:TherapeuticProcedure - Validation schema (w/ JOI)
 */
export declare const TherapeuticProcedureJoiSchema: Joi.ObjectSchema;
/**
 * schema:TherapeuticProcedure - Validation schema (w/ JOI)
 *
 * This differs from TherapeuticProcedureJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const TherapeuticProcedureOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:TherapeuticProcedure.
 *
 * If some data has a structure which matches a schema:TherapeuticProcedure, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTherapeuticProcedure = validateTherapeuticProcedure(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTherapeuticProcedure instanceof OaValidationError) {
 *   // From this point on, `maybeTherapeuticProcedure` will have type `OaValidationError`
 *   const error = maybeTherapeuticProcedure;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTherapeuticProcedure` will have type `TherapeuticProcedure`
 * const therapeuticProcedure = maybeTherapeuticProcedure;
 * ```
 */
export declare function validateTherapeuticProcedure(maybeTherapeuticProcedure: unknown): TherapeuticProcedure | OaValidationError;
