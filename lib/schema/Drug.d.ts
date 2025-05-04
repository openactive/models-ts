import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Drug
 */
export declare type Drug = {
    '@type': 'Drug';
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
     * Link to prescribing information for the drug.
     */
    prescribingInfo?: string;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     */
    clinicalPharmacology?: string;
    /**
     * A route by which this drug may be administered, e.g. 'oral'.
     */
    administrationRoute?: string;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     */
    clincalPharmacology?: string;
    /**
     * An available dosage strength for the drug.
     */
    availableStrength?: schema.DrugStrengthOrSubClass | string;
    /**
     * An active ingredient, typically chemical compounds and/or biologic substances.
     */
    activeIngredient?: string;
    /**
     * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
     */
    pregnancyWarning?: string;
    /**
     * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
     */
    breastfeedingWarning?: string;
    /**
     * Pregnancy category of this drug.
     */
    pregnancyCategory?: schema.DrugPregnancyCategoryOrSubClass | string;
    /**
     * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
     */
    alcoholWarning?: string;
    /**
     * The unit in which the drug is measured, e.g. '5 mg tablet'.
     */
    drugUnit?: string;
    /**
     * Proprietary name given to the diet plan, typically by its originator or creator.
     */
    proprietaryName?: string;
    /**
     * The manufacturer of the product.
     */
    manufacturer?: schema.OrganizationOrSubClass | string;
    /**
     * The RxCUI drug identifier from RXNORM.
     */
    rxcui?: string;
    /**
     * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
     */
    foodWarning?: string;
    /**
     * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
     */
    doseSchedule?: schema.DoseScheduleOrSubClass | string;
    /**
     * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
     */
    maximumIntake?: schema.MaximumDoseScheduleOrSubClass | string;
    /**
     * True if the drug is available in a generic form (regardless of name).
     */
    isAvailableGenerically?: boolean;
    /**
     * Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
     */
    prescriptionStatus?: string | schema.DrugPrescriptionStatusOrSubClass;
    /**
     * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
     */
    overdosage?: string;
    /**
     * The insurance plans that cover this drug.
     */
    includedInHealthInsurancePlan?: schema.HealthInsurancePlanOrSubClass | string;
    /**
     * The generic name of this drug or supplement.
     */
    nonProprietaryName?: string;
    /**
     * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
     */
    dosageForm?: string;
    /**
     * Link to the drug's label details.
     */
    labelDetails?: string;
    /**
     * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
     */
    interactingDrug?: schema.DrugOrSubClass | string;
    /**
     * Any other drug related to this one, for example commonly-prescribed alternatives.
     */
    relatedDrug?: schema.DrugOrSubClass | string;
    /**
     * The class of drug this belongs to (e.g., statins).
     */
    drugClass?: schema.DrugClassOrSubClass | string;
    /**
     * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
     */
    mechanismOfAction?: string;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     */
    legalStatus?: schema.MedicalEnumeration | schema.DrugLegalStatusOrSubClass | string;
    /**
     * True if this item's name is a proprietary/brand name (vs. generic name).
     */
    isProprietary?: boolean;
    /**
     * Any FDA or other warnings about the drug (text or URL).
     */
    warning?: string;
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
 * schema:Drug
 *
 * This differs from Drug because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DrugOrSubClass = Drug;
/**
 * schema:Drug - Validation schema (w/ JOI)
 */
export declare const DrugJoiSchema: Joi.ObjectSchema;
/**
 * schema:Drug - Validation schema (w/ JOI)
 *
 * This differs from DrugJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DrugOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Drug.
 *
 * If some data has a structure which matches a schema:Drug, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrug = validateDrug(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrug instanceof OaValidationError) {
 *   // From this point on, `maybeDrug` will have type `OaValidationError`
 *   const error = maybeDrug;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrug` will have type `Drug`
 * const drug = maybeDrug;
 * ```
 */
export declare function validateDrug(maybeDrug: unknown): Drug | OaValidationError;
