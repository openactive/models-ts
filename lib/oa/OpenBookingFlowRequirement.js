"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpenBookingFlowRequirement = exports.OpenBookingFlowRequirementJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * OpenBookingFlowRequirement - Validation schema (w/ JOI)
 */
exports.OpenBookingFlowRequirementJoiSchema = Joi.string().valid('https://openactive.io/OpenBookingIntakeForm', 'https://openactive.io/OpenBookingAttendeeDetails', 'https://openactive.io/OpenBookingApproval', 'https://openactive.io/OpenBookingNegotiation', 'https://openactive.io/OpenBookingMessageExchange');
/**
 * Runtime validator for OpenBookingFlowRequirement.
 *
 * If some data has one of the values of the OpenBookingFlowRequirement enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpenBookingFlowRequirement = validateOpenBookingFlowRequirement(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpenBookingFlowRequirement instanceof OaValidationError) {
 *   // From this point on, `maybeOpenBookingFlowRequirement` will have type `OaValidationError`
 *   const error = maybeOpenBookingFlowRequirement;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpenBookingFlowRequirement` will have type `OpenBookingFlowRequirement`
 * const openBookingFlowRequirement = maybeOpenBookingFlowRequirement;
 * ```
 */
function validateOpenBookingFlowRequirement(maybeOpenBookingFlowRequirement) {
    const { value, error } = exports.OpenBookingFlowRequirementJoiSchema.validate(maybeOpenBookingFlowRequirement);
    if (error) {
        return new oaValidationError_1.OaValidationError('OpenBookingFlowRequirement', maybeOpenBookingFlowRequirement, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOpenBookingFlowRequirement = validateOpenBookingFlowRequirement;
