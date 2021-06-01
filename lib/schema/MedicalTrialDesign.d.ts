import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MedicalTrialDesign
 */
export declare type MedicalTrialDesign = {
    '@type': 'MedicalTrialDesign';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:MedicalTrialDesign
 *
 * This differs from MedicalTrialDesign because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalTrialDesignOrSubClass = MedicalTrialDesign;
/**
 * schema:MedicalTrialDesign - Validation schema (w/ JOI)
 */
export declare const MedicalTrialDesignJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalTrialDesign - Validation schema (w/ JOI)
 *
 * This differs from MedicalTrialDesignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalTrialDesignOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalTrialDesign.
 *
 * If some data has a structure which matches a schema:MedicalTrialDesign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalTrialDesign = MedicalTrialDesign.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalTrialDesign instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalTrialDesign` will have type `OaValidationError`
 *   const error = maybeMedicalTrialDesign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalTrialDesign` will have type `MedicalTrialDesign`
 * const medicalTrialDesign = maybeMedicalTrialDesign;
 * ```
 */
export declare function validateMedicalTrialDesign(maybeMedicalTrialDesign: unknown): MedicalTrialDesign | OaValidationError;
