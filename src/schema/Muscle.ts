// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Muscle
 */
export type Muscle = {
  '@type': 'Muscle';
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
   * The underlying innervation associated with the muscle.
   */
  nerve?: schema.NerveOrSubClass | string;
  /**
   * The muscle whose action counteracts the specified muscle.
   */
  antagonist?: schema.MuscleOrSubClass | string;
  /**
   * The movement the muscle generates.
   */
  muscleAction?: string;
  /**
   * The blood vessel that carries blood from the heart to the muscle.
   */
  bloodSupply?: schema.VesselOrSubClass | string;
  /**
   * The place of attachment of a muscle, or what the muscle moves.
   */
  insertion?: schema.AnatomicalStructureOrSubClass | string;
  /**
   * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
   */
  associatedPathophysiology?: string;
  /**
   * Other anatomical structures to which this structure is connected.
   */
  connectedTo?: schema.AnatomicalStructureOrSubClass | string;
  /**
   * A medical therapy related to this anatomy.
   */
  relatedTherapy?: schema.MedicalTherapyOrSubClass | string;
  /**
   * A medical condition associated with this anatomy.
   */
  relatedCondition?: schema.MedicalConditionOrSubClass | string;
  /**
   * Component (sub-)structure(s) that comprise this anatomical structure.
   */
  subStructure?: schema.AnatomicalStructureOrSubClass | string;
  /**
   * The anatomical or organ system that this structure is part of.
   */
  partOfSystem?: schema.AnatomicalSystemOrSubClass | string;
  /**
   * Location in the body of the anatomical structure.
   */
  bodyLocation?: string;
  /**
   * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
   */
  diagram?: schema.ImageObjectOrSubClass | string;
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
 * schema:Muscle
 *
 * This differs from Muscle because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MuscleOrSubClass =
  | Muscle
  ;

/**
 * schema:Muscle - Validation schema (w/ JOI)
 */
export const MuscleJoiSchema = Joi.object({
  '@type': Joi.string().valid('Muscle').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  nerve: Joi.alternatives().try(Joi.lazy(() => schema.NerveOrSubClassJoiSchema), Joi.string().uri()),
  antagonist: Joi.alternatives().try(Joi.lazy(() => schema.MuscleOrSubClassJoiSchema), Joi.string().uri()),
  muscleAction: Joi.string(),
  bloodSupply: Joi.alternatives().try(Joi.lazy(() => schema.VesselOrSubClassJoiSchema), Joi.string().uri()),
  insertion: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.string().uri()),
  associatedPathophysiology: Joi.string(),
  connectedTo: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.string().uri()),
  relatedTherapy: Joi.alternatives().try(Joi.lazy(() => schema.MedicalTherapyOrSubClassJoiSchema), Joi.string().uri()),
  relatedCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
  subStructure: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalStructureOrSubClassJoiSchema), Joi.string().uri()),
  partOfSystem: Joi.alternatives().try(Joi.lazy(() => schema.AnatomicalSystemOrSubClassJoiSchema), Joi.string().uri()),
  bodyLocation: Joi.string(),
  diagram: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
  recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Muscle - Validation schema (w/ JOI)
 *
 * This differs from MuscleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MuscleOrSubClassJoiSchema = Joi.alternatives().try([
  MuscleJoiSchema,
]);

/**
 * Runtime validator for schema:Muscle.
 *
 * If some data has a structure which matches a schema:Muscle, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMuscle = validateMuscle(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMuscle instanceof OaValidationError) {
 *   // From this point on, `maybeMuscle` will have type `OaValidationError`
 *   const error = maybeMuscle;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMuscle` will have type `Muscle`
 * const muscle = maybeMuscle;
 * ```
 */
export function validateMuscle(maybeMuscle: unknown): Muscle | OaValidationError {
  const { value, error } = MuscleJoiSchema.validate(maybeMuscle);
  if (error) {
    return new OaValidationError('Muscle', maybeMuscle, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Muscle;
}
