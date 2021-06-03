// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:GamePlayMode
 *
 * Indicates whether this game is multi-player, co-op or single-player.
 */
export type GamePlayMode = 
  
  | 'https://schema.org/SinglePlayer'
  | 'https://schema.org/CoOp'
  | 'https://schema.org/MultiPlayer'
  ;

/**
 * schema:GamePlayMode - Validation schema (w/ JOI)
 *
 * Indicates whether this game is multi-player, co-op or single-player.
 */
export const GamePlayModeJoiSchema = Joi.string().valid(
  'https://schema.org/SinglePlayer',
  'https://schema.org/CoOp',
  'https://schema.org/MultiPlayer',
);

/**
 * Runtime validator for schema:GamePlayMode.
 *
 * If some data has one of the values of the schema:GamePlayMode enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGamePlayMode = validateGamePlayMode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGamePlayMode instanceof OaValidationError) {
 *   // From this point on, `maybeGamePlayMode` will have type `OaValidationError`
 *   const error = maybeGamePlayMode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGamePlayMode` will have type `GamePlayMode`
 * const gamePlayMode = maybeGamePlayMode;
 * ```
 */
export function validateGamePlayMode(maybeGamePlayMode: unknown): GamePlayMode | OaValidationError {
  const { value, error } = GamePlayModeJoiSchema.validate(maybeGamePlayMode);
  if (error) {
    return new OaValidationError('GamePlayMode', maybeGamePlayMode, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GamePlayMode;
}
