"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEventAttendanceModeEnumeration = exports.EventAttendanceModeEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:EventAttendanceModeEnumeration - Validation schema (w/ JOI)
 *
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
exports.EventAttendanceModeEnumerationJoiSchema = Joi.string().valid('https://schema.org/OnlineEventAttendanceMode', 'https://schema.org/OfflineEventAttendanceMode', 'https://schema.org/MixedEventAttendanceMode');
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
function validateEventAttendanceModeEnumeration(maybeEventAttendanceModeEnumeration) {
    const { value, error } = exports.EventAttendanceModeEnumerationJoiSchema.validate(maybeEventAttendanceModeEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('EventAttendanceModeEnumeration', maybeEventAttendanceModeEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEventAttendanceModeEnumeration = validateEventAttendanceModeEnumeration;
