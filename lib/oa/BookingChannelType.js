"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBookingChannelType = exports.BookingChannelTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * beta:BookingChannelType - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of booking channels that can exist.
 */
exports.BookingChannelTypeJoiSchema = Joi.string().valid('https://openactive.io/ns-beta#TelephoneAdvanceBooking', 'https://openactive.io/ns-beta#TelephonePrepayment', 'https://openactive.io/ns-beta#OnlineAdvanceBooking', 'https://openactive.io/ns-beta#OnlinePrepayment');
/**
 * Runtime validator for beta:BookingChannelType.
 *
 * If some data has one of the values of the beta:BookingChannelType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBookingChannelType = BookingChannelType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBookingChannelType instanceof OaValidationError) {
 *   // From this point on, `maybeBookingChannelType` will have type `OaValidationError`
 *   const error = maybeBookingChannelType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBookingChannelType` will have type `BookingChannelType`
 * const bookingChannelType = maybeBookingChannelType;
 * ```
 */
function validateBookingChannelType(maybeBookingChannelType) {
    const { value, error } = exports.BookingChannelTypeJoiSchema.validate(maybeBookingChannelType);
    if (error) {
        return new oaValidationError_1.OaValidationError('BookingChannelType', maybeBookingChannelType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBookingChannelType = validateBookingChannelType;
