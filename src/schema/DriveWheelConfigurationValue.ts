// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:DriveWheelConfigurationValue
 */
export type DriveWheelConfigurationValue = {
  '@type': 'DriveWheelConfigurationValue';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:DriveWheelConfigurationValue
 *
 * This differs from DriveWheelConfigurationValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type DriveWheelConfigurationValueOrSubClass =
  | DriveWheelConfigurationValue
  ;

/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 */
export const DriveWheelConfigurationValueJoiSchema = Joi.object({
  '@type': Joi.string().valid('DriveWheelConfigurationValue').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 *
 * This differs from DriveWheelConfigurationValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const DriveWheelConfigurationValueOrSubClassJoiSchema = Joi.alternatives().try([
  DriveWheelConfigurationValueJoiSchema,
]);

/**
 * Runtime validator for schema:DriveWheelConfigurationValue.
 *
 * If some data has a structure which matches a schema:DriveWheelConfigurationValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDriveWheelConfigurationValue = validateDriveWheelConfigurationValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDriveWheelConfigurationValue instanceof OaValidationError) {
 *   // From this point on, `maybeDriveWheelConfigurationValue` will have type `OaValidationError`
 *   const error = maybeDriveWheelConfigurationValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDriveWheelConfigurationValue` will have type `DriveWheelConfigurationValue`
 * const driveWheelConfigurationValue = maybeDriveWheelConfigurationValue;
 * ```
 */
export function validateDriveWheelConfigurationValue(maybeDriveWheelConfigurationValue: unknown): DriveWheelConfigurationValue | OaValidationError {
  const { value, error } = DriveWheelConfigurationValueJoiSchema.validate(maybeDriveWheelConfigurationValue);
  if (error) {
    return new OaValidationError('DriveWheelConfigurationValue', maybeDriveWheelConfigurationValue, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as DriveWheelConfigurationValue;
}
