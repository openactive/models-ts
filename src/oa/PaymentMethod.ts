// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * gr:PaymentMethod
 */
export type PaymentMethod = 
  
  | 'http://purl.org/goodrelations/v1#Cash'
  | 'http://purl.org/goodrelations/v1#PaymentMethodCreditCard'
  ;

/**
 * gr:PaymentMethod - Validation schema (w/ JOI)
 */
export const PaymentMethodJoiSchema = Joi.string().valid(
  'http://purl.org/goodrelations/v1#Cash',
  'http://purl.org/goodrelations/v1#PaymentMethodCreditCard',
);

/**
 * Runtime validator for gr:PaymentMethod.
 *
 * If some data has one of the values of the gr:PaymentMethod enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentMethod = PaymentMethod.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentMethod instanceof OaValidationError) {
 *   // From this point on, `maybePaymentMethod` will have type `OaValidationError`
 *   const error = maybePaymentMethod;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentMethod` will have type `PaymentMethod`
 * const paymentMethod = maybePaymentMethod;
 * ```
 */
export function validatePaymentMethod(maybePaymentMethod: unknown): PaymentMethod | OaValidationError {
  const { value, error } = PaymentMethodJoiSchema.validate(maybePaymentMethod);
  if (error) {
    return new OaValidationError('PaymentMethod', maybePaymentMethod, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PaymentMethod;
}
