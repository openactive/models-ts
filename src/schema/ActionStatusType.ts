// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ActionStatusType
 */
export type ActionStatusType = {
  '@type': 'ActionStatusType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:ActionStatusType
 *
 * This differs from ActionStatusType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ActionStatusTypeOrSubClass =
  | ActionStatusType
  ;

/**
 * schema:ActionStatusType - Validation schema (w/ JOI)
 */
export const ActionStatusTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('ActionStatusType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:ActionStatusType - Validation schema (w/ JOI)
 *
 * This differs from ActionStatusTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ActionStatusTypeOrSubClassJoiSchema = Joi.alternatives().try([
  ActionStatusTypeJoiSchema,
]);

/**
 * Runtime validator for schema:ActionStatusType.
 *
 * If some data has a structure which matches a schema:ActionStatusType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeActionStatusType = ActionStatusType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeActionStatusType instanceof OaValidationError) {
 *   // From this point on, `maybeActionStatusType` will have type `OaValidationError`
 *   const error = maybeActionStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeActionStatusType` will have type `ActionStatusType`
 * const actionStatusType = maybeActionStatusType;
 * ```
 */
export function validateActionStatusType(maybeActionStatusType: unknown): ActionStatusType | OaValidationError {
  const { value, error } = ActionStatusTypeJoiSchema.validate(maybeActionStatusType);
  if (error) {
    return new OaValidationError('ActionStatusType', maybeActionStatusType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ActionStatusType;
}
