// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalObservationalStudy
 */
export type MedicalObservationalStudy = {
  '@type': 'MedicalObservationalStudy';
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
   * Specifics about the observational study design (enumerated).
   */
  studyDesign?: schema.MedicalObservationalStudyDesignOrSubClass | string;
  /**
   * The location in which the study is taking/took place.
   */
  studyLocation?: schema.AdministrativeAreaOrSubClass | string;
  /**
   * A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.
   */
  studySubject?: schema.MedicalEntityOrSubClass | string;
  /**
   * The status of the study (enumerated).
   */
  status?: string | schema.MedicalStudyStatusOrSubClass | schema.EventStatusType;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Specifying the health condition(s) of a patient, medical study, or other target audience.
   */
  healthCondition?: schema.MedicalConditionOrSubClass | string;
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
   * The drug or supplement's legal status, including any controlled substance schedules that apply.
   */
  legalStatus?: schema.MedicalEnumeration | schema.DrugLegalStatusOrSubClass | string;
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
 * schema:MedicalObservationalStudy
 *
 * This differs from MedicalObservationalStudy because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalObservationalStudyOrSubClass =
  | MedicalObservationalStudy
  ;

/**
 * schema:MedicalObservationalStudy - Validation schema (w/ JOI)
 */
export const MedicalObservationalStudyJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalObservationalStudy').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  studyDesign: Joi.alternatives().try(Joi.lazy(() => schema.MedicalObservationalStudyDesignOrSubClassJoiSchema), Joi.string().uri()),
  studyLocation: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
  studySubject: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEntityOrSubClassJoiSchema), Joi.string().uri()),
  status: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MedicalStudyStatusOrSubClassJoiSchema), Joi.lazy(() => schema.EventStatusTypeJoiSchema), Joi.string().uri()),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
  medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
  guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
  study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
  relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
  recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
  legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
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
 * schema:MedicalObservationalStudy - Validation schema (w/ JOI)
 *
 * This differs from MedicalObservationalStudyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalObservationalStudyOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalObservationalStudyJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalObservationalStudy.
 *
 * If some data has a structure which matches a schema:MedicalObservationalStudy, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalObservationalStudy = validateMedicalObservationalStudy(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalObservationalStudy instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalObservationalStudy` will have type `OaValidationError`
 *   const error = maybeMedicalObservationalStudy;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalObservationalStudy` will have type `MedicalObservationalStudy`
 * const medicalObservationalStudy = maybeMedicalObservationalStudy;
 * ```
 */
export function validateMedicalObservationalStudy(maybeMedicalObservationalStudy: unknown): MedicalObservationalStudy | OaValidationError {
  const { value, error } = MedicalObservationalStudyJoiSchema.validate(maybeMedicalObservationalStudy);
  if (error) {
    return new OaValidationError('MedicalObservationalStudy', maybeMedicalObservationalStudy, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalObservationalStudy;
}
