// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ParentAudience
 */
export type ParentAudience = {
  '@type': 'ParentAudience';
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
   * Minimal age of the child.
   */
  childMinAge?: number;
  /**
   * Maximal age of the child.
   */
  childMaxAge?: number;
  /**
   * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
   */
  suggestedGender?: schema.GenderType | string;
  /**
   * Audiences defined by a person's maximum age.
   */
  requiredMaxAge?: number;
  /**
   * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
   */
  suggestedAge?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Maximum recommended age in years for the audience or user.
   */
  suggestedMaxAge?: number;
  /**
   * Minimum recommended age in years for the audience or user.
   */
  suggestedMinAge?: number;
  /**
   * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
   */
  suggestedMeasurement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Audiences defined by a person's gender.
   */
  requiredGender?: string;
  /**
   * Specifying the health condition(s) of a patient, medical study, or other target audience.
   */
  healthCondition?: schema.MedicalConditionOrSubClass | string;
  /**
   * Audiences defined by a person's minimum age.
   */
  requiredMinAge?: number;
  /**
   * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
   */
  audienceType?: string;
  /**
   * The geographic area associated with the audience.
   */
  geographicArea?: schema.AdministrativeAreaOrSubClass | string;
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
 * schema:ParentAudience
 *
 * This differs from ParentAudience because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ParentAudienceOrSubClass =
  | ParentAudience
  ;

/**
 * schema:ParentAudience - Validation schema (w/ JOI)
 */
export const ParentAudienceJoiSchema = Joi.object({
  '@type': Joi.string().valid('ParentAudience').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  childMinAge: Joi.number(),
  childMaxAge: Joi.number(),
  suggestedGender: Joi.alternatives().try(Joi.lazy(() => schema.GenderTypeJoiSchema), Joi.string()),
  requiredMaxAge: Joi.number().integer(),
  suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  suggestedMaxAge: Joi.number(),
  suggestedMinAge: Joi.number(),
  suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  requiredGender: Joi.string(),
  healthCondition: Joi.alternatives().try(Joi.lazy(() => schema.MedicalConditionOrSubClassJoiSchema), Joi.string().uri()),
  requiredMinAge: Joi.number().integer(),
  audienceType: Joi.string(),
  geographicArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ParentAudience - Validation schema (w/ JOI)
 *
 * This differs from ParentAudienceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ParentAudienceOrSubClassJoiSchema = Joi.alternatives().try([
  ParentAudienceJoiSchema,
]);

/**
 * Runtime validator for schema:ParentAudience.
 *
 * If some data has a structure which matches a schema:ParentAudience, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParentAudience = validateParentAudience(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParentAudience instanceof OaValidationError) {
 *   // From this point on, `maybeParentAudience` will have type `OaValidationError`
 *   const error = maybeParentAudience;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParentAudience` will have type `ParentAudience`
 * const parentAudience = maybeParentAudience;
 * ```
 */
export function validateParentAudience(maybeParentAudience: unknown): ParentAudience | OaValidationError {
  const { value, error } = ParentAudienceJoiSchema.validate(maybeParentAudience);
  if (error) {
    return new OaValidationError('ParentAudience', maybeParentAudience, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ParentAudience;
}
