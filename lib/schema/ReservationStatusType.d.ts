import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ReservationStatusType
 */
export declare type ReservationStatusType = {
    '@type': 'ReservationStatusType';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:ReservationStatusType
 *
 * This differs from ReservationStatusType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type ReservationStatusTypeOrSubClass = ReservationStatusType;
/**
 * schema:ReservationStatusType - Validation schema (w/ JOI)
 */
export declare const ReservationStatusTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:ReservationStatusType - Validation schema (w/ JOI)
 *
 * This differs from ReservationStatusTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const ReservationStatusTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:ReservationStatusType.
 *
 * If some data has a structure which matches a schema:ReservationStatusType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReservationStatusType = validateReservationStatusType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReservationStatusType instanceof OaValidationError) {
 *   // From this point on, `maybeReservationStatusType` will have type `OaValidationError`
 *   const error = maybeReservationStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReservationStatusType` will have type `ReservationStatusType`
 * const reservationStatusType = maybeReservationStatusType;
 * ```
 */
export declare function validateReservationStatusType(maybeReservationStatusType: unknown): ReservationStatusType | OaValidationError;
