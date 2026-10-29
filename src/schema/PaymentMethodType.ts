// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:PaymentMethodType
 *
 * The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expressed using subclasses of PaymentMethod.
 */
export type PaymentMethodType = 
  
  | 'https://schema.org/ByBankTransferInAdvance'
  | 'https://schema.org/ByInvoice'
  | 'https://schema.org/COD'
  | 'https://schema.org/Cash'
  | 'https://schema.org/CheckInAdvance'
  | 'https://schema.org/DirectDebit'
  | 'https://schema.org/InStorePrepay'
  | 'https://schema.org/PhoneCarrierPayment'
  ;

/**
 * schema:PaymentMethodType - Validation schema (w/ JOI)
 *
 * The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expressed using subclasses of PaymentMethod.
 */
export const PaymentMethodTypeJoiSchema = Joi.string().valid(
  'https://schema.org/ByBankTransferInAdvance',
  'https://schema.org/ByInvoice',
  'https://schema.org/COD',
  'https://schema.org/Cash',
  'https://schema.org/CheckInAdvance',
  'https://schema.org/DirectDebit',
  'https://schema.org/InStorePrepay',
  'https://schema.org/PhoneCarrierPayment',
);

/**
 * Runtime validator for schema:PaymentMethodType.
 *
 * If some data has one of the values of the schema:PaymentMethodType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentMethodType = validatePaymentMethodType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentMethodType instanceof OaValidationError) {
 *   // From this point on, `maybePaymentMethodType` will have type `OaValidationError`
 *   const error = maybePaymentMethodType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentMethodType` will have type `PaymentMethodType`
 * const paymentMethodType = maybePaymentMethodType;
 * ```
 */
export function validatePaymentMethodType(maybePaymentMethodType: unknown): PaymentMethodType | OaValidationError {
  const { value, error } = PaymentMethodTypeJoiSchema.validate(maybePaymentMethodType);
  if (error) {
    return new OaValidationError('PaymentMethodType', maybePaymentMethodType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PaymentMethodType;
}
