import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:CssSelectorType
 */
export declare type CssSelectorType = {
    '@type': 'CssSelectorType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:CssSelectorType
 *
 * This differs from CssSelectorType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type CssSelectorTypeOrSubClass = CssSelectorType;
/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 */
export declare const CssSelectorTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 *
 * This differs from CssSelectorTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const CssSelectorTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:CssSelectorType.
 *
 * If some data has a structure which matches a schema:CssSelectorType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCssSelectorType = validateCssSelectorType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCssSelectorType instanceof OaValidationError) {
 *   // From this point on, `maybeCssSelectorType` will have type `OaValidationError`
 *   const error = maybeCssSelectorType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCssSelectorType` will have type `CssSelectorType`
 * const cssSelectorType = maybeCssSelectorType;
 * ```
 */
export declare function validateCssSelectorType(maybeCssSelectorType: unknown): CssSelectorType | OaValidationError;
