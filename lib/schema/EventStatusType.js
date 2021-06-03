"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEventStatusType = exports.EventStatusTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:EventStatusType - Validation schema (w/ JOI)
 */
exports.EventStatusTypeJoiSchema = Joi.string().valid('https://schema.org/EventCancelled', 'https://schema.org/EventPostponed', 'https://schema.org/EventRescheduled', 'https://schema.org/EventScheduled');
/**
 * Runtime validator for schema:EventStatusType.
 *
 * If some data has one of the values of the schema:EventStatusType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEventStatusType = validateEventStatusType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEventStatusType instanceof OaValidationError) {
 *   // From this point on, `maybeEventStatusType` will have type `OaValidationError`
 *   const error = maybeEventStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEventStatusType` will have type `EventStatusType`
 * const eventStatusType = maybeEventStatusType;
 * ```
 */
function validateEventStatusType(maybeEventStatusType) {
    const { value, error } = exports.EventStatusTypeJoiSchema.validate(maybeEventStatusType);
    if (error) {
        return new oaValidationError_1.OaValidationError('EventStatusType', maybeEventStatusType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEventStatusType = validateEventStatusType;
