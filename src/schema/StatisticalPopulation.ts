// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:StatisticalPopulation
 */
export type StatisticalPopulation = {
  '@type': 'StatisticalPopulation';
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
   * Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]].
   */
  numConstraints?: number;
  /**
   * Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities
   *   corresponding to an indicated type (via [[populationType]]).
   */
  constrainingProperty?: number;
  /**
   * Indicates the populationType common to all members of a [[StatisticalPopulation]].
   */
  populationType?: schema.ClassOrSubClass | string;
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
 * schema:StatisticalPopulation
 *
 * This differs from StatisticalPopulation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type StatisticalPopulationOrSubClass =
  | StatisticalPopulation
  ;

/**
 * schema:StatisticalPopulation - Validation schema (w/ JOI)
 */
export const StatisticalPopulationJoiSchema = Joi.object({
  '@type': Joi.string().valid('StatisticalPopulation').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  numConstraints: Joi.number().integer(),
  constrainingProperty: Joi.number().integer(),
  populationType: Joi.alternatives().try(Joi.lazy(() => schema.ClassOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:StatisticalPopulation - Validation schema (w/ JOI)
 *
 * This differs from StatisticalPopulationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const StatisticalPopulationOrSubClassJoiSchema = Joi.alternatives().try([
  StatisticalPopulationJoiSchema,
]);

/**
 * Runtime validator for schema:StatisticalPopulation.
 *
 * If some data has a structure which matches a schema:StatisticalPopulation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStatisticalPopulation = StatisticalPopulation.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStatisticalPopulation instanceof OaValidationError) {
 *   // From this point on, `maybeStatisticalPopulation` will have type `OaValidationError`
 *   const error = maybeStatisticalPopulation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStatisticalPopulation` will have type `StatisticalPopulation`
 * const statisticalPopulation = maybeStatisticalPopulation;
 * ```
 */
export function validateStatisticalPopulation(maybeStatisticalPopulation: unknown): StatisticalPopulation | OaValidationError {
  const { value, error } = StatisticalPopulationJoiSchema.validate(maybeStatisticalPopulation);
  if (error) {
    return new OaValidationError('StatisticalPopulation', maybeStatisticalPopulation, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as StatisticalPopulation;
}
