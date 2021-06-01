import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MedicalDevicePurpose
 */
export declare type MedicalDevicePurpose = {
    '@type': 'MedicalDevicePurpose';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:MedicalDevicePurpose
 *
 * This differs from MedicalDevicePurpose because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalDevicePurposeOrSubClass = MedicalDevicePurpose;
/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 */
export declare const MedicalDevicePurposeJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalDevicePurpose - Validation schema (w/ JOI)
 *
 * This differs from MedicalDevicePurposeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalDevicePurposeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalDevicePurpose.
 *
 * If some data has a structure which matches a schema:MedicalDevicePurpose, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalDevicePurpose = MedicalDevicePurpose.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalDevicePurpose instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalDevicePurpose` will have type `OaValidationError`
 *   const error = maybeMedicalDevicePurpose;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalDevicePurpose` will have type `MedicalDevicePurpose`
 * const medicalDevicePurpose = maybeMedicalDevicePurpose;
 * ```
 */
export declare function validateMedicalDevicePurpose(maybeMedicalDevicePurpose: unknown): MedicalDevicePurpose | OaValidationError;
