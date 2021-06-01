// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:MedicalObservationalStudyDesign
 */
export type MedicalObservationalStudyDesign = {
  '@type': 'MedicalObservationalStudyDesign';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:MedicalObservationalStudyDesign
 *
 * This differs from MedicalObservationalStudyDesign because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type MedicalObservationalStudyDesignOrSubClass =
  | MedicalObservationalStudyDesign
  ;

/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 */
export const MedicalObservationalStudyDesignJoiSchema = Joi.object({
  '@type': Joi.string().valid('MedicalObservationalStudyDesign').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 *
 * This differs from MedicalObservationalStudyDesignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const MedicalObservationalStudyDesignOrSubClassJoiSchema = Joi.alternatives().try([
  MedicalObservationalStudyDesignJoiSchema,
]);

/**
 * Runtime validator for schema:MedicalObservationalStudyDesign.
 *
 * If some data has a structure which matches a schema:MedicalObservationalStudyDesign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalObservationalStudyDesign = MedicalObservationalStudyDesign.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalObservationalStudyDesign instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalObservationalStudyDesign` will have type `OaValidationError`
 *   const error = maybeMedicalObservationalStudyDesign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalObservationalStudyDesign` will have type `MedicalObservationalStudyDesign`
 * const medicalObservationalStudyDesign = maybeMedicalObservationalStudyDesign;
 * ```
 */
export function validateMedicalObservationalStudyDesign(maybeMedicalObservationalStudyDesign: unknown): MedicalObservationalStudyDesign | OaValidationError {
  const { value, error } = MedicalObservationalStudyDesignJoiSchema.validate(maybeMedicalObservationalStudyDesign);
  if (error) {
    return new OaValidationError('MedicalObservationalStudyDesign', maybeMedicalObservationalStudyDesign, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MedicalObservationalStudyDesign;
}
