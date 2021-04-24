
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const CDCPMDRecord = s.intersection([
  s.type({'@type': s.literal('CDCPMDRecord')}),
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
      * numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
      */
      cvdNumC19OverflowPats: s.nonNegativeFloat,
      /**
      * numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
      */
      cvdNumTotBeds: s.nonNegativeFloat,
      /**
      * numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
      */
      cvdNumBeds: s.nonNegativeFloat,
      /**
      * numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
      */
      cvdNumC19OFMechVentPats: s.nonNegativeFloat,
      /**
      * numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
      */
      cvdNumC19HospPats: s.nonNegativeFloat,
      /**
      * numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
      */
      cvdNumVent: s.nonNegativeFloat,
      /**
      * numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
      */
      cvdNumBedsOcc: s.nonNegativeFloat,
      /**
      * numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
      */
      cvdNumC19HOPats: s.nonNegativeFloat,
      /**
      * numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
      */
      cvdNumC19Died: s.nonNegativeFloat,
      /**
      * collectiondate - Date for which patient counts are reported.
      */
      cvdCollectionDate: s.union([s.string,s.isoDateTimeString]),
      /**
      * numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
      */
      cvdNumVentUse: s.nonNegativeFloat,
      /**
      * Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
      */
      cvdFacilityCounty: s.string,
      /**
      * numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
      */
      cvdNumICUBedsOcc: s.nonNegativeFloat,
      /**
      * Publication date of an online listing.
      */
      datePosted: s.union([s.string,s.isoDateTimeString]),
      /**
      * numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
      */
      cvdNumICUBeds: s.nonNegativeFloat,
      /**
      * Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
      */
      cvdFacilityId: s.string,
      /**
      * numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
      */
      cvdNumC19MechVentPats: s.nonNegativeFloat,
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
  CDCPMDRecord,
};