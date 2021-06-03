import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:WearableSizeSystemEnumeration
 */
export declare type WearableSizeSystemEnumeration = {
    '@type': 'WearableSizeSystemEnumeration';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:WearableSizeSystemEnumeration
 *
 * This differs from WearableSizeSystemEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type WearableSizeSystemEnumerationOrSubClass = WearableSizeSystemEnumeration;
/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 */
export declare const WearableSizeSystemEnumerationJoiSchema: Joi.ObjectSchema;
/**
 * schema:WearableSizeSystemEnumeration - Validation schema (w/ JOI)
 *
 * This differs from WearableSizeSystemEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const WearableSizeSystemEnumerationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:WearableSizeSystemEnumeration.
 *
 * If some data has a structure which matches a schema:WearableSizeSystemEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWearableSizeSystemEnumeration = validateWearableSizeSystemEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWearableSizeSystemEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeWearableSizeSystemEnumeration` will have type `OaValidationError`
 *   const error = maybeWearableSizeSystemEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWearableSizeSystemEnumeration` will have type `WearableSizeSystemEnumeration`
 * const wearableSizeSystemEnumeration = maybeWearableSizeSystemEnumeration;
 * ```
 */
export declare function validateWearableSizeSystemEnumeration(maybeWearableSizeSystemEnumeration: unknown): WearableSizeSystemEnumeration | OaValidationError;
