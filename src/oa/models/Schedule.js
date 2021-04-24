
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://pending.schema.org/Schedule.
 */
const Schedule = s.intersection([
  s.type({'@type': s.literal('Schedule')}),
  s.partial({
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
      byDay: s.union([s.array(s.string),s.array(schema.enums.DayOfWeek)]),
      /**
      * Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.
      *
      * ```json
      * "byMonth": [
      *   2
      * ]
      * ```
      */
      byMonth: s.array(s.nonNegativeInt),
      /**
      * Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31
      *
      * ```json
      * "byMonthDay": [
      *   28
      * ]
      * ```
      */
      byMonthDay: s.array(s.nonNegativeInt),
      /**
      * The duration of the event given in [ISO8601] format.
      *
      * ```json
      * "duration": "PT1H"
      * ```
      */
      duration: s.string,
      /**
      * The end time of the event.
      *
      * ```json
      * "endTime": "12:00:00"
      * ```
      */
      endTime: s.string,
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
      exceptDate: s.union([s.array(s.isoDateTimeString),s.array(s.string)]),
      /**
      * An RFC6570 compliant URI template that can be used to generate a unique identifier (`@id`) for every event described by the schedule. This property is required if the data provider is supporting third-party booking via the Open Booking API, or providing complimentary individual `subEvent`s.
      *
      * ```json
      * "idTemplate": "https://api.example.org/session-series/123/{startDate}"
      * ```
      */
      idTemplate: s.string,
      /**
      * Defines the number of times a recurring Event will take place.
      *
      * ```json
      * "repeatCount": 3
      * ```
      */
      repeatCount: s.nonNegativeInt,
      /**
      * Defines the frequency at which Events will occur according to a Schedule. The intervals between events should be defined as a Duration of time.
      *
      * ```json
      * "repeatFrequency": "P1D"
      * ```
      */
      repeatFrequency: s.string,
      /**
      * The type of event this schedule related to.
      *
      * ```json
      * "scheduledEventType": "Event"
      * ```
      */
      scheduledEventType: s.string,
      /**
      * Indicates the timezone for which the time(s) indicated in the Schedule are given. The value provided should be among those listed in the IANA Time Zone Database.
      *
      * ```json
      * "scheduleTimezone": "Europe/London"
      * ```
      */
      scheduleTimezone: s.string,
      /**
      * The start date of the event.
      *
      * ```json
      * "startDate": "2018-01-27"
      * ```
      */
      startDate: s.string,
      /**
      * The end date of the schedule.
      *
      * ```json
      * "endDate": "2018-01-27"
      * ```
      */
      endDate: s.string,
      /**
      * The start time of the event.
      *
      * ```json
      * "startTime": "12:00:00"
      * ```
      */
      startTime: s.string,
      /**
      * An RFC6570 compliant URI template that can be used to generate a unique `url` for every event described by the schedule. This property is required if the data provider wants to provide participants with a unique URL to book to attend an event.
      *
      * ```json
      * "urlTemplate": "https://example.org/session-series/123/{startDate}"
      * ```
      */
      urlTemplate: s.string,
      /**
      * [DEPRECATED: This term has graduated from the beta namespace and is highly likely to be removed in future versions of this library, please use `scheduleTimezone` instead.]
      * The time zone used to generate occurrences, same as iCal TZID. E.g. 'Europe/London'.
      * 
      * If you are using this property, please join the discussion at proposal [#197](https://github.com/openactive/modelling-opportunity-data/issues/197).
      */
      timeZone: s.string,
  })
])

module.exports = {
  Schedule,
};