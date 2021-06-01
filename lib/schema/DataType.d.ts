import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DataType
 */
export declare type DataType = {
    '@type': 'DataType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:DataType
 *
 * This differs from DataType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DataTypeOrSubClass = DataType;
/**
 * schema:DataType - Validation schema (w/ JOI)
 */
export declare const DataTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:DataType - Validation schema (w/ JOI)
 *
 * This differs from DataTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DataTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:DataType.
 *
 * If some data has a structure which matches a schema:DataType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDataType = DataType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDataType instanceof OaValidationError) {
 *   // From this point on, `maybeDataType` will have type `OaValidationError`
 *   const error = maybeDataType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDataType` will have type `DataType`
 * const dataType = maybeDataType;
 * ```
 */
export declare function validateDataType(maybeDataType: unknown): DataType | OaValidationError;
