// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalProcedureType
 */
export type MedicalProcedureType = {
  '@type': 'MedicalProcedureType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalProcedureType
 *
 * This differs from MedicalProcedureType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalProcedureTypeOrSubClass =
  | MedicalProcedureType
  ;

/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 */
export const MedicalProcedureTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalProcedureType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 *
 * This differs from MedicalProcedureTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalProcedureTypeOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalProcedureTypeJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalProcedureType.
 *
 * If some data has a structure which matches a schema:MedicalProcedureType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalProcedureType = validateMedicalProcedureType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalProcedureType instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalProcedureType` will have type `OaValidationError`
 *   const error = maybeMedicalProcedureType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalProcedureType` will have type `MedicalProcedureType`
 * const medicalProcedureType = maybeMedicalProcedureType;
 * ```
 */
export function validateMedicalProcedureType(maybeMedicalProcedureType: unknown): MedicalProcedureType | OaValidationError {
  const { value, error } = MedicalProcedureTypeJoiSchema.validate(maybeMedicalProcedureType);
  if (error) {
    return new OaValidationError('MedicalProcedureType', maybeMedicalProcedureType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalProcedureType;
}
