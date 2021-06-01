// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Concept
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 */
export type Concept = {
  '@type': 'Concept';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://openactive.io/activity-list#a454c7e6-52da-426d-9bd1-743e9d7d266d12345"
   * ```
   */
  '@id'?: string;
  /**
   * An alternative human readable string for use in user interfaces.
   *
   * ```json
   * "altLabel": [
   *   "Five a side"
   * ]
   * ```
   */
  altLabel?: string[];
  /**
   * A broader Concept URI
   *
   * ```json
   * "broader": [
   *   "https://openactive.io/activity-list#6ca15167-51da-4d91-a1ae-8a45dc47b0ea"
   * ]
   * ```
   */
  broader?: string[];
  /**
   * A human readable string that unambiguously defines the Concept, for use in user interfaces.
   *
   * ```json
   * "definition": "Latin American style of dance with Cuban origins."
   * ```
   */
  definition?: string;
  /**
   * An alternative human readable string used to drive autocomplete search matches, that is hidden from the user.
   *
   * ```json
   * "hiddenLabel": [
   *   "5-a-side"
   * ]
   * ```
   */
  hiddenLabel?: string[];
  /**
   * A stable URL reference for the taxonomy, which must be `https://openactive.io/activity-list` to reference the OpenActive Activity List.
   *
   * ```json
   * "inScheme": "https://openactive.io/activity-list"
   * ```
   */
  inScheme?: string;
  /**
   * A more specific concept URI
   *
   * ```json
   * "narrower": [
   *   "https://openactive.io/activity-list#b3829f3e-a63e-455f-a51c-1f50ecf85ad5"
   * ]
   * ```
   */
  narrower?: string[];
  /**
   * A human-readable identifier for the concept.
   *
   * ```json
   * "notation": "salsa"
   * ```
   */
  notation?: string;
  /**
   * A human readable string that minimally describes the Concept, for use in user interfaces.
   *
   * ```json
   * "prefLabel": "Salsa"
   * ```
   */
  prefLabel?: string;
  /**
   * A related Concept URI
   *
   * ```json
   * "related": [
   *   "https://openactive.io/activity-list#5cdf5ead-e19d-4619-9585-cfe509c3fe52"
   * ]
   * ```
   */
  related?: string[];
  /**
   * A reference to the Scheme URI, the existence of which indicates that this Concept is at the top level of the hierarchy.
   *
   * ```json
   * "topConceptOf": "https://openactive.io/activity-list"
   * ```
   */
  topConceptOf?: string;
};

/**
 * Concept
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 *
 * This differs from Concept because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ConceptOrSubClass =
  | Concept
  ;

/**
 * Concept - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 */
export const ConceptJoiSchema = Joi.object({
  '@type': Joi.string().valid('Concept').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
  altLabel: Joi.array().items(Joi.string()),
  broader: Joi.array().items(Joi.string().uri()),
  definition: Joi.string(),
  hiddenLabel: Joi.array().items(Joi.string()),
  inScheme: Joi.string().uri(),
  narrower: Joi.array().items(Joi.string().uri()),
  notation: Joi.string(),
  prefLabel: Joi.string(),
  related: Joi.array().items(Joi.string().uri()),
  topConceptOf: Joi.string().uri(),
});

/**
 * Concept - Validation schema (w/ JOI)
 *
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 *
 * This differs from ConceptJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ConceptOrSubClassJoiSchema = Joi.alternatives().try([
  ConceptJoiSchema,
]);

/**
 * Runtime validator for Concept.
 *
 * If some data has a structure which matches a Concept, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConcept = Concept.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConcept instanceof OaValidationError) {
 *   // From this point on, `maybeConcept` will have type `OaValidationError`
 *   const error = maybeConcept;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConcept` will have type `Concept`
 * const concept = maybeConcept;
 * ```
 */
export function validateConcept(maybeConcept: unknown): Concept | OaValidationError {
  const { value, error } = ConceptJoiSchema.validate(maybeConcept);
  if (error) {
    return new OaValidationError('Concept', maybeConcept, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Concept;
}
