// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:EnergyStarEnergyEfficiencyEnumeration
 */
export type EnergyStarEnergyEfficiencyEnumeration = {
  '@type': 'EnergyStarEnergyEfficiencyEnumeration';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:EnergyStarEnergyEfficiencyEnumeration
 *
 * This differs from EnergyStarEnergyEfficiencyEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type EnergyStarEnergyEfficiencyEnumerationOrSubClass =
  | EnergyStarEnergyEfficiencyEnumeration
  ;

/**
 * schema:EnergyStarEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 */
export const EnergyStarEnergyEfficiencyEnumerationJoiSchema = Joi.object({
  '@type': Joi.string().valid('EnergyStarEnergyEfficiencyEnumeration').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:EnergyStarEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 *
 * This differs from EnergyStarEnergyEfficiencyEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const EnergyStarEnergyEfficiencyEnumerationOrSubClassJoiSchema = Joi.alternatives().try([
  EnergyStarEnergyEfficiencyEnumerationJoiSchema,
]);

/**
 * Runtime validator for schema:EnergyStarEnergyEfficiencyEnumeration.
 *
 * If some data has a structure which matches a schema:EnergyStarEnergyEfficiencyEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEnergyStarEnergyEfficiencyEnumeration = validateEnergyStarEnergyEfficiencyEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEnergyStarEnergyEfficiencyEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeEnergyStarEnergyEfficiencyEnumeration` will have type `OaValidationError`
 *   const error = maybeEnergyStarEnergyEfficiencyEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEnergyStarEnergyEfficiencyEnumeration` will have type `EnergyStarEnergyEfficiencyEnumeration`
 * const energyStarEnergyEfficiencyEnumeration = maybeEnergyStarEnergyEfficiencyEnumeration;
 * ```
 */
export function validateEnergyStarEnergyEfficiencyEnumeration(maybeEnergyStarEnergyEfficiencyEnumeration: unknown): EnergyStarEnergyEfficiencyEnumeration | OaValidationError {
  const { value, error } = EnergyStarEnergyEfficiencyEnumerationJoiSchema.validate(maybeEnergyStarEnergyEfficiencyEnumeration);
  if (error) {
    return new OaValidationError('EnergyStarEnergyEfficiencyEnumeration', maybeEnergyStarEnergyEfficiencyEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EnergyStarEnergyEfficiencyEnumeration;
}
