import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * beta:BookingChannelType
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of booking channels that can exist.
 */
export declare type BookingChannelType = 'https://openactive.io/ns-beta#TelephoneAdvanceBooking' | 'https://openactive.io/ns-beta#TelephonePrepayment' | 'https://openactive.io/ns-beta#OnlineAdvanceBooking' | 'https://openactive.io/ns-beta#OnlinePrepayment';
/**
 * beta:BookingChannelType - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of booking channels that can exist.
 */
export declare const BookingChannelTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for beta:BookingChannelType.
 *
 * If some data has one of the values of the beta:BookingChannelType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBookingChannelType = validateBookingChannelType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBookingChannelType instanceof OaValidationError) {
 *   // From this point on, `maybeBookingChannelType` will have type `OaValidationError`
 *   const error = maybeBookingChannelType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBookingChannelType` will have type `BookingChannelType`
 * const bookingChannelType = maybeBookingChannelType;
 * ```
 */
export declare function validateBookingChannelType(maybeBookingChannelType: unknown): BookingChannelType | OaValidationError;
