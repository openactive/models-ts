"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOfferItemCondition = exports.OfferItemConditionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:OfferItemCondition - Validation schema (w/ JOI)
 *
 * A list of possible conditions for the item.
 */
exports.OfferItemConditionJoiSchema = Joi.string().valid('https://schema.org/NewCondition', 'https://schema.org/UsedCondition', 'https://schema.org/DamagedCondition', 'https://schema.org/RefurbishedCondition');
/**
 * Runtime validator for schema:OfferItemCondition.
 *
 * If some data has one of the values of the schema:OfferItemCondition enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferItemCondition = validateOfferItemCondition(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferItemCondition instanceof OaValidationError) {
 *   // From this point on, `maybeOfferItemCondition` will have type `OaValidationError`
 *   const error = maybeOfferItemCondition;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferItemCondition` will have type `OfferItemCondition`
 * const offerItemCondition = maybeOfferItemCondition;
 * ```
 */
function validateOfferItemCondition(maybeOfferItemCondition) {
    const { value, error } = exports.OfferItemConditionJoiSchema.validate(maybeOfferItemCondition);
    if (error) {
        return new oaValidationError_1.OaValidationError('OfferItemCondition', maybeOfferItemCondition, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOfferItemCondition = validateOfferItemCondition;
