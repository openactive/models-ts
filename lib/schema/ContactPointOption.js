"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContactPointOption = exports.ContactPointOptionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ContactPointOption - Validation schema (w/ JOI)
 *
 * Enumerated options related to a ContactPoint.
 */
exports.ContactPointOptionJoiSchema = Joi.string().valid('https://schema.org/HearingImpairedSupported', 'https://schema.org/TollFree');
/**
 * Runtime validator for schema:ContactPointOption.
 *
 * If some data has one of the values of the schema:ContactPointOption enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeContactPointOption = validateContactPointOption(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeContactPointOption instanceof OaValidationError) {
 *   // From this point on, `maybeContactPointOption` will have type `OaValidationError`
 *   const error = maybeContactPointOption;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeContactPointOption` will have type `ContactPointOption`
 * const contactPointOption = maybeContactPointOption;
 * ```
 */
function validateContactPointOption(maybeContactPointOption) {
    const { value, error } = exports.ContactPointOptionJoiSchema.validate(maybeContactPointOption);
    if (error) {
        return new oaValidationError_1.OaValidationError('ContactPointOption', maybeContactPointOption, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateContactPointOption = validateContactPointOption;
