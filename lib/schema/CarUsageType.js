"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCarUsageType = exports.CarUsageTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:CarUsageType - Validation schema (w/ JOI)
 *
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 */
exports.CarUsageTypeJoiSchema = Joi.string().valid('https://schema.org/RentalVehicleUsage', 'https://schema.org/DrivingSchoolVehicleUsage', 'https://schema.org/TaxiVehicleUsage');
/**
 * Runtime validator for schema:CarUsageType.
 *
 * If some data has one of the values of the schema:CarUsageType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCarUsageType = validateCarUsageType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCarUsageType instanceof OaValidationError) {
 *   // From this point on, `maybeCarUsageType` will have type `OaValidationError`
 *   const error = maybeCarUsageType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCarUsageType` will have type `CarUsageType`
 * const carUsageType = maybeCarUsageType;
 * ```
 */
function validateCarUsageType(maybeCarUsageType) {
    const { value, error } = exports.CarUsageTypeJoiSchema.validate(maybeCarUsageType);
    if (error) {
        return new oaValidationError_1.OaValidationError('CarUsageType', maybeCarUsageType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCarUsageType = validateCarUsageType;
