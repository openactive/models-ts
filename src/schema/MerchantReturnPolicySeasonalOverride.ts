// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MerchantReturnPolicySeasonalOverride
 */
export type MerchantReturnPolicySeasonalOverride = {
  '@type': 'MerchantReturnPolicySeasonalOverride';
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
   * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
   */
  merchantReturnDays?: string | number;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  endDate?: string;
  /**
   * Specifies an applicable return policy (from an enumeration).
   */
  returnPolicyCategory?: schema.MerchantReturnEnumeration;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  startDate?: string;
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
 * schema:MerchantReturnPolicySeasonalOverride
 *
 * This differs from MerchantReturnPolicySeasonalOverride because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MerchantReturnPolicySeasonalOverrideOrSubClass =
  | MerchantReturnPolicySeasonalOverride
  ;

/**
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 */
export const MerchantReturnPolicySeasonalOverrideJoiSchema = Joi.object({
  '@type': Joi.string().valid('MerchantReturnPolicySeasonalOverride').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  merchantReturnDays: Joi.alternatives().try(Joi.string().isoDate(), Joi.number().integer()),
  endDate: Joi.string().isoDate(),
  returnPolicyCategory: Joi.lazy(() => schema.MerchantReturnEnumerationJoiSchema),
  startDate: Joi.string().isoDate(),
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
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 *
 * This differs from MerchantReturnPolicySeasonalOverrideJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema = Joi.alternatives().try([
  MerchantReturnPolicySeasonalOverrideJoiSchema,
]);

/**
 * Runtime validator for schema:MerchantReturnPolicySeasonalOverride.
 *
 * If some data has a structure which matches a schema:MerchantReturnPolicySeasonalOverride, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnPolicySeasonalOverride = validateMerchantReturnPolicySeasonalOverride(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnPolicySeasonalOverride instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `OaValidationError`
 *   const error = maybeMerchantReturnPolicySeasonalOverride;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `MerchantReturnPolicySeasonalOverride`
 * const merchantReturnPolicySeasonalOverride = maybeMerchantReturnPolicySeasonalOverride;
 * ```
 */
export function validateMerchantReturnPolicySeasonalOverride(maybeMerchantReturnPolicySeasonalOverride: unknown): MerchantReturnPolicySeasonalOverride | OaValidationError {
  const { value, error } = MerchantReturnPolicySeasonalOverrideJoiSchema.validate(maybeMerchantReturnPolicySeasonalOverride);
  if (error) {
    return new OaValidationError('MerchantReturnPolicySeasonalOverride', maybeMerchantReturnPolicySeasonalOverride, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MerchantReturnPolicySeasonalOverride;
}