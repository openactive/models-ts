
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const MaximumDoseSchedule = s.intersection([
  s.type({'@type': s.literal('MaximumDoseSchedule')}),
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
      * How often the dose is taken, e.g. 'daily'.
      */
      frequency: s.string,
      /**
      * The value of the dose, e.g. 500.
      */
      doseValue: s.union([s.nonNegativeFloat,schema.enums.QualitativeValue]),
      /**
      * The unit of the dose, e.g. 'mg'.
      */
      doseUnit: s.string,
      /**
      * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
      */
      targetPopulation: s.string,
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
  MaximumDoseSchedule,
};