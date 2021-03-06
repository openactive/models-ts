import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:XPathType
 */
export declare type XPathType = {
    '@type': 'XPathType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:XPathType
 *
 * This differs from XPathType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type XPathTypeOrSubClass = XPathType;
/**
 * schema:XPathType - Validation schema (w/ JOI)
 */
export declare const XPathTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:XPathType - Validation schema (w/ JOI)
 *
 * This differs from XPathTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const XPathTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:XPathType.
 *
 * If some data has a structure which matches a schema:XPathType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeXPathType = validateXPathType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeXPathType instanceof OaValidationError) {
 *   // From this point on, `maybeXPathType` will have type `OaValidationError`
 *   const error = maybeXPathType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeXPathType` will have type `XPathType`
 * const xPathType = maybeXPathType;
 * ```
 */
export declare function validateXPathType(maybeXPathType: unknown): XPathType | OaValidationError;
