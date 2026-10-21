import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:GamePlayMode
 *
 * Indicates whether this game is multi-player, co-op or single-player.
 */
export declare type GamePlayMode = 'https://schema.org/MultiPlayer' | 'https://schema.org/CoOp' | 'https://schema.org/SinglePlayer';
/**
 * schema:GamePlayMode - Validation schema (w/ JOI)
 *
 * Indicates whether this game is multi-player, co-op or single-player.
 */
export declare const GamePlayModeJoiSchema: Joi.StringSchema;
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
export declare function validateGamePlayMode(maybeGamePlayMode: unknown): GamePlayMode | OaValidationError;
