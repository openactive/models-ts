// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:WearableSizeGroupEnumeration
 */
export type WearableSizeGroupEnumeration = {
  '@type': 'WearableSizeGroupEnumeration';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:WearableSizeGroupEnumeration
 *
 * This differs from WearableSizeGroupEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type WearableSizeGroupEnumerationOrSubClass =
  | WearableSizeGroupEnumeration
  ;

/**
 * schema:WearableSizeGroupEnumeration - Validation schema (w/ JOI)
 */
export const WearableSizeGroupEnumerationJoiSchema = Joi.object({
  '@type': Joi.string().valid('WearableSizeGroupEnumeration').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:WearableSizeGroupEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableSizeGroupEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const WearableSizeGroupEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
  WearableSizeGroupEnumerationJoiSchema,
]);

/**
 * Runtime validator for schema:WearableSizeGroupEnumeration.
 *
 * If some data has a structure which matches a schema:WearableSizeGroupEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableSizeGroupEnumeration = validateWearableSizeGroupEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableSizeGroupEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableSizeGroupEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableSizeGroupEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableSizeGroupEnumeration` will have type `WearableSizeGroupEnumeration`
 * const wearableSizeGroupEnumeration = maybeWearableSizeGroupEnumeration;
 * ```
 */
export function validateWearableSizeGroupEnumeration(maybeWearableSizeGroupEnumeration: unknown): WearableSizeGroupEnumeration | OaValidationError {
  const { value, error } = WearableSizeGroupEnumerationJoiSchema.validate(maybeWearableSizeGroupEnumeration);
  if (error) {
    return new OaValidationError('WearableSizeGroupEnumeration', maybeWearableSizeGroupEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as WearableSizeGroupEnumeration;
}
