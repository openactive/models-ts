"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderItemStatus = exports.OrderItemStatusJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * OrderItemStatus - Validation schema (w/ JOI)
 */
exports.OrderItemStatusJoiSchema = Joi.string().valid('https://openactive.io/SellerCancelled', 'https://openactive.io/CustomerCancelled', 'https://openactive.io/OrderItemConfirmed', 'https://openactive.io/CustomerAttended');
/**
 * Runtime validator for OrderItemStatus.
 *
 * If some data has one of the values of the OrderItemStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderItemStatus = validateOrderItemStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderItemStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderItemStatus` will have type `OaValidationError`
 *   const error = maybeOrderItemStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderItemStatus` will have type `OrderItemStatus`
 * const orderItemStatus = maybeOrderItemStatus;
 * ```
 */
function validateOrderItemStatus(maybeOrderItemStatus) {
    const { value, error } = exports.OrderItemStatusJoiSchema.validate(maybeOrderItemStatus);
    if (error) {
        return new oaValidationError_1.OaValidationError('OrderItemStatus', maybeOrderItemStatus, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrderItemStatus = validateOrderItemStatus;
