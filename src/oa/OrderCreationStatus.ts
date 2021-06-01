// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * OrderCreationStatus
 */
export type OrderCreationStatus = 
  
  | 'https://openactive.io/OrderCreationPaymentAuthorized'
  | 'https://openactive.io/OrderCreationPaymentCaptured'
  | 'https://openactive.io/OrderCreationComplete'
  | 'https://openactive.io/OrderCreationPaymentDue'
  ;

/**
 * OrderCreationStatus - Validation schema (w/ JOI)
 */
export const OrderCreationStatusJoiSchema = Joi.string().valid(
  'https://openactive.io/OrderCreationPaymentAuthorized',
  'https://openactive.io/OrderCreationPaymentCaptured',
  'https://openactive.io/OrderCreationComplete',
  'https://openactive.io/OrderCreationPaymentDue',
);

/**
 * Runtime validator for OrderCreationStatus.
 *
 * If some data has one of the values of the OrderCreationStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderCreationStatus = OrderCreationStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderCreationStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderCreationStatus` will have type `OaValidationError`
 *   const error = maybeOrderCreationStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderCreationStatus` will have type `OrderCreationStatus`
 * const orderCreationStatus = maybeOrderCreationStatus;
 * ```
 */
export function validateOrderCreationStatus(maybeOrderCreationStatus: unknown): OrderCreationStatus | OaValidationError {
  const { value, error } = OrderCreationStatusJoiSchema.validate(maybeOrderCreationStatus);
  if (error) {
    return new OaValidationError('OrderCreationStatus', maybeOrderCreationStatus, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OrderCreationStatus;
}
