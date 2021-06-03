import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DrugPrescriptionStatus
 */
export declare type DrugPrescriptionStatus = {
    '@type': 'DrugPrescriptionStatus';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:DrugPrescriptionStatus
 *
 * This differs from DrugPrescriptionStatus because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DrugPrescriptionStatusOrSubClass = DrugPrescriptionStatus;
/**
 * schema:DrugPrescriptionStatus - Validation schema (w/ JOI)
 */
export declare const DrugPrescriptionStatusJoiSchema: Joi.ObjectSchema;
/**
 * schema:DrugPrescriptionStatus - Validation schema (w/ JOI)
 *
 * This differs from DrugPrescriptionStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DrugPrescriptionStatusOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:DrugPrescriptionStatus.
 *
 * If some data has a structure which matches a schema:DrugPrescriptionStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrugPrescriptionStatus = validateDrugPrescriptionStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrugPrescriptionStatus instanceof OaValidationError) {
 *   // From this point on, `maybeDrugPrescriptionStatus` will have type `OaValidationError`
 *   const error = maybeDrugPrescriptionStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrugPrescriptionStatus` will have type `DrugPrescriptionStatus`
 * const drugPrescriptionStatus = maybeDrugPrescriptionStatus;
 * ```
 */
export declare function validateDrugPrescriptionStatus(maybeDrugPrescriptionStatus: unknown): DrugPrescriptionStatus | OaValidationError;
