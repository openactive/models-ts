"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchedule = exports.ScheduleOrSubClassJoiSchema = exports.ScheduleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Schedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
exports.ScheduleJoiSchema = Joi.object({
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
exports.ScheduleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ScheduleJoiSchema,
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
 * const maybeSchedule = Schedule.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSchedule instanceof OaValidationError) {
 *   // From this point on, `maybeSchedule` will have type `OaValidationError`
 *   const error = maybeSchedule;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSchedule` will have type `Schedule`
 * const schedule = maybeSchedule;
 * ```
 */
function validateSchedule(maybeSchedule) {
    const { value, error } = exports.ScheduleJoiSchema.validate(maybeSchedule);
    if (error) {
        return new oaValidationError_1.OaValidationError('Schedule', maybeSchedule, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSchedule = validateSchedule;
