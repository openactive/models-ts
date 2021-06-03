import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:EventAttendanceModeEnumeration
 *
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
export declare type EventAttendanceModeEnumeration = 'https://schema.org/OnlineEventAttendanceMode' | 'https://schema.org/OfflineEventAttendanceMode' | 'https://schema.org/MixedEventAttendanceMode';
/**
 * schema:EventAttendanceModeEnumeration - Validation schema (w/ JOI)
 *
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
export declare const EventAttendanceModeEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:EventAttendanceModeEnumeration.
 *
 * If some data has one of the values of the schema:EventAttendanceModeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEventAttendanceModeEnumeration = validateEventAttendanceModeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEventAttendanceModeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeEventAttendanceModeEnumeration` will have type `OaValidationError`
 *   const error = maybeEventAttendanceModeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEventAttendanceModeEnumeration` will have type `EventAttendanceModeEnumeration`
 * const eventAttendanceModeEnumeration = maybeEventAttendanceModeEnumeration;
 * ```
 */
export declare function validateEventAttendanceModeEnumeration(maybeEventAttendanceModeEnumeration: unknown): EventAttendanceModeEnumeration | OaValidationError;
