
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalSymptom = s.intersection([
  s.type({'@type': s.literal('MedicalSymptom')}),
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
      * A possible treatment to address this condition, sign or symptom.
      */
      possibleTreatment: schema.MedicalTherapy,
      /**
      * One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
      */
      differentialDiagnosis: schema.DDxElement,
      /**
      * The characteristics of associated patients, such as age, gender, race etc.
      */
      epidemiology: s.string,
      /**
      * The anatomy of the underlying organ system or structures associated with this entity.
      */
      associatedAnatomy: s.union([schema.AnatomicalStructure,schema.AnatomicalSystem,schema.SuperficialAnatomy]),
      /**
      * The expected progression of the condition if it is not treated and allowed to progress naturally.
      */
      naturalProgression: s.string,
      /**
      * A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
      */
      secondaryPrevention: schema.MedicalTherapy,
      /**
      * The status of the study (enumerated).
      */
      status: s.union([schema.enums.EventStatusType,s.string,schema.MedicalStudyStatus]),
      /**
      * A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
      */
      possibleComplication: s.string,
      /**
      * A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
      */
      primaryPrevention: schema.MedicalTherapy,
      /**
      * Specifying a drug or medicine used in a medication procedure.
      */
      drug: schema.Drug,
      /**
      * A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
      */
      signOrSymptom: schema.MedicalSignOrSymptom,
      /**
      * The likely outcome in either the short term or long term of the medical condition.
      */
      expectedPrognosis: s.string,
      /**
      * A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.
      */
      riskFactor: schema.MedicalRiskFactor,
      /**
      * The stage of the condition, if applicable.
      */
      stage: schema.MedicalConditionStage,
      /**
      * A medical test typically performed given this condition.
      */
      typicalTest: schema.MedicalTest,
      /**
      * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
      */
      pathophysiology: s.string,
      /**
      * A medical guideline related to this entity.
      */
      guideline: schema.MedicalGuideline,
      /**
      * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
      */
      recognizingAuthority: schema.Organization,
      /**
      * The drug or supplement's legal status, including any controlled substance schedules that apply.
      */
      legalStatus: s.union([schema.enums.MedicalEnumeration,s.string,schema.DrugLegalStatus]),
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
  MedicalSymptom,
};