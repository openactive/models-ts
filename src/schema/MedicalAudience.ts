// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalAudience
 */
export type MedicalAudience = {
  '@type': 'MedicalAudience';
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
   * The geographic area associated with the audience.
   */
  geographicArea?: schema.AdministrativeAreaOrSubClass | string;
  /**
   * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
   */
  audienceType?: string;
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
  /**
   * Audiences defined by a person's maximum age.
   */
  requiredMaxAge?: number;
  /**
   * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
   */
  suggestedGender?: string | schema.GenderType;
  /**
   * Specifying the health condition(s) of a patient, medical study, or other target audience.
   */
  healthCondition?: schema.MedicalConditionOrSubClass | string;
  /**
   * Audiences defined by a person's gender.
   */
  requiredGender?: string;
  /**
   * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
   */
  suggestedAge?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Minimum recommended age in years for the audience or user.
   */
  suggestedMinAge?: number;
  /**
   * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
   */
  suggestedMeasurement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Audiences defined by a person's minimum age.
   */
  requiredMinAge?: number;
  /**
   * Maximum recommended age in years for the audience or user.
   */
  suggestedMaxAge?: number;
};

/**
 * schema:MedicalAudience
 *
 * This differs from MedicalAudience because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalAudienceOrSubClass =
  | MedicalAudience
  | schema.PatientOrSubClass
  ;

/**
 * schema:MedicalAudience - Validation schema (w/ JOI)
 */
export const MedicalAudienceJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalAudience').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  geographicArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
  audienceType: Joi.string(),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  requiredMaxAge: Joi.number().integer(),
  suggestedGender: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GenderTypeJoiSchema)),
  healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
  requiredGender: Joi.string(),
  suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  suggestedMinAge: Joi.number(),
  suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  requiredMinAge: Joi.number().integer(),
  suggestedMaxAge: Joi.number(),
});

/**
 * schema:MedicalAudience - Validation schema (w/ JOI)
 *
 * This differs from MedicalAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalAudienceOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalAudienceJoiSchema,
  Joi.lazy(() => schema.PatientOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:MedicalAudience.
 *
 * If some data has a structure which matches a schema:MedicalAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalAudience = validateMedicalAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalAudience instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalAudience` will have type `OaValidationError`
 *   const error = maybeMedicalAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalAudience` will have type `MedicalAudience`
 * const medicalAudience = maybeMedicalAudience;
 * ```
 */
export function validateMedicalAudience(maybeMedicalAudience: unknown): MedicalAudience | OaValidationError {
  const { value, error } = MedicalAudienceJoiSchema.validate(maybeMedicalAudience);
  if (error) {
    return new OaValidationError('MedicalAudience', maybeMedicalAudience, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalAudience;
}
