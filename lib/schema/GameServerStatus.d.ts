import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:GameServerStatus
 */
export declare type GameServerStatus = {
    '@type': 'GameServerStatus';
    '@context'?: string | string[];
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
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
export declare type GameServerStatusOrSubClass = GameServerStatus;
/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 */
export declare const GameServerStatusJoiSchema: Joi.ObjectSchema;
/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 *
 * This differs from GameServerStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const GameServerStatusOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:GameServerStatus.
 *
 * If some data has a structure which matches a schema:GameServerStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameServerStatus = validateGameServerStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameServerStatus instanceof OaValidationError) {
 *   // From this point on, `maybeGameServerStatus` will have type `OaValidationError`
 *   const error = maybeGameServerStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameServerStatus` will have type `GameServerStatus`
 * const gameServerStatus = maybeGameServerStatus;
 * ```
 */
export declare function validateGameServerStatus(maybeGameServerStatus: unknown): GameServerStatus | OaValidationError;
