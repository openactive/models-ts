// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Drug
 */
export type Drug = {
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
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
   */
  mechanismOfAction?: string;
  /**
   * Pregnancy category of this drug.
   */
  pregnancyCategory?: schema.DrugPregnancyCategoryOrSubClass | string;
  /**
   * True if this item's name is a proprietary/brand name (vs. generic name).
   */
  isProprietary?: boolean;
  /**
   * The insurance plans that cover this drug.
   */
  includedInHealthInsurancePlan?: schema.HealthInsurancePlanOrSubClass | string;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   */
  maximumIntake?: schema.MaximumDoseScheduleOrSubClass | string;
  /**
   * The class of drug this belongs to (e.g., statins).
   */
  drugClass?: schema.DrugClassOrSubClass | string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clinicalPharmacology?: string;
  /**
   * The RxCUI drug identifier from RXNORM.
   */
  rxcui?: string;
  /**
   * The drug or supplement's legal status, including any controlled substance schedules that apply.
   */
  legalStatus?: schema.MedicalEnumeration | string | schema.DrugLegalStatusOrSubClass;
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
   */
  breastfeedingWarning?: string;
  /**
   * The generic name of this drug or supplement.
   */
  nonProprietaryName?: string;
  /**
   * Link to the drug's label details.
   */
  labelDetails?: string;
  /**
   * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
   */
  overdosage?: string;
  /**
   * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
   */
  interactingDrug?: schema.DrugOrSubClass | string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clincalPharmacology?: string;
  /**
   * Any other drug related to this one, for example commonly-prescribed alternatives.
   */
  relatedDrug?: schema.DrugOrSubClass | string;
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
   */
  foodWarning?: string;
  /**
   * True if the drug is available in a generic form (regardless of name).
   */
  isAvailableGenerically?: boolean;
  /**
   * Proprietary name given to the diet plan, typically by its originator or creator.
   */
  proprietaryName?: string;
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   */
  activeIngredient?: string;
  /**
   * A route by which this drug may be administered, e.g. 'oral'.
   */
  administrationRoute?: string;
  /**
   * Any FDA or other warnings about the drug (text or URL).
   */
  warning?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
   */
  alcoholWarning?: string;
  /**
   * The manufacturer of the product.
   */
  manufacturer?: schema.OrganizationOrSubClass | string;
  /**
   * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
   */
  dosageForm?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
   */
  pregnancyWarning?: string;
  /**
   * The unit in which the drug is measured, e.g. '5 mg tablet'.
   */
  drugUnit?: string;
  /**
   * An available dosage strength for the drug.
   */
  availableStrength?: schema.DrugStrengthOrSubClass | string;
  /**
   * Link to prescribing information for the drug.
   */
  prescribingInfo?: string;
  /**
   * Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
   */
  prescriptionStatus?: schema.DrugPrescriptionStatusOrSubClass | string;
  /**
   * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
   */
  doseSchedule?: schema.DoseScheduleOrSubClass | string;
  /**
   * A medical guideline related to this entity.
   */
  guideline?: schema.MedicalGuidelineOrSubClass | string;
  /**
   * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
   */
  recognizingAuthority?: schema.OrganizationOrSubClass | string;
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
 * schema:Drug
 *
 * This differs from Drug because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type DrugOrSubClass =
  | Drug
  ;

/**
 * schema:Drug - Validation schema (w/ JOI)
 */
export const DrugJoiSchema = Joi.object({
  '@type': Joi.string().valid('Drug').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  mechanismOfAction: Joi.string(),
  pregnancyCategory: Joi.alternatives().try(Joi.lazy(() => schema.DrugPregnancyCategoryOrSubClassJoiSchema), Joi.string().uri()),
  isProprietary: Joi.boolean(),
  includedInHealthInsurancePlan: Joi.alternatives().try(Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema), Joi.string().uri()),
  maximumIntake: Joi.alternatives().try(Joi.lazy(() => schema.MaximumDoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
  drugClass: Joi.alternatives().try(Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.string().uri()),
  clinicalPharmacology: Joi.string(),
  rxcui: Joi.string(),
  legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
  breastfeedingWarning: Joi.string(),
  nonProprietaryName: Joi.string(),
  labelDetails: Joi.string().uri(),
  overdosage: Joi.string(),
  interactingDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
  clincalPharmacology: Joi.string(),
  relatedDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
  foodWarning: Joi.string(),
  isAvailableGenerically: Joi.boolean(),
  proprietaryName: Joi.string(),
  activeIngredient: Joi.string(),
  administrationRoute: Joi.string(),
  warning: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
  alcoholWarning: Joi.string(),
  manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  dosageForm: Joi.string(),
  pregnancyWarning: Joi.string(),
  drugUnit: Joi.string(),
  availableStrength: Joi.alternatives().try(Joi.lazy(() => schema.DrugStrengthOrSubClassJoiSchema), Joi.string().uri()),
  prescribingInfo: Joi.string().uri(),
  prescriptionStatus: Joi.alternatives().try(Joi.lazy(() => schema.DrugPrescriptionStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  doseSchedule: Joi.alternatives().try(Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
  guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
  recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
  relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
  study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
  medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
});

/**
 * schema:Drug - Validation schema (w/ JOI)
 *
 * This differs from DrugJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const DrugOrSubClassJoiSchema = Joi.alternatives().try([
  DrugJoiSchema,
]);

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
export function validateDrug(maybeDrug: unknown): Drug | OaValidationError {
  const { value, error } = DrugJoiSchema.validate(maybeDrug);
  if (error) {
    return new OaValidationError('Drug', maybeDrug, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Drug;
}
