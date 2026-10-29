"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIncentiveStatus = exports.IncentiveStatusJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:IncentiveStatus - Validation schema (w/ JOI)
 *
 * Enumerates a status for an incentive, such as whether it is active.
 */
exports.IncentiveStatusJoiSchema = Joi.string().valid('https://schema.org/IncentiveStatusActive', 'https://schema.org/IncentiveStatusInDevelopment', 'https://schema.org/IncentiveStatusOnHold', 'https://schema.org/IncentiveStatusRetired');
/**
 * Runtime validator for schema:IncentiveStatus.
 *
 * If some data has one of the values of the schema:IncentiveStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncentiveStatus = validateIncentiveStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncentiveStatus instanceof OaValidationError) {
 *   // From this point on, `maybeIncentiveStatus` will have type `OaValidationError`
 *   const error = maybeIncentiveStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncentiveStatus` will have type `IncentiveStatus`
 * const incentiveStatus = maybeIncentiveStatus;
 * ```
 */
function validateIncentiveStatus(maybeIncentiveStatus) {
    const { value, error } = exports.IncentiveStatusJoiSchema.validate(maybeIncentiveStatus);
    if (error) {
        return new oaValidationError_1.OaValidationError('IncentiveStatus', maybeIncentiveStatus, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateIncentiveStatus = validateIncentiveStatus;
