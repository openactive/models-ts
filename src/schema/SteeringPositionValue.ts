// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:SteeringPositionValue
 */
export type SteeringPositionValue = {
  '@type': 'SteeringPositionValue';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:SteeringPositionValue
 *
 * This differs from SteeringPositionValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type SteeringPositionValueOrSubClass =
  | SteeringPositionValue
  ;

/**
 * schema:SteeringPositionValue - Validation schema (w/ JOI)
 */
export const SteeringPositionValueJoiSchema = Joi.object({
  '@type': Joi.string().valid('SteeringPositionValue').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:SteeringPositionValue - Validation schema (w/ JOI)
 *
 * This differs from SteeringPositionValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const SteeringPositionValueOrSubClassJoiSchema = Joi.alternatives().try([
  SteeringPositionValueJoiSchema,
]);

/**
 * Runtime validator for schema:SteeringPositionValue.
 *
 * If some data has a structure which matches a schema:SteeringPositionValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSteeringPositionValue = validateSteeringPositionValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSteeringPositionValue instanceof OaValidationError) {
 *   // From this point on, `maybeSteeringPositionValue` will have type `OaValidationError`
 *   const error = maybeSteeringPositionValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSteeringPositionValue` will have type `SteeringPositionValue`
 * const steeringPositionValue = maybeSteeringPositionValue;
 * ```
 */
export function validateSteeringPositionValue(maybeSteeringPositionValue: unknown): SteeringPositionValue | OaValidationError {
  const { value, error } = SteeringPositionValueJoiSchema.validate(maybeSteeringPositionValue);
  if (error) {
    return new OaValidationError('SteeringPositionValue', maybeSteeringPositionValue, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as SteeringPositionValue;
}
