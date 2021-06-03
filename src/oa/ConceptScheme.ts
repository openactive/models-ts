// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * ConceptScheme
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 */
export type ConceptScheme = {
  '@type': 'ConceptScheme';
  '@context'?: string | string[];
  /**
   * The title of the scheme
   *
   * ```json
   * "title": "Activity List"
   * ```
   */
  title?: string;
  /**
   * A plain text description of the taxonomy, which must not include HTML or other markup.
   *
   * ```json
   * "description": "An example activity list."
   * ```
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://example.com/scheme/12345"
   * ```
   */
  '@id'?: string;
  /**
   * A collection of concepts that are part of this scheme
   *
   * ```json
   * "concept": [
   *   {
   *     "@id": "https://example.com/concept/martial-arts",
   *     "type": "Concept",
   *     "prefLabel": "Martial Arts",
   *     "inScheme": "https://example.com/scheme/123",
   *     "narrower": "https://example.com/concept/martial-arts/karate"
   *   }
   * ]
   * ```
   */
  concept?: oa.ConceptOrSubClass[];
  /**
   * Reference to the license under which the activity list has been published.
   *
   * ```json
   * "license": "https://example.com/license/MIT"
   * ```
   */
  license?: string;
  /**
   * A URL to a web page (or section of a page) that describes the concept scheme.
   *
   * ```json
   * "url": "https://example.com/scheme/1234"
   * ```
   */
  url?: string;
};

/**
 * ConceptScheme
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 *
 * This differs from ConceptScheme because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ConceptSchemeOrSubClass =
  | ConceptScheme
  ;

/**
 * ConceptScheme - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 */
export const ConceptSchemeJoiSchema = Joi.object({
  '@type': Joi.string().valid('ConceptScheme').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  title: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  concept: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  license: Joi.string().uri(),
  url: Joi.string().uri(),
});

/**
 * ConceptScheme - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 *
 * This differs from ConceptSchemeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ConceptSchemeOrSubClassJoiSchema = Joi.alternatives().try([
  ConceptSchemeJoiSchema,
]);

/**
 * Runtime validator for ConceptScheme.
 *
 * If some data has a structure which matches a ConceptScheme, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConceptScheme = validateConceptScheme(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConceptScheme instanceof OaValidationError) {
 *   // From this point on, `maybeConceptScheme` will have type `OaValidationError`
 *   const error = maybeConceptScheme;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConceptScheme` will have type `ConceptScheme`
 * const conceptScheme = maybeConceptScheme;
 * ```
 */
export function validateConceptScheme(maybeConceptScheme: unknown): ConceptScheme | OaValidationError {
  const { value, error } = ConceptSchemeJoiSchema.validate(maybeConceptScheme);
  if (error) {
    return new OaValidationError('ConceptScheme', maybeConceptScheme, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ConceptScheme;
}
