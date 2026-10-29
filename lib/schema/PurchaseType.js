"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePurchaseType = exports.PurchaseTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:PurchaseType - Validation schema (w/ JOI)
 *
 * Enumerates a purchase type for an item.
 */
exports.PurchaseTypeJoiSchema = Joi.string().valid('https://schema.org/PurchaseTypeLease', 'https://schema.org/PurchaseTypeNewPurchase', 'https://schema.org/PurchaseTypeTradeIn', 'https://schema.org/PurchaseTypeUsedPurchase');
/**
 * Runtime validator for schema:PurchaseType.
 *
 * If some data has one of the values of the schema:PurchaseType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePurchaseType = validatePurchaseType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePurchaseType instanceof OaValidationError) {
 *   // From this point on, `maybePurchaseType` will have type `OaValidationError`
 *   const error = maybePurchaseType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePurchaseType` will have type `PurchaseType`
 * const purchaseType = maybePurchaseType;
 * ```
 */
function validatePurchaseType(maybePurchaseType) {
    const { value, error } = exports.PurchaseTypeJoiSchema.validate(maybePurchaseType);
    if (error) {
        return new oaValidationError_1.OaValidationError('PurchaseType', maybePurchaseType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePurchaseType = validatePurchaseType;
