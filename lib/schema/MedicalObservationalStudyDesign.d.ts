import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MedicalObservationalStudyDesign
 */
export declare type MedicalObservationalStudyDesign = {
    '@type': 'MedicalObservationalStudyDesign';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:MedicalObservationalStudyDesign
 *
 * This differs from MedicalObservationalStudyDesign because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MedicalObservationalStudyDesignOrSubClass = MedicalObservationalStudyDesign;
/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 */
export declare const MedicalObservationalStudyDesignJoiSchema: Joi.ObjectSchema;
/**
 * schema:MedicalObservationalStudyDesign - Validation schema (w/ JOI)
 *
 * This differs from MedicalObservationalStudyDesignJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MedicalObservationalStudyDesignOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MedicalObservationalStudyDesign.
 *
 * If some data has a structure which matches a schema:MedicalObservationalStudyDesign, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMedicalObservationalStudyDesign = validateMedicalObservationalStudyDesign(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMedicalObservationalStudyDesign instanceof OaValidationError) {
 *   // From this point on, `maybeMedicalObservationalStudyDesign` will have type `OaValidationError`
 *   const error = maybeMedicalObservationalStudyDesign;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMedicalObservationalStudyDesign` will have type `MedicalObservationalStudyDesign`
 * const medicalObservationalStudyDesign = maybeMedicalObservationalStudyDesign;
 * ```
 */
export declare function validateMedicalObservationalStudyDesign(maybeMedicalObservationalStudyDesign: unknown): MedicalObservationalStudyDesign | OaValidationError;
