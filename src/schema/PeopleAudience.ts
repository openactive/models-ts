// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:PeopleAudience
 */
export type PeopleAudience = {
  '@type': 'PeopleAudience';
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
};

/**
 * schema:PeopleAudience
 *
 * This differs from PeopleAudience because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type PeopleAudienceOrSubClass =
  | PeopleAudience
  | schema.MedicalAudienceOrSubClass
  | schema.ParentAudienceOrSubClass
  ;

/**
 * schema:PeopleAudience - Validation schema (w/ JOI)
 */
export const PeopleAudienceJoiSchema = Joi.object({
  '@type': Joi.string().valid('PeopleAudience').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  requiredMaxAge: Joi.number().integer(),
  suggestedGender: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GenderTypeJoiSchema)),
  healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
  requiredGender: Joi.string(),
  suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  suggestedMinAge: Joi.number(),
  suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  requiredMinAge: Joi.number().integer(),
  suggestedMaxAge: Joi.number(),
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
});

/**
 * schema:PeopleAudience - Validation schema (w/ JOI)
 *
 * This differs from PeopleAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PeopleAudienceOrSubClassJoiSchema = Joi.alternatives().try([
  PeopleAudienceJoiSchema,
  Joi.lazy(() => schema.MedicalAudienceOrSubClassJoiSchema),
  Joi.lazy(() => schema.ParentAudienceOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:PeopleAudience.
 *
 * If some data has a structure which matches a schema:PeopleAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePeopleAudience = validatePeopleAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePeopleAudience instanceof OaValidationError) {
 *   // From this point on, `maybePeopleAudience` will have type `OaValidationError`
 *   const error = maybePeopleAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePeopleAudience` will have type `PeopleAudience`
 * const peopleAudience = maybePeopleAudience;
 * ```
 */
export function validatePeopleAudience(maybePeopleAudience: unknown): PeopleAudience | OaValidationError {
  const { value, error } = PeopleAudienceJoiSchema.validate(maybePeopleAudience);
  if (error) {
    return new OaValidationError('PeopleAudience', maybePeopleAudience, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PeopleAudience;
}
