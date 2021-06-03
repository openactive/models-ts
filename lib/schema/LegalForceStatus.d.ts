import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:LegalForceStatus
 */
export declare type LegalForceStatus = {
    '@type': 'LegalForceStatus';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:LegalForceStatus
 *
 * This differs from LegalForceStatus because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type LegalForceStatusOrSubClass = LegalForceStatus;
/**
 * schema:LegalForceStatus - Validation schema (w/ JOI)
 */
export declare const LegalForceStatusJoiSchema: Joi.ObjectSchema;
/**
 * schema:LegalForceStatus - Validation schema (w/ JOI)
 *
 * This differs from LegalForceStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const LegalForceStatusOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:LegalForceStatus.
 *
 * If some data has a structure which matches a schema:LegalForceStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLegalForceStatus = validateLegalForceStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLegalForceStatus instanceof OaValidationError) {
 *   // From this point on, `maybeLegalForceStatus` will have type `OaValidationError`
 *   const error = maybeLegalForceStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLegalForceStatus` will have type `LegalForceStatus`
 * const legalForceStatus = maybeLegalForceStatus;
 * ```
 */
export declare function validateLegalForceStatus(maybeLegalForceStatus: unknown): LegalForceStatus | OaValidationError;
