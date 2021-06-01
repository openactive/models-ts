// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:InfectiousAgentClass
 */
export type InfectiousAgentClass = {
  '@type': 'InfectiousAgentClass';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:InfectiousAgentClass
 *
 * This differs from InfectiousAgentClass because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type InfectiousAgentClassOrSubClass =
  | InfectiousAgentClass
  ;

/**
 * schema:InfectiousAgentClass - Validation schema (w/ JOI)
 */
export const InfectiousAgentClassJoiSchema = Joi.object({
  '@type': Joi.string().valid('InfectiousAgentClass').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:InfectiousAgentClass - Validation schema (w/ JOI)
 *
 * This differs from InfectiousAgentClassJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const InfectiousAgentClassOrSubClassJoiSchema = Joi.alternatives().try([
  InfectiousAgentClassJoiSchema,
]);

/**
 * Runtime validator for schema:InfectiousAgentClass.
 *
 * If some data has a structure which matches a schema:InfectiousAgentClass, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInfectiousAgentClass = InfectiousAgentClass.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInfectiousAgentClass instanceof OaValidationError) {
 *   // From this point on, `maybeInfectiousAgentClass` will have type `OaValidationError`
 *   const error = maybeInfectiousAgentClass;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInfectiousAgentClass` will have type `InfectiousAgentClass`
 * const infectiousAgentClass = maybeInfectiousAgentClass;
 * ```
 */
export function validateInfectiousAgentClass(maybeInfectiousAgentClass: unknown): InfectiousAgentClass | OaValidationError {
  const { value, error } = InfectiousAgentClassJoiSchema.validate(maybeInfectiousAgentClass);
  if (error) {
    return new OaValidationError('InfectiousAgentClass', maybeInfectiousAgentClass, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as InfectiousAgentClass;
}
