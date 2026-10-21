// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:EventAttendanceModeEnumeration
 *
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
export type EventAttendanceModeEnumeration = 
  
  | 'https://schema.org/MixedEventAttendanceMode'
  | 'https://schema.org/OfflineEventAttendanceMode'
  | 'https://schema.org/OnlineEventAttendanceMode'
  ;

/**
 * schema:EventAttendanceModeEnumeration - Validation schema (w/ JOI)
 *
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
export const EventAttendanceModeEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/MixedEventAttendanceMode',
  'https://schema.org/OfflineEventAttendanceMode',
  'https://schema.org/OnlineEventAttendanceMode',
);

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
export function validateEventAttendanceModeEnumeration(maybeEventAttendanceModeEnumeration: unknown): EventAttendanceModeEnumeration | OaValidationError {
  const { value, error } = EventAttendanceModeEnumerationJoiSchema.validate(maybeEventAttendanceModeEnumeration);
  if (error) {
    return new OaValidationError('EventAttendanceModeEnumeration', maybeEventAttendanceModeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EventAttendanceModeEnumeration;
}
