// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:WearableSizeSystemEnumeration
 */
export type WearableSizeSystemEnumeration = {
  '@type': 'WearableSizeSystemEnumeration';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:WearableSizeSystemEnumeration
 *
 * This differs from WearableSizeSystemEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type WearableSizeSystemEnumerationOrSubClass =
  | WearableSizeSystemEnumeration
  ;

/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 */
export const WearableSizeSystemEnumerationJoiSchema = Joi.object({
  '@type': Joi.string().valid('WearableSizeSystemEnumeration').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableSizeSystemEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const WearableSizeSystemEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
  WearableSizeSystemEnumerationJoiSchema,
]);

/**
 * Runtime validator for schema:WearableSizeSystemEnumeration.
 *
 * If some data has a structure which matches a schema:WearableSizeSystemEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableSizeSystemEnumeration = validateWearableSizeSystemEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableSizeSystemEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableSizeSystemEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableSizeSystemEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableSizeSystemEnumeration` will have type `WearableSizeSystemEnumeration`
 * const wearableSizeSystemEnumeration = maybeWearableSizeSystemEnumeration;
 * ```
 */
export function validateWearableSizeSystemEnumeration(maybeWearableSizeSystemEnumeration: unknown): WearableSizeSystemEnumeration | OaValidationError {
  const { value, error } = WearableSizeSystemEnumerationJoiSchema.validate(maybeWearableSizeSystemEnumeration);
  if (error) {
    return new OaValidationError('WearableSizeSystemEnumeration', maybeWearableSizeSystemEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as WearableSizeSystemEnumeration;
}
