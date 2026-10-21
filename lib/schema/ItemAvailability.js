"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItemAvailability = exports.ItemAvailabilityJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ItemAvailability - Validation schema (w/ JOI)
 *
 * A list of possible product availability options.
 */
exports.ItemAvailabilityJoiSchema = Joi.string().valid('https://schema.org/InStoreOnly', 'https://schema.org/OnlineOnly', 'https://schema.org/BackOrder', 'https://schema.org/OutOfStock', 'https://schema.org/LimitedAvailability', 'https://schema.org/PreSale', 'https://schema.org/PreOrder', 'https://schema.org/InStock', 'https://schema.org/Discontinued', 'https://schema.org/SoldOut');
/**
 * Runtime validator for schema:ItemAvailability.
 *
 * If some data has one of the values of the schema:ItemAvailability enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeItemAvailability = validateItemAvailability(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeItemAvailability instanceof OaValidationError) {
 *   // From this point on, `maybeItemAvailability` will have type `OaValidationError`
 *   const error = maybeItemAvailability;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeItemAvailability` will have type `ItemAvailability`
 * const itemAvailability = maybeItemAvailability;
 * ```
 */
function validateItemAvailability(maybeItemAvailability) {
    const { value, error } = exports.ItemAvailabilityJoiSchema.validate(maybeItemAvailability);
    if (error) {
        return new oaValidationError_1.OaValidationError('ItemAvailability', maybeItemAvailability, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateItemAvailability = validateItemAvailability;
