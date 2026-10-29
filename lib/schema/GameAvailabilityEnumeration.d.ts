import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:GameAvailabilityEnumeration
 *
 * For a [[VideoGame]], such as used with a [[PlayGameAction]], an enumeration of the kind of game availability offered.
 */
export declare type GameAvailabilityEnumeration = 'https://schema.org/DemoGameAvailability' | 'https://schema.org/FullGameAvailability';
/**
 * schema:GameAvailabilityEnumeration - Validation schema (w/ JOI)
 *
 * For a [[VideoGame]], such as used with a [[PlayGameAction]], an enumeration of the kind of game availability offered.
 */
export declare const GameAvailabilityEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:GameAvailabilityEnumeration.
 *
 * If some data has one of the values of the schema:GameAvailabilityEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameAvailabilityEnumeration = validateGameAvailabilityEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameAvailabilityEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeGameAvailabilityEnumeration` will have type `OaValidationError`
 *   const error = maybeGameAvailabilityEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameAvailabilityEnumeration` will have type `GameAvailabilityEnumeration`
 * const gameAvailabilityEnumeration = maybeGameAvailabilityEnumeration;
 * ```
 */
export declare function validateGameAvailabilityEnumeration(maybeGameAvailabilityEnumeration: unknown): GameAvailabilityEnumeration | OaValidationError;
