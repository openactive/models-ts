// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalDevicePurpose
 */
export type MedicalDevicePurpose = {
  '@type': 'MedicalDevicePurpose';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalDevicePurpose
 *
 * This differs from MedicalDevicePurpose because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalDevicePurposeOrSubClass =
  | MedicalDevicePurpose
  ;

/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 */
export const MedicalDevicePurposeJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalDevicePurpose').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 *
 * This differs from MedicalDevicePurposeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalDevicePurposeOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalDevicePurposeJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalDevicePurpose.
 *
 * If some data has a structure which matches a schema:MedicalDevicePurpose, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalDevicePurpose = MedicalDevicePurpose.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalDevicePurpose instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalDevicePurpose` will have type `OaValidationError`
 *   const error = maybeMedicalDevicePurpose;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalDevicePurpose` will have type `MedicalDevicePurpose`
 * const medicalDevicePurpose = maybeMedicalDevicePurpose;
 * ```
 */
export function validateMedicalDevicePurpose(maybeMedicalDevicePurpose: unknown): MedicalDevicePurpose | OaValidationError {
  const { value, error } = MedicalDevicePurposeJoiSchema.validate(maybeMedicalDevicePurpose);
  if (error) {
    return new OaValidationError('MedicalDevicePurpose', maybeMedicalDevicePurpose, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalDevicePurpose;
}
