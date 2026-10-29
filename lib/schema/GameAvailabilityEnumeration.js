"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGameAvailabilityEnumeration = exports.GameAvailabilityEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:GameAvailabilityEnumeration - Validation schema (w/ JOI)
 *
 * For a [[VideoGame]], such as used with a [[PlayGameAction]], an enumeration of the kind of game availability offered.
 */
exports.GameAvailabilityEnumerationJoiSchema = Joi.string().valid('https://schema.org/DemoGameAvailability', 'https://schema.org/FullGameAvailability');
/**
 * Runtime validator for schema:GameAvailabilityEnumeration.
 *
 * If some data has one of the values of the schema:GameAvailabilityEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameAvailabilityEnumeration = validateGameAvailabilityEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameAvailabilityEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeGameAvailabilityEnumeration` will have type `OaValidationError`
 *   const error = maybeGameAvailabilityEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameAvailabilityEnumeration` will have type `GameAvailabilityEnumeration`
 * const gameAvailabilityEnumeration = maybeGameAvailabilityEnumeration;
 * ```
 */
function validateGameAvailabilityEnumeration(maybeGameAvailabilityEnumeration) {
    const { value, error } = exports.GameAvailabilityEnumerationJoiSchema.validate(maybeGameAvailabilityEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('GameAvailabilityEnumeration', maybeGameAvailabilityEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGameAvailabilityEnumeration = validateGameAvailabilityEnumeration;
