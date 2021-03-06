// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Schedule
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
export type Schedule = {
  '@type': 'Schedule';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * Defines the day of the week upon which the Event takes place.
   * When using string values, this MUST conform to iCal BYDAY rule.
   *
   * ```json
   * "byDay": [
   *   "https://schema.org/Monday"
   * ]
   * ```
   */
  byDay?: string[] | schema.DayOfWeek[];
  /**
   * Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.
   *
   * ```json
   * "byMonth": [
   *   2
   * ]
   * ```
   */
  byMonth?: number[];
  /**
   * Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31
   *
   * ```json
   * "byMonthDay": [
   *   28
   * ]
   * ```
   */
  byMonthDay?: number[];
  /**
   * The duration of the event given in [ISO8601] format.
   *
   * ```json
   * "duration": "PT1H"
   * ```
   */
  duration?: string;
  /**
   * The end time of the event.
   *
   * ```json
   * "endTime": "12:00:00"
   * ```
   */
  endTime?: string;
  /**
   * Exception dates where the schedule should not generate an event.
   *
   * ```json
   * "exceptDate": [
   *   "2016-04-13T17:10:00Z",
   *   "2016-09-14T17:10:00Z",
   *   "2016-12-14T18:10:00Z",
   *   "2016-12-21T18:10:00Z",
   *   "2016-12-28T18:10:00Z",
   *   "2017-01-04T18:10:00Z"
   * ]
   * ```
   */
  exceptDate?: string[];
  /**
   * An RFC6570 compliant URI template that can be used to generate a unique identifier (`@id`) for every event described by the schedule. This property is required if the data provider is supporting third-party booking via the Open Booking API, or providing complimentary individual `subEvent`s.
   *
   * ```json
   * "idTemplate": "https://api.example.org/session-series/123/{startDate}"
   * ```
   */
  idTemplate?: string;
  /**
   * Defines the number of times a recurring Event will take place.
   *
   * ```json
   * "repeatCount": 3
   * ```
   */
  repeatCount?: number;
  /**
   * Defines the frequency at which Events will occur according to a Schedule. The intervals between events should be defined as a Duration of time.
   *
   * ```json
   * "repeatFrequency": "P1D"
   * ```
   */
  repeatFrequency?: string;
  /**
   * The type of event this schedule related to.
   *
   * ```json
   * "scheduledEventType": "Event"
   * ```
   */
  scheduledEventType?: string;
  /**
   * Indicates the timezone for which the time(s) indicated in the Schedule are given. The value provided should be among those listed in the IANA Time Zone Database.
   *
   * ```json
   * "scheduleTimezone": "Europe/London"
   * ```
   */
  scheduleTimezone?: string;
  /**
   * The start date of the event.
   *
   * ```json
   * "startDate": "2018-01-27"
   * ```
   */
  startDate?: string;
  /**
   * The end date of the schedule.
   *
   * ```json
   * "endDate": "2018-01-27"
   * ```
   */
  endDate?: string;
  /**
   * The start time of the event.
   *
   * ```json
   * "startTime": "12:00:00"
   * ```
   */
  startTime?: string;
  /**
   * An RFC6570 compliant URI template that can be used to generate a unique `url` for every event described by the schedule. This property is required if the data provider wants to provide participants with a unique URL to book to attend an event.
   *
   * ```json
   * "urlTemplate": "https://example.org/session-series/123/{startDate}"
   * ```
   */
  urlTemplate?: string;
  /**
   * [DEPRECATED: This term has graduated from the beta namespace and is highly likely to be removed in future versions of this library, please use `scheduleTimezone` instead.]
   * The time zone used to generate occurrences, same as iCal TZID. E.g. 'Europe/London'.
   * 
   * If you are using this property, please join the discussion at proposal [#197](https://github.com/openactive/modelling-opportunity-data/issues/197).
   */
  'beta:timeZone'?: string;
};

/**
 * Schedule
 *
 * This type is derived from https://pending.schema.org/Schedule.
 *
 * This differs from Schedule because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ScheduleOrSubClass =
  | Schedule
  | oa.PartialScheduleOrSubClass
  ;

/**
 * Schedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
export const ScheduleJoiSchema = Joi.object({
  '@type': Joi.string().valid('Schedule').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
  byDay: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => schema.DayOfWeekJoiSchema))),
  byMonth: Joi.array().items(Joi.number().integer()),
  byMonthDay: Joi.array().items(Joi.number().integer()),
  duration: Joi.string(),
  endTime: Joi.string(),
  exceptDate: Joi.array().items(Joi.string().isoDate()),
  idTemplate: Joi.string(),
  repeatCount: Joi.number().integer(),
  repeatFrequency: Joi.string(),
  scheduledEventType: Joi.string(),
  scheduleTimezone: Joi.string(),
  startDate: Joi.string().isoDate(),
  endDate: Joi.string().isoDate(),
  startTime: Joi.string(),
  urlTemplate: Joi.string(),
  'beta:timeZone': Joi.string(),
});

/**
 * Schedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 *
 * This differs from ScheduleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ScheduleOrSubClassJoiSchema = Joi.alternatives().try([
  ScheduleJoiSchema,
  Joi.lazy(() => oa.PartialScheduleOrSubClassJoiSchema),
]);

/**
 * Runtime validator for Schedule.
 *
 * If some data has a structure which matches a Schedule, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSchedule = validateSchedule(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSchedule instanceof OaValidationError) {
 *   // From this point on, `maybeSchedule` will have type `OaValidationError`
 *   const error = maybeSchedule;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSchedule` will have type `Schedule`
 * const schedule = maybeSchedule;
 * ```
 */
export function validateSchedule(maybeSchedule: unknown): Schedule | OaValidationError {
  const { value, error } = ScheduleJoiSchema.validate(maybeSchedule);
  if (error) {
    return new OaValidationError('Schedule', maybeSchedule, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Schedule;
}
