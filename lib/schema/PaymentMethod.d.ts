import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:PaymentMethod
 *
 * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\n* http://purl.org/goodrelations/v1#ByInvoice\n* http://purl.org/goodrelations/v1#Cash\n* http://purl.org/goodrelations/v1#CheckInAdvance\n* http://purl.org/goodrelations/v1#COD\n* http://purl.org/goodrelations/v1#DirectDebit\n* http://purl.org/goodrelations/v1#GoogleCheckout\n* http://purl.org/goodrelations/v1#PayPal\n* http://purl.org/goodrelations/v1#PaySwarm
 *
 *
 */
export declare type PaymentMethod = string;
/**
 * schema:PaymentMethod - Validation schema (w/ JOI)
 *
 * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\n* http://purl.org/goodrelations/v1#ByInvoice\n* http://purl.org/goodrelations/v1#Cash\n* http://purl.org/goodrelations/v1#CheckInAdvance\n* http://purl.org/goodrelations/v1#COD\n* http://purl.org/goodrelations/v1#DirectDebit\n* http://purl.org/goodrelations/v1#GoogleCheckout\n* http://purl.org/goodrelations/v1#PayPal\n* http://purl.org/goodrelations/v1#PaySwarm
 *
 *
 */
export declare const PaymentMethodJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:PaymentMethod.
 *
 * If some data has one of the values of the schema:PaymentMethod enum, it will be returned with the correct type.
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
