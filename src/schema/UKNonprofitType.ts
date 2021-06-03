// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:UKNonprofitType
 */
export type UKNonprofitType = {
  '@type': 'UKNonprofitType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:UKNonprofitType
 *
 * This differs from UKNonprofitType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type UKNonprofitTypeOrSubClass =
  | UKNonprofitType
  ;

/**
 * schema:UKNonprofitType - Validation schema (w/ JOI)
 */
export const UKNonprofitTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('UKNonprofitType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:UKNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from UKNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const UKNonprofitTypeOrSubClassJoiSchema = Joi.alternatives().try([
  UKNonprofitTypeJoiSchema,
]);

/**
 * Runtime validator for schema:UKNonprofitType.
 *
 * If some data has a structure which matches a schema:UKNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUKNonprofitType = validateUKNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUKNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeUKNonprofitType` will have type `OaValidationError`
 *   const error = maybeUKNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUKNonprofitType` will have type `UKNonprofitType`
 * const uKNonprofitType = maybeUKNonprofitType;
 * ```
 */
export function validateUKNonprofitType(maybeUKNonprofitType: unknown): UKNonprofitType | OaValidationError {
  const { value, error } = UKNonprofitTypeJoiSchema.validate(maybeUKNonprofitType);
  if (error) {
    return new OaValidationError('UKNonprofitType', maybeUKNonprofitType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as UKNonprofitType;
}
