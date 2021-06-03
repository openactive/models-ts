"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMapCategoryType = exports.MapCategoryTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MapCategoryType - Validation schema (w/ JOI)
 *
 * An enumeration of several kinds of Map.
 */
exports.MapCategoryTypeJoiSchema = Joi.string().valid('https://schema.org/ParkingMap', 'https://schema.org/TransitMap', 'https://schema.org/VenueMap', 'https://schema.org/SeatingMap');
/**
 * Runtime validator for schema:MapCategoryType.
 *
 * If some data has one of the values of the schema:MapCategoryType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMapCategoryType = validateMapCategoryType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMapCategoryType instanceof OaValidationError) {
 *   // From this point on, `maybeMapCategoryType` will have type `OaValidationError`
 *   const error = maybeMapCategoryType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMapCategoryType` will have type `MapCategoryType`
 * const mapCategoryType = maybeMapCategoryType;
 * ```
 */
function validateMapCategoryType(maybeMapCategoryType) {
    const { value, error } = exports.MapCategoryTypeJoiSchema.validate(maybeMapCategoryType);
    if (error) {
        return new oaValidationError_1.OaValidationError('MapCategoryType', maybeMapCategoryType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMapCategoryType = validateMapCategoryType;
