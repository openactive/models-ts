"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderProposalStatus = exports.OrderProposalStatusJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * OrderProposalStatus - Validation schema (w/ JOI)
 */
exports.OrderProposalStatusJoiSchema = Joi.string().valid('https://openactive.io/AwaitingSellerConfirmation', 'https://openactive.io/SellerAccepted', 'https://openactive.io/SellerRejected', 'https://openactive.io/CustomerRejected');
/**
 * Runtime validator for OrderProposalStatus.
 *
 * If some data has one of the values of the OrderProposalStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderProposalStatus = OrderProposalStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderProposalStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderProposalStatus` will have type `OaValidationError`
 *   const error = maybeOrderProposalStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderProposalStatus` will have type `OrderProposalStatus`
 * const orderProposalStatus = maybeOrderProposalStatus;
 * ```
 */
function validateOrderProposalStatus(maybeOrderProposalStatus) {
    const { value, error } = exports.OrderProposalStatusJoiSchema.validate(maybeOrderProposalStatus);
    if (error) {
        return new oaValidationError_1.OaValidationError('OrderProposalStatus', maybeOrderProposalStatus, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrderProposalStatus = validateOrderProposalStatus;
