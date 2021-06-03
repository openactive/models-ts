import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * OrderCreationStatus
 */
export declare type OrderCreationStatus = 'https://openactive.io/OrderCreationPaymentAuthorized' | 'https://openactive.io/OrderCreationPaymentCaptured' | 'https://openactive.io/OrderCreationComplete' | 'https://openactive.io/OrderCreationPaymentDue';
/**
 * OrderCreationStatus - Validation schema (w/ JOI)
 */
export declare const OrderCreationStatusJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for OrderCreationStatus.
 *
 * If some data has one of the values of the OrderCreationStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderCreationStatus = validateOrderCreationStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderCreationStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderCreationStatus` will have type `OaValidationError`
 *   const error = maybeOrderCreationStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderCreationStatus` will have type `OrderCreationStatus`
 * const orderCreationStatus = maybeOrderCreationStatus;
 * ```
 */
export declare function validateOrderCreationStatus(maybeOrderCreationStatus: unknown): OrderCreationStatus | OaValidationError;
