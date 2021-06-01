import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * PartialSchedule
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
export declare type PartialSchedule = {
    '@type': 'PartialSchedule';
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
     * [DEPRECATED: This term has graduated from the beta namespace and is highly likely to be removed in future versions of this library, please use `scheduleTimezone` instead.]
     * The time zone used to generate occurrences, same as iCal TZID. E.g. 'Europe/London'.
     *
     * If you are using this property, please join the discussion at proposal [#197](https://github.com/openactive/modelling-opportunity-data/issues/197).
     */
    'beta:timeZone'?: string;
};
/**
 * PartialSchedule
 *
 * This type is derived from https://pending.schema.org/Schedule.
 *
 * This differs from PartialSchedule because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PartialScheduleOrSubClass = PartialSchedule;
/**
 * PartialSchedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
export declare const PartialScheduleJoiSchema: Joi.ObjectSchema;
/**
 * PartialSchedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 *
 * This differs from PartialScheduleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PartialScheduleOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for PartialSchedule.
 *
 * If some data has a structure which matches a PartialSchedule, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePartialSchedule = PartialSchedule.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePartialSchedule instanceof OaValidationError) {
 *   // From this point on, `maybePartialSchedule` will have type `OaValidationError`
 *   const error = maybePartialSchedule;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePartialSchedule` will have type `PartialSchedule`
 * const partialSchedule = maybePartialSchedule;
 * ```
 */
export declare function validatePartialSchedule(maybePartialSchedule: unknown): PartialSchedule | OaValidationError;
