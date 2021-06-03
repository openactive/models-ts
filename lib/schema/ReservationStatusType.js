"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReservationStatusType = exports.ReservationStatusTypeOrSubClassJoiSchema = exports.ReservationStatusTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ReservationStatusType - Validation schema (w/ JOI)
 */
exports.ReservationStatusTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('ReservationStatusType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:ReservationStatusType - Validation schema (w/ JOI)
 *
 * This differs from ReservationStatusTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ReservationStatusTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ReservationStatusTypeJoiSchema,
]);
/**
 * Runtime validator for schema:ReservationStatusType.
 *
 * If some data has a structure which matches a schema:ReservationStatusType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReservationStatusType = validateReservationStatusType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReservationStatusType instanceof OaValidationError) {
 *   // From this point on, `maybeReservationStatusType` will have type `OaValidationError`
 *   const error = maybeReservationStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReservationStatusType` will have type `ReservationStatusType`
 * const reservationStatusType = maybeReservationStatusType;
 * ```
 */
function validateReservationStatusType(maybeReservationStatusType) {
    const { value, error } = exports.ReservationStatusTypeJoiSchema.validate(maybeReservationStatusType);
    if (error) {
        return new oaValidationError_1.OaValidationError('ReservationStatusType', maybeReservationStatusType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateReservationStatusType = validateReservationStatusType;
