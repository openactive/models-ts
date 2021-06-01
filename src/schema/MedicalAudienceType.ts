// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalAudienceType
 */
export type MedicalAudienceType = {
  '@type': 'MedicalAudienceType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalAudienceType
 *
 * This differs from MedicalAudienceType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalAudienceTypeOrSubClass =
  | MedicalAudienceType
  ;

/**
 * schema:MedicalAudienceType - Validation schema (w/ JOI)
 */
export const MedicalAudienceTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalAudienceType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalAudienceType - Validation schema (w/ JOI)
 *
 * This differs from MedicalAudienceTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalAudienceTypeOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalAudienceTypeJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalAudienceType.
 *
 * If some data has a structure which matches a schema:MedicalAudienceType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalAudienceType = MedicalAudienceType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalAudienceType instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalAudienceType` will have type `OaValidationError`
 *   const error = maybeMedicalAudienceType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalAudienceType` will have type `MedicalAudienceType`
 * const medicalAudienceType = maybeMedicalAudienceType;
 * ```
 */
export function validateMedicalAudienceType(maybeMedicalAudienceType: unknown): MedicalAudienceType | OaValidationError {
  const { value, error } = MedicalAudienceTypeJoiSchema.validate(maybeMedicalAudienceType);
  if (error) {
    return new OaValidationError('MedicalAudienceType', maybeMedicalAudienceType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalAudienceType;
}
