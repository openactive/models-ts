// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:HowToSupply
 */
export type HowToSupply = {
  '@type': 'HowToSupply';
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
   * The estimated cost of the supply or supplies consumed when performing instructions.
   */
  estimatedCost?: string | schema.MonetaryAmountOrSubClass;
  /**
   * The required quantity of the item(s).
   */
  requiredQuantity?: string | schema.QuantitativeValueOrSubClass | number;
  /**
   * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
   */
  item?: schema.ThingOrSubClass | string;
  /**
   * A link to the ListItem that follows the current one.
   */
  nextItem?: schema.ListItemOrSubClass | string;
  /**
   * A link to the ListItem that preceeds the current one.
   */
  previousItem?: schema.ListItemOrSubClass | string;
  /**
   * The position of an item in a series or sequence of items.
   */
  position?: string | number;
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
 * schema:HowToSupply
 *
 * This differs from HowToSupply because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type HowToSupplyOrSubClass =
  | HowToSupply
  ;

/**
 * schema:HowToSupply - Validation schema (w/ JOI)
 */
export const HowToSupplyJoiSchema = Joi.object({
  '@type': Joi.string().valid('HowToSupply').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  estimatedCost: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
  requiredQuantity: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
  item: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  nextItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
  previousItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
  position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
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
 * schema:HowToSupply - Validation schema (w/ JOI)
 *
 * This differs from HowToSupplyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const HowToSupplyOrSubClassJoiSchema = Joi.alternatives().try([
  HowToSupplyJoiSchema,
]);

/**
 * Runtime validator for schema:HowToSupply.
 *
 * If some data has a structure which matches a schema:HowToSupply, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHowToSupply = validateHowToSupply(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHowToSupply instanceof OaValidationError) {
 *   // From this point on, `maybeHowToSupply` will have type `OaValidationError`
 *   const error = maybeHowToSupply;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHowToSupply` will have type `HowToSupply`
 * const howToSupply = maybeHowToSupply;
 * ```
 */
export function validateHowToSupply(maybeHowToSupply: unknown): HowToSupply | OaValidationError {
  const { value, error } = HowToSupplyJoiSchema.validate(maybeHowToSupply);
  if (error) {
    return new OaValidationError('HowToSupply', maybeHowToSupply, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as HowToSupply;
}
