import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * gr:PaymentMethod
 */
export declare type PaymentMethod = 'http://purl.org/goodrelations/v1#Cash' | 'http://purl.org/goodrelations/v1#PaymentMethodCreditCard';
/**
 * gr:PaymentMethod - Validation schema (w/ JOI)
 */
export declare const PaymentMethodJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for gr:PaymentMethod.
 *
 * If some data has one of the values of the gr:PaymentMethod enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentMethod = validatePaymentMethod(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentMethod instanceof OaValidationError) {
 *   // From this point on, `maybePaymentMethod` will have type `OaValidationError`
 *   const error = maybePaymentMethod;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentMethod` will have type `PaymentMethod`
 * const paymentMethod = maybePaymentMethod;
 * ```
 */
export declare function validatePaymentMethod(maybePaymentMethod: unknown): PaymentMethod | OaValidationError;
