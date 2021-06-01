"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchedule = exports.ScheduleOrSubClassJoiSchema = exports.ScheduleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Schedule - Validation schema (w/ JOI)
 */
exports.ScheduleJoiSchema = Joi.object({
    '@type': Joi.string().valid('Schedule').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    startTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    startDate: Joi.string().isoDate(),
    endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    repeatFrequency: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    exceptDate: Joi.string().isoDate(),
    byMonth: Joi.number().integer(),
    endDate: Joi.string().isoDate(),
    byMonthDay: Joi.number().integer(),
    byDay: Joi.alternatives().try(Joi.lazy(() => schema.DayOfWeekJoiSchema), Joi.string()),
    scheduleTimezone: Joi.string(),
    repeatCount: Joi.number().integer(),
    duration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    byMonthWeek: Joi.number().integer(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * schema:Schedule - Validation schema (w/ JOI)
 *
 * This differs from ScheduleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ScheduleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ScheduleJoiSchema,
]);
/**
 * Runtime validator for schema:Schedule.
 *
 * If some data has a structure which matches a schema:Schedule, it will be returned with the correct type.
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
