import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * OrderItemStatus
 */
export declare type OrderItemStatus = 'https://openactive.io/SellerCancelled' | 'https://openactive.io/CustomerCancelled' | 'https://openactive.io/OrderItemConfirmed' | 'https://openactive.io/CustomerAttended';
/**
 * OrderItemStatus - Validation schema (w/ JOI)
 */
export declare const OrderItemStatusJoiSchema: Joi.StringSchema;
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
export declare function validateOrderItemStatus(maybeOrderItemStatus: unknown): OrderItemStatus | OaValidationError;
