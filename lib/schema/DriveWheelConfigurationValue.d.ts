import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DriveWheelConfigurationValue
 */
export declare type DriveWheelConfigurationValue = {
    '@type': 'DriveWheelConfigurationValue';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:DriveWheelConfigurationValue
 *
 * This differs from DriveWheelConfigurationValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DriveWheelConfigurationValueOrSubClass = DriveWheelConfigurationValue;
/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 */
export declare const DriveWheelConfigurationValueJoiSchema: Joi.ObjectSchema;
/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 *
 * This differs from DriveWheelConfigurationValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DriveWheelConfigurationValueOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:DriveWheelConfigurationValue.
 *
 * If some data has a structure which matches a schema:DriveWheelConfigurationValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDriveWheelConfigurationValue = validateDriveWheelConfigurationValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDriveWheelConfigurationValue instanceof OaValidationError) {
 *   // From this point on, `maybeDriveWheelConfigurationValue` will have type `OaValidationError`
 *   const error = maybeDriveWheelConfigurationValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDriveWheelConfigurationValue` will have type `DriveWheelConfigurationValue`
 * const driveWheelConfigurationValue = maybeDriveWheelConfigurationValue;
 * ```
 */
export declare function validateDriveWheelConfigurationValue(maybeDriveWheelConfigurationValue: unknown): DriveWheelConfigurationValue | OaValidationError;
