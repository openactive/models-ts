
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Drug = s.intersection([
  s.type({'@type': s.literal('Drug')}),
  s.partial({
      /**
      * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
      *         
      */
      identifier: s.union([schema.PropertyValue,s.urlString,s.string]),
      /**
      * The name of the item.
      */
      name: s.string,
      /**
      * A description of the item.
      */
      description: s.string,
      /**
      * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
      */
      mechanismOfAction: s.string,
      /**
      * Pregnancy category of this drug.
      */
      pregnancyCategory: schema.DrugPregnancyCategory,
      /**
      * True if this item's name is a proprietary/brand name (vs. generic name).
      */
      isProprietary: s.boolean,
      /**
      * The insurance plans that cover this drug.
      */
      includedInHealthInsurancePlan: schema.HealthInsurancePlan,
      /**
      * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
      */
      maximumIntake: schema.MaximumDoseSchedule,
      /**
      * The class of drug this belongs to (e.g., statins).
      */
      drugClass: schema.DrugClass,
      /**
      * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
      */
      clinicalPharmacology: s.string,
      /**
      * The RxCUI drug identifier from RXNORM.
      */
      rxcui: s.string,
      /**
      * The drug or supplement's legal status, including any controlled substance schedules that apply.
      */
      legalStatus: s.union([schema.enums.MedicalEnumeration,s.string,schema.DrugLegalStatus]),
      /**
      * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
      */
      breastfeedingWarning: s.string,
      /**
      * The generic name of this drug or supplement.
      */
      nonProprietaryName: s.string,
      /**
      * Link to the drug's label details.
      */
      labelDetails: s.urlString,
      /**
      * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
      */
      overdosage: s.string,
      /**
      * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
      */
      interactingDrug: schema.Drug,
      /**
      * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
      */
      clincalPharmacology: s.string,
      /**
      * Any other drug related to this one, for example commonly-prescribed alternatives.
      */
      relatedDrug: schema.Drug,
      /**
      * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
      */
      foodWarning: s.string,
      /**
      * True if the drug is available in a generic form (regardless of name).
      */
      isAvailableGenerically: s.boolean,
      /**
      * Proprietary name given to the diet plan, typically by its originator or creator.
      */
      proprietaryName: s.string,
      /**
      * An active ingredient, typically chemical compounds and/or biologic substances.
      */
      activeIngredient: s.string,
      /**
      * A route by which this drug may be administered, e.g. 'oral'.
      */
      administrationRoute: s.string,
      /**
      * Any FDA or other warnings about the drug (text or URL).
      */
      warning: s.union([s.urlString,s.string]),
      /**
      * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
      */
      alcoholWarning: s.string,
      /**
      * The manufacturer of the product.
      */
      manufacturer: schema.Organization,
      /**
      * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
      */
      dosageForm: s.string,
      /**
      * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
      */
      pregnancyWarning: s.string,
      /**
      * The unit in which the drug is measured, e.g. '5 mg tablet'.
      */
      drugUnit: s.string,
      /**
      * An available dosage strength for the drug.
      */
      availableStrength: schema.DrugStrength,
      /**
      * Link to prescribing information for the drug.
      */
      prescribingInfo: s.urlString,
      /**
      * Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
      */
      prescriptionStatus: s.union([schema.DrugPrescriptionStatus,s.string]),
      /**
      * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
      */
      doseSchedule: schema.DoseSchedule,
      /**
      * A medical guideline related to this entity.
      */
      guideline: schema.MedicalGuideline,
      /**
      * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
      */
      recognizingAuthority: schema.Organization,
      /**
      * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
      */
      code: schema.MedicalCode,
      /**
      * If applicable, a medical specialty in which this entity is relevant.
      */
      relevantSpecialty: schema.MedicalSpecialty,
      /**
      * A medical study or trial related to this entity.
      */
      study: schema.MedicalStudy,
      /**
      * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
      */
      medicineSystem: schema.MedicineSystem,
      /**
      * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
      */
      sameAs: s.urlString,
      /**
      * A CreativeWork or Event about this Thing.
      */
      subjectOf: s.union([schema.Event,schema.CreativeWork]),
      /**
      * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
      */
      potentialAction: schema.Action,
      /**
      * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
      */
      mainEntityOfPage: s.union([schema.CreativeWork,s.urlString]),
      /**
      * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      */
      additionalType: s.urlString,
      /**
      * An alias for the item.
      */
      alternateName: s.string,
      /**
      * URL of the item.
      */
      url: s.urlString,
      /**
      * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
      */
      image: s.union([schema.ImageObject,s.urlString]),
      /**
      * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
      */
      disambiguatingDescription: s.string,
  })
])

module.exports = {
  Drug,
};