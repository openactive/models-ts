// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalTrialDesign
 */
export type MedicalTrialDesign = {
  '@type': 'MedicalTrialDesign';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalTrialDesign
 *
 * This differs from MedicalTrialDesign because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalTrialDesignOrSubClass =
  | MedicalTrialDesign
  ;

/**
 * schema:MedicalTrialDesign - Validation schema (w/ JOI)
 */
export const MedicalTrialDesignJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalTrialDesign').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalTrialDesign - Validation schema (w/ JOI)
 *
 * This differs from MedicalTrialDesignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalTrialDesignOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalTrialDesignJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalTrialDesign.
 *
 * If some data has a structure which matches a schema:MedicalTrialDesign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalTrialDesign = validateMedicalTrialDesign(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalTrialDesign instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalTrialDesign` will have type `OaValidationError`
 *   const error = maybeMedicalTrialDesign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalTrialDesign` will have type `MedicalTrialDesign`
 * const medicalTrialDesign = maybeMedicalTrialDesign;
 * ```
 */
export function validateMedicalTrialDesign(maybeMedicalTrialDesign: unknown): MedicalTrialDesign | OaValidationError {
  const { value, error } = MedicalTrialDesignJoiSchema.validate(maybeMedicalTrialDesign);
  if (error) {
    return new OaValidationError('MedicalTrialDesign', maybeMedicalTrialDesign, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalTrialDesign;
}
