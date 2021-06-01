import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:BodyMeasurementTypeEnumeration
 */
export declare type BodyMeasurementTypeEnumeration = {
    '@type': 'BodyMeasurementTypeEnumeration';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:BodyMeasurementTypeEnumeration
 *
 * This differs from BodyMeasurementTypeEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type BodyMeasurementTypeEnumerationOrSubClass = BodyMeasurementTypeEnumeration;
/**
 * schema:BodyMeasurementTypeEnumeration - Validation schema (w/ JOI)
 */
export declare const BodyMeasurementTypeEnumerationJoiSchema: Joi.ObjectSchema;
/**
 * schema:BodyMeasurementTypeEnumeration - Validation schema (w/ JOI)
 *
 * This differs from BodyMeasurementTypeEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const BodyMeasurementTypeEnumerationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:BodyMeasurementTypeEnumeration.
 *
 * If some data has a structure which matches a schema:BodyMeasurementTypeEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBodyMeasurementTypeEnumeration = BodyMeasurementTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBodyMeasurementTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeBodyMeasurementTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeBodyMeasurementTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBodyMeasurementTypeEnumeration` will have type `BodyMeasurementTypeEnumeration`
 * const bodyMeasurementTypeEnumeration = maybeBodyMeasurementTypeEnumeration;
 * ```
 */
export declare function validateBodyMeasurementTypeEnumeration(maybeBodyMeasurementTypeEnumeration: unknown): BodyMeasurementTypeEnumeration | OaValidationError;
