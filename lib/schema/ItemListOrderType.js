"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItemListOrderType = exports.ItemListOrderTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ItemListOrderType - Validation schema (w/ JOI)
 *
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
exports.ItemListOrderTypeJoiSchema = Joi.string().valid('https://schema.org/ItemListOrderAscending', 'https://schema.org/ItemListUnordered', 'https://schema.org/ItemListOrderDescending');
/**
 * Runtime validator for schema:ItemListOrderType.
 *
 * If some data has one of the values of the schema:ItemListOrderType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeItemListOrderType = validateItemListOrderType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeItemListOrderType instanceof OaValidationError) {
 *   // From this point on, `maybeItemListOrderType` will have type `OaValidationError`
 *   const error = maybeItemListOrderType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeItemListOrderType` will have type `ItemListOrderType`
 * const itemListOrderType = maybeItemListOrderType;
 * ```
 */
function validateItemListOrderType(maybeItemListOrderType) {
    const { value, error } = exports.ItemListOrderTypeJoiSchema.validate(maybeItemListOrderType);
    if (error) {
        return new oaValidationError_1.OaValidationError('ItemListOrderType', maybeItemListOrderType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateItemListOrderType = validateItemListOrderType;
