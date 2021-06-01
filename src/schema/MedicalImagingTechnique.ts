// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalImagingTechnique
 */
export type MedicalImagingTechnique = {
  '@type': 'MedicalImagingTechnique';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalImagingTechnique
 *
 * This differs from MedicalImagingTechnique because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalImagingTechniqueOrSubClass =
  | MedicalImagingTechnique
  ;

/**
 * schema:MedicalImagingTechnique - Validation schema (w/ JOI)
 */
export const MedicalImagingTechniqueJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalImagingTechnique').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalImagingTechnique - Validation schema (w/ JOI)
 *
 * This differs from MedicalImagingTechniqueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalImagingTechniqueOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalImagingTechniqueJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalImagingTechnique.
 *
 * If some data has a structure which matches a schema:MedicalImagingTechnique, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalImagingTechnique = MedicalImagingTechnique.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalImagingTechnique instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalImagingTechnique` will have type `OaValidationError`
 *   const error = maybeMedicalImagingTechnique;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalImagingTechnique` will have type `MedicalImagingTechnique`
 * const medicalImagingTechnique = maybeMedicalImagingTechnique;
 * ```
 */
export function validateMedicalImagingTechnique(maybeMedicalImagingTechnique: unknown): MedicalImagingTechnique | OaValidationError {
  const { value, error } = MedicalImagingTechniqueJoiSchema.validate(maybeMedicalImagingTechnique);
  if (error) {
    return new OaValidationError('MedicalImagingTechnique', maybeMedicalImagingTechnique, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalImagingTechnique;
}
