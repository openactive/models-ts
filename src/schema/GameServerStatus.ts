// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:GameServerStatus
 */
export type GameServerStatus = {
  '@type': 'GameServerStatus';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:GameServerStatus
 *
 * This differs from GameServerStatus because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type GameServerStatusOrSubClass =
  | GameServerStatus
  ;

/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 */
export const GameServerStatusJoiSchema = Joi.object({
  '@type': Joi.string().valid('GameServerStatus').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 *
 * This differs from GameServerStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const GameServerStatusOrSubClassJoiSchema = Joi.alternatives().try([
  GameServerStatusJoiSchema,
]);

/**
 * Runtime validator for schema:GameServerStatus.
 *
 * If some data has a structure which matches a schema:GameServerStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameServerStatus = GameServerStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameServerStatus instanceof OaValidationError) {
 *   // From this point on, `maybeGameServerStatus` will have type `OaValidationError`
 *   const error = maybeGameServerStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameServerStatus` will have type `GameServerStatus`
 * const gameServerStatus = maybeGameServerStatus;
 * ```
 */
export function validateGameServerStatus(maybeGameServerStatus: unknown): GameServerStatus | OaValidationError {
  const { value, error } = GameServerStatusJoiSchema.validate(maybeGameServerStatus);
  if (error) {
    return new OaValidationError('GameServerStatus', maybeGameServerStatus, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GameServerStatus;
}
