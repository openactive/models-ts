// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:WearableMeasurementTypeEnumeration
 */
export type WearableMeasurementTypeEnumeration = {
  '@type': 'WearableMeasurementTypeEnumeration';
  '@context'?: string | string[];
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
};

/**
 * schema:WearableMeasurementTypeEnumeration
 *
 * This differs from WearableMeasurementTypeEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type WearableMeasurementTypeEnumerationOrSubClass =
  | WearableMeasurementTypeEnumeration
  ;

/**
 * schema:WearableMeasurementTypeEnumeration - Validation schema (w/ JOI)
 */
export const WearableMeasurementTypeEnumerationJoiSchema = Joi.object({
  '@type': Joi.string().valid('WearableMeasurementTypeEnumeration').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:WearableMeasurementTypeEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableMeasurementTypeEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const WearableMeasurementTypeEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
  WearableMeasurementTypeEnumerationJoiSchema,
]);

/**
 * Runtime validator for schema:WearableMeasurementTypeEnumeration.
 *
 * If some data has a structure which matches a schema:WearableMeasurementTypeEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableMeasurementTypeEnumeration = validateWearableMeasurementTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableMeasurementTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableMeasurementTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableMeasurementTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableMeasurementTypeEnumeration` will have type `WearableMeasurementTypeEnumeration`
 * const wearableMeasurementTypeEnumeration = maybeWearableMeasurementTypeEnumeration;
 * ```
 */
export function validateWearableMeasurementTypeEnumeration(maybeWearableMeasurementTypeEnumeration: unknown): WearableMeasurementTypeEnumeration | OaValidationError {
  const { value, error } = WearableMeasurementTypeEnumerationJoiSchema.validate(maybeWearableMeasurementTypeEnumeration);
  if (error) {
    return new OaValidationError('WearableMeasurementTypeEnumeration', maybeWearableMeasurementTypeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as WearableMeasurementTypeEnumeration;
}
