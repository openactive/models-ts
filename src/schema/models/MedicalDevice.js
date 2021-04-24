
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MedicalDevice = s.intersection([
  s.type({'@type': s.literal('MedicalDevice')}),
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
      * A description of the procedure involved in setting up, using, and/or installing the device.
      */
      procedure: s.string,
      /**
      * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
      */
      seriousAdverseOutcome: schema.MedicalEntity,
      /**
      * A contraindication for this therapy.
      */
      contraindication: s.union([s.string,schema.MedicalContraindication]),
      /**
      * A description of the postoperative procedures, care, and/or followups for this device.
      */
      postOp: s.string,
      /**
      * A description of the workup, testing, and other preparations required before implanting this device.
      */
      preOp: s.string,
      /**
      * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
      */
      adverseOutcome: schema.MedicalEntity,
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
  MedicalDevice,
};