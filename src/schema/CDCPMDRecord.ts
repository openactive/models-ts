// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:CDCPMDRecord
 */
export type CDCPMDRecord = {
  '@type': 'CDCPMDRecord';
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
   * numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
   */
  cvdNumVentUse?: number;
  /**
   * numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
   */
  cvdNumTotBeds?: number;
  /**
   * numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
   */
  cvdNumC19Died?: number;
  /**
   * numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
   */
  cvdNumC19HOPats?: number;
  /**
   * Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
   */
  cvdFacilityCounty?: string;
  /**
   * numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
   */
  cvdNumC19OverflowPats?: number;
  /**
   * numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
   */
  cvdNumBeds?: number;
  /**
   * Publication date of an online listing.
   */
  datePosted?: string;
  /**
   * numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
   */
  cvdNumICUBedsOcc?: number;
  /**
   * numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
   */
  cvdNumVent?: number;
  /**
   * numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
   */
  cvdNumC19HospPats?: number;
  /**
   * numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
   */
  cvdNumICUBeds?: number;
  /**
   * numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
   */
  cvdNumC19OFMechVentPats?: number;
  /**
   * numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
   */
  cvdNumC19MechVentPats?: number;
  /**
   * Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
   */
  cvdFacilityId?: string;
  /**
   * collectiondate - Date for which patient counts are reported.
   */
  cvdCollectionDate?: string;
  /**
   * numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
   */
  cvdNumBedsOcc?: number;
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
 * schema:CDCPMDRecord
 *
 * This differs from CDCPMDRecord because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type CDCPMDRecordOrSubClass =
  | CDCPMDRecord
  ;

/**
 * schema:CDCPMDRecord - Validation schema (w/ JOI)
 */
export const CDCPMDRecordJoiSchema = Joi.object({
  '@type': Joi.string().valid('CDCPMDRecord').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  cvdNumVentUse: Joi.number(),
  cvdNumTotBeds: Joi.number(),
  cvdNumC19Died: Joi.number(),
  cvdNumC19HOPats: Joi.number(),
  cvdFacilityCounty: Joi.string(),
  cvdNumC19OverflowPats: Joi.number(),
  cvdNumBeds: Joi.number(),
  datePosted: Joi.string().isoDate(),
  cvdNumICUBedsOcc: Joi.number(),
  cvdNumVent: Joi.number(),
  cvdNumC19HospPats: Joi.number(),
  cvdNumICUBeds: Joi.number(),
  cvdNumC19OFMechVentPats: Joi.number(),
  cvdNumC19MechVentPats: Joi.number(),
  cvdFacilityId: Joi.string(),
  cvdCollectionDate: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  cvdNumBedsOcc: Joi.number(),
  mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  additionalType: Joi.string().uri(),
  url: Joi.string().uri(),
  alternateName: Joi.string(),
  sameAs: Joi.string().uri(),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * schema:CDCPMDRecord - Validation schema (w/ JOI)
 *
 * This differs from CDCPMDRecordJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const CDCPMDRecordOrSubClassJoiSchema = Joi.alternatives().try([
  CDCPMDRecordJoiSchema,
]);

/**
 * Runtime validator for schema:CDCPMDRecord.
 *
 * If some data has a structure which matches a schema:CDCPMDRecord, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCDCPMDRecord = validateCDCPMDRecord(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCDCPMDRecord instanceof OaValidationError) {
 *   // From this point on, `maybeCDCPMDRecord` will have type `OaValidationError`
 *   const error = maybeCDCPMDRecord;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCDCPMDRecord` will have type `CDCPMDRecord`
 * const cDCPMDRecord = maybeCDCPMDRecord;
 * ```
 */
export function validateCDCPMDRecord(maybeCDCPMDRecord: unknown): CDCPMDRecord | OaValidationError {
  const { value, error } = CDCPMDRecordJoiSchema.validate(maybeCDCPMDRecord);
  if (error) {
    return new OaValidationError('CDCPMDRecord', maybeCDCPMDRecord, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as CDCPMDRecord;
}
