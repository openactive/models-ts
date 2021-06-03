import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:Integer
 */
export declare type Integer = {
    '@type': 'Integer';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:Integer
 *
 * This differs from Integer because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type IntegerOrSubClass = Integer;
/**
 * schema:Integer - Validation schema (w/ JOI)
 */
export declare const IntegerJoiSchema: Joi.ObjectSchema;
/**
 * schema:Integer - Validation schema (w/ JOI)
 *
 * This differs from IntegerJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const IntegerOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Integer.
 *
 * If some data has a structure which matches a schema:Integer, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInteger = validateInteger(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInteger instanceof OaValidationError) {
 *   // From this point on, `maybeInteger` will have type `OaValidationError`
 *   const error = maybeInteger;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInteger` will have type `Integer`
 * const integer = maybeInteger;
 * ```
 */
export declare function validateInteger(maybeInteger: unknown): Integer | OaValidationError;
