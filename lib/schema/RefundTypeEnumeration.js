"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRefundTypeEnumeration = exports.RefundTypeEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:RefundTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several kinds of product return refund types.
 */
exports.RefundTypeEnumerationJoiSchema = Joi.string().valid('https://schema.org/ExchangeRefund', 'https://schema.org/StoreCreditRefund', 'https://schema.org/FullRefund');
/**
 * Runtime validator for schema:RefundTypeEnumeration.
 *
 * If some data has one of the values of the schema:RefundTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRefundTypeEnumeration = validateRefundTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRefundTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeRefundTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeRefundTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRefundTypeEnumeration` will have type `RefundTypeEnumeration`
 * const refundTypeEnumeration = maybeRefundTypeEnumeration;
 * ```
 */
function validateRefundTypeEnumeration(maybeRefundTypeEnumeration) {
    const { value, error } = exports.RefundTypeEnumerationJoiSchema.validate(maybeRefundTypeEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('RefundTypeEnumeration', maybeRefundTypeEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateRefundTypeEnumeration = validateRefundTypeEnumeration;
