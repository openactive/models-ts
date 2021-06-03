import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:Float
 */
export declare type Float = {
    '@type': 'Float';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:Float
 *
 * This differs from Float because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type FloatOrSubClass = Float;
/**
 * schema:Float - Validation schema (w/ JOI)
 */
export declare const FloatJoiSchema: Joi.ObjectSchema;
/**
 * schema:Float - Validation schema (w/ JOI)
 *
 * This differs from FloatJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const FloatOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Float.
 *
 * If some data has a structure which matches a schema:Float, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFloat = validateFloat(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFloat instanceof OaValidationError) {
 *   // From this point on, `maybeFloat` will have type `OaValidationError`
 *   const error = maybeFloat;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFloat` will have type `Float`
 * const float = maybeFloat;
 * ```
 */
export declare function validateFloat(maybeFloat: unknown): Float | OaValidationError;
