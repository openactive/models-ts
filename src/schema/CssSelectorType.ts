// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:CssSelectorType
 */
export type CssSelectorType = {
  '@type': 'CssSelectorType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:CssSelectorType
 *
 * This differs from CssSelectorType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type CssSelectorTypeOrSubClass =
  | CssSelectorType
  ;

/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 */
export const CssSelectorTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('CssSelectorType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 *
 * This differs from CssSelectorTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const CssSelectorTypeOrSubClassJoiSchema = Joi.alternatives().try([
  CssSelectorTypeJoiSchema,
]);

/**
 * Runtime validator for schema:CssSelectorType.
 *
 * If some data has a structure which matches a schema:CssSelectorType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCssSelectorType = validateCssSelectorType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCssSelectorType instanceof OaValidationError) {
 *   // From this point on, `maybeCssSelectorType` will have type `OaValidationError`
 *   const error = maybeCssSelectorType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCssSelectorType` will have type `CssSelectorType`
 * const cssSelectorType = maybeCssSelectorType;
 * ```
 */
export function validateCssSelectorType(maybeCssSelectorType: unknown): CssSelectorType | OaValidationError {
  const { value, error } = CssSelectorTypeJoiSchema.validate(maybeCssSelectorType);
  if (error) {
    return new OaValidationError('CssSelectorType', maybeCssSelectorType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as CssSelectorType;
}
