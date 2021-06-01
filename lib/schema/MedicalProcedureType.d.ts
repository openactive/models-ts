import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MedicalProcedureType
 */
export declare type MedicalProcedureType = {
    '@type': 'MedicalProcedureType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:MedicalProcedureType
 *
 * This differs from MedicalProcedureType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalProcedureTypeOrSubClass = MedicalProcedureType;
/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 */
export declare const MedicalProcedureTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalProcedureType - Validation schema (w/ JOI)
 *
 * This differs from MedicalProcedureTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalProcedureTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalProcedureType.
 *
 * If some data has a structure which matches a schema:MedicalProcedureType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalProcedureType = MedicalProcedureType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalProcedureType instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalProcedureType` will have type `OaValidationError`
 *   const error = maybeMedicalProcedureType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalProcedureType` will have type `MedicalProcedureType`
 * const medicalProcedureType = maybeMedicalProcedureType;
 * ```
 */
export declare function validateMedicalProcedureType(maybeMedicalProcedureType: unknown): MedicalProcedureType | OaValidationError;
