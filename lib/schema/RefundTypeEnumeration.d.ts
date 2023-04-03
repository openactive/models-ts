import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:RefundTypeEnumeration
 *
 * Enumerates several kinds of product return refund types.
 */
export declare type RefundTypeEnumeration = 'https://schema.org/ExchangeRefund' | 'https://schema.org/StoreCreditRefund' | 'https://schema.org/FullRefund';
/**
 * schema:RefundTypeEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several kinds of product return refund types.
 */
export declare const RefundTypeEnumerationJoiSchema: Joi.StringSchema;
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
export declare function validateRefundTypeEnumeration(maybeRefundTypeEnumeration: unknown): RefundTypeEnumeration | OaValidationError;
