"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePartialSchedule = exports.PartialScheduleOrSubClassJoiSchema = exports.PartialScheduleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * PartialSchedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
exports.PartialScheduleJoiSchema = Joi.object({
    '@type': Joi.string().valid('PartialSchedule').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
    byDay: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => schema.DayOfWeekJoiSchema))),
    byMonth: Joi.array().items(Joi.number().integer()),
    byMonthDay: Joi.array().items(Joi.number().integer()),
    duration: Joi.string(),
    endTime: Joi.string(),
    exceptDate: Joi.array().items(Joi.string().isoDate()),
    repeatCount: Joi.number().integer(),
    repeatFrequency: Joi.string(),
    scheduleTimezone: Joi.string(),
    startDate: Joi.string().isoDate(),
    endDate: Joi.string().isoDate(),
    startTime: Joi.string(),
    'beta:timeZone': Joi.string(),
});
/**
 * PartialSchedule - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/Schedule.
 *
 * This differs from PartialScheduleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PartialScheduleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PartialScheduleJoiSchema,
]);
/**
 * Runtime validator for PartialSchedule.
 *
 * If some data has a structure which matches a PartialSchedule, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePartialSchedule = validatePartialSchedule(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePartialSchedule instanceof OaValidationError) {
 *   // From this point on, `maybePartialSchedule` will have type `OaValidationError`
 *   const error = maybePartialSchedule;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePartialSchedule` will have type `PartialSchedule`
 * const partialSchedule = maybePartialSchedule;
 * ```
 */
function validatePartialSchedule(maybePartialSchedule) {
    const { value, error } = exports.PartialScheduleJoiSchema.validate(maybePartialSchedule);
    if (error) {
        return new oaValidationError_1.OaValidationError('PartialSchedule', maybePartialSchedule, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePartialSchedule = validatePartialSchedule;
