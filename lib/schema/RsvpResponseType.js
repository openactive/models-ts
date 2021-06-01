"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRsvpResponseType = exports.RsvpResponseTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:RsvpResponseType - Validation schema (w/ JOI)
 *
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 */
exports.RsvpResponseTypeJoiSchema = Joi.string().valid('https://schema.org/RsvpResponseMaybe', 'https://schema.org/RsvpResponseNo', 'https://schema.org/RsvpResponseYes');
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
function validateRsvpResponseType(maybeRsvpResponseType) {
    const { value, error } = exports.RsvpResponseTypeJoiSchema.validate(maybeRsvpResponseType);
    if (error) {
        return new oaValidationError_1.OaValidationError('RsvpResponseType', maybeRsvpResponseType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateRsvpResponseType = validateRsvpResponseType;
