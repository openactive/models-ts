// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:BedType
 */
export type BedType = {
  '@type': 'BedType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:BedType
 *
 * This differs from BedType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type BedTypeOrSubClass =
  | BedType
  ;

/**
 * schema:BedType - Validation schema (w/ JOI)
 */
export const BedTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('BedType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:BedType - Validation schema (w/ JOI)
 *
 * This differs from BedTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const BedTypeOrSubClassJoiSchema = Joi.alternatives().try([
  BedTypeJoiSchema,
]);

/**
 * Runtime validator for schema:BedType.
 *
 * If some data has a structure which matches a schema:BedType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBedType = validateBedType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBedType instanceof OaValidationError) {
 *   // From this point on, `maybeBedType` will have type `OaValidationError`
 *   const error = maybeBedType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBedType` will have type `BedType`
 * const bedType = maybeBedType;
 * ```
 */
export function validateBedType(maybeBedType: unknown): BedType | OaValidationError {
  const { value, error } = BedTypeJoiSchema.validate(maybeBedType);
  if (error) {
    return new OaValidationError('BedType', maybeBedType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as BedType;
}
