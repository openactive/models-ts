import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:MedicalSignOrSymptom
 */
export declare type MedicalSignOrSymptom = {
    '@type': 'MedicalSignOrSymptom';
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
     * A possible treatment to address this condition, sign or symptom.
     */
    possibleTreatment?: schema.MedicalTherapyOrSubClass | string;
    /**
     * One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
     */
    differentialDiagnosis?: schema.DDxElementOrSubClass | string;
    /**
     * The characteristics of associated patients, such as age, gender, race etc.
     */
    epidemiology?: string;
    /**
     * The anatomy of the underlying organ system or structures associated with this entity.
     */
    associatedAnatomy?: schema.AnatomicalStructureOrSubClass | schema.AnatomicalSystemOrSubClass | schema.SuperficialAnatomyOrSubClass | string;
    /**
     * The expected progression of the condition if it is not treated and allowed to progress naturally.
     */
    naturalProgression?: string;
    /**
     * A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
     */
    secondaryPrevention?: schema.MedicalTherapyOrSubClass | string;
    /**
     * The status of the study (enumerated).
     */
    status?: schema.EventStatusType | string | schema.MedicalStudyStatusOrSubClass;
    /**
     * A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
     */
    possibleComplication?: string;
    /**
     * A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
     */
    primaryPrevention?: schema.MedicalTherapyOrSubClass | string;
    /**
     * Specifying a drug or medicine used in a medication procedure.
     */
    drug?: schema.DrugOrSubClass | string;
    /**
     * A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
     */
    signOrSymptom?: schema.MedicalSignOrSymptomOrSubClass | string;
    /**
     * The likely outcome in either the short term or long term of the medical condition.
     */
    expectedPrognosis?: string;
    /**
     * A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.
     */
    riskFactor?: schema.MedicalRiskFactorOrSubClass | string;
    /**
     * The stage of the condition, if applicable.
     */
    stage?: schema.MedicalConditionStageOrSubClass | string;
    /**
     * A medical test typically performed given this condition.
     */
    typicalTest?: schema.MedicalTestOrSubClass | string;
    /**
     * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
     */
    pathophysiology?: string;
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
 * schema:MedicalSignOrSymptom
 *
 * This differs from MedicalSignOrSymptom because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalSignOrSymptomOrSubClass = MedicalSignOrSymptom | schema.MedicalSymptomOrSubClass | schema.MedicalSignOrSubClass;
/**
 * schema:MedicalSignOrSymptom - Validation schema (w/ JOI)
 */
export declare const MedicalSignOrSymptomJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalSignOrSymptom - Validation schema (w/ JOI)
 *
 * This differs from MedicalSignOrSymptomJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalSignOrSymptomOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalSignOrSymptom.
 *
 * If some data has a structure which matches a schema:MedicalSignOrSymptom, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalSignOrSymptom = MedicalSignOrSymptom.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalSignOrSymptom instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalSignOrSymptom` will have type `OaValidationError`
 *   const error = maybeMedicalSignOrSymptom;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalSignOrSymptom` will have type `MedicalSignOrSymptom`
 * const medicalSignOrSymptom = maybeMedicalSignOrSymptom;
 * ```
 */
export declare function validateMedicalSignOrSymptom(maybeMedicalSignOrSymptom: unknown): MedicalSignOrSymptom | OaValidationError;
