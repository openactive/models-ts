import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MedicalSpecialty
 */
export declare type MedicalSpecialty = {
    '@type': 'MedicalSpecialty';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:MedicalSpecialty
 *
 * This differs from MedicalSpecialty because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalSpecialtyOrSubClass = MedicalSpecialty;
/**
 * schema:MedicalSpecialty - Validation schema (w/ JOI)
 */
export declare const MedicalSpecialtyJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalSpecialty - Validation schema (w/ JOI)
 *
 * This differs from MedicalSpecialtyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalSpecialtyOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalSpecialty.
 *
 * If some data has a structure which matches a schema:MedicalSpecialty, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalSpecialty = validateMedicalSpecialty(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalSpecialty instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalSpecialty` will have type `OaValidationError`
 *   const error = maybeMedicalSpecialty;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalSpecialty` will have type `MedicalSpecialty`
 * const medicalSpecialty = maybeMedicalSpecialty;
 * ```
 */
export declare function validateMedicalSpecialty(maybeMedicalSpecialty: unknown): MedicalSpecialty | OaValidationError;
