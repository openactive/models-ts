// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:RefundTypeEnumeration
 *
 * RefundTypeEnumeration enumerates several kinds of product return refund types.
 */
export type RefundTypeEnumeration = 
  
  | 'https://schema.org/FullRefund'
  | 'https://schema.org/StoreCreditRefund'
  | 'https://schema.org/ExchangeRefund'
  ;

/**
 * schema:RefundTypeEnumeration - Validation schema (w/ JOI)
 *
 * RefundTypeEnumeration enumerates several kinds of product return refund types.
 */
export const RefundTypeEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/FullRefund',
  'https://schema.org/StoreCreditRefund',
  'https://schema.org/ExchangeRefund',
);

/**
 * Runtime validator for schema:RefundTypeEnumeration.
 *
 * If some data has one of the values of the schema:RefundTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRefundTypeEnumeration = RefundTypeEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRefundTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeRefundTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeRefundTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRefundTypeEnumeration` will have type `RefundTypeEnumeration`
 * const refundTypeEnumeration = maybeRefundTypeEnumeration;
 * ```
 */
export function validateRefundTypeEnumeration(maybeRefundTypeEnumeration: unknown): RefundTypeEnumeration | OaValidationError {
  const { value, error } = RefundTypeEnumerationJoiSchema.validate(maybeRefundTypeEnumeration);
  if (error) {
    return new OaValidationError('RefundTypeEnumeration', maybeRefundTypeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as RefundTypeEnumeration;
}
