// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * OpeningHoursSpecification
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export type OpeningHoursSpecification = {
  '@type': 'OpeningHoursSpecification';
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
   * The closing time. Set "00:00" for the value of `opens` and `closes` to indicated the `Place` is closed on the specified days.
   *
   * ```json
   * "closes": "17:00"
   * ```
   */
  closes?: string;
  /**
   * Defines the days of the week upon which the `opens` and `closes` values are specified. Note this property is optional when used within `specialOpeningHoursSpecification`.
   *
   * ```json
   * "dayOfWeek": [
   *   "https://schema.org/Saturday",
   *   "https://schema.org/Sunday"
   * ]
   * ```
   */
  dayOfWeek?: schema.DayOfWeek[];
  /**
   * The opening time. Set "00:00" for the value of `opens` and `closes` to indicated the `Place` is closed on the specified days.
   *
   * ```json
   * "opens": "09:00"
   * ```
   */
  opens?: string;
  /**
   * The date when the item becomes valid. The item will be valid at the beginning of the specified day. Note this property is required when used within `specialOpeningHoursSpecification`.
   *
   * ```json
   * "validFrom": "2018-01-22"
   * ```
   */
  validFrom?: string;
  /**
   * The date after which the item is no longer valid. The item will cease to be valid at the end of the specified day. Note this property is required when used within `specialOpeningHoursSpecification`.
   *
   * ```json
   * "validThrough": "2018-01-27"
   * ```
   */
  validThrough?: string;
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
 * OpeningHoursSpecification
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpeningHoursSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OpeningHoursSpecificationOrSubClass =
  | OpeningHoursSpecification
  ;

/**
 * OpeningHoursSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export const OpeningHoursSpecificationJoiSchema = Joi.object({
  '@type': Joi.string().valid('OpeningHoursSpecification').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  closes: Joi.string(),
  dayOfWeek: Joi.array().items(Joi.lazy(() => schema.DayOfWeekJoiSchema)),
  opens: Joi.string(),
  validFrom: Joi.string().isoDate(),
  validThrough: Joi.string().isoDate(),
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
 * OpeningHoursSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpeningHoursSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OpeningHoursSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
  OpeningHoursSpecificationJoiSchema,
]);

/**
 * Runtime validator for OpeningHoursSpecification.
 *
 * If some data has a structure which matches a OpeningHoursSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpeningHoursSpecification = OpeningHoursSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpeningHoursSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeOpeningHoursSpecification` will have type `OaValidationError`
 *   const error = maybeOpeningHoursSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpeningHoursSpecification` will have type `OpeningHoursSpecification`
 * const openingHoursSpecification = maybeOpeningHoursSpecification;
 * ```
 */
export function validateOpeningHoursSpecification(maybeOpeningHoursSpecification: unknown): OpeningHoursSpecification | OaValidationError {
  const { value, error } = OpeningHoursSpecificationJoiSchema.validate(maybeOpeningHoursSpecification);
  if (error) {
    return new OaValidationError('OpeningHoursSpecification', maybeOpeningHoursSpecification, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OpeningHoursSpecification;
}
