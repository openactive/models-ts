import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:RsvpResponseType
 *
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 */
export declare type RsvpResponseType = 'https://schema.org/RsvpResponseMaybe' | 'https://schema.org/RsvpResponseNo' | 'https://schema.org/RsvpResponseYes';
/**
 * schema:RsvpResponseType - Validation schema (w/ JOI)
 *
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 */
export declare const RsvpResponseTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:RsvpResponseType.
 *
 * If some data has one of the values of the schema:RsvpResponseType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRsvpResponseType = RsvpResponseType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRsvpResponseType instanceof OaValidationError) {
 *   // From this point on, `maybeRsvpResponseType` will have type `OaValidationError`
 *   const error = maybeRsvpResponseType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRsvpResponseType` will have type `RsvpResponseType`
 * const rsvpResponseType = maybeRsvpResponseType;
 * ```
 */
export declare function validateRsvpResponseType(maybeRsvpResponseType: unknown): RsvpResponseType | OaValidationError;
