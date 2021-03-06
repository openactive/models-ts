import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:USNonprofitType
 */
export declare type USNonprofitType = {
    '@type': 'USNonprofitType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:USNonprofitType
 *
 * This differs from USNonprofitType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type USNonprofitTypeOrSubClass = USNonprofitType;
/**
 * schema:USNonprofitType - Validation schema (w/ JOI)
 */
export declare const USNonprofitTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:USNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from USNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const USNonprofitTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:USNonprofitType.
 *
 * If some data has a structure which matches a schema:USNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUSNonprofitType = validateUSNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUSNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeUSNonprofitType` will have type `OaValidationError`
 *   const error = maybeUSNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUSNonprofitType` will have type `USNonprofitType`
 * const uSNonprofitType = maybeUSNonprofitType;
 * ```
 */
export declare function validateUSNonprofitType(maybeUSNonprofitType: unknown): USNonprofitType | OaValidationError;
