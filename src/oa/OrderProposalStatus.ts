// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * OrderProposalStatus
 */
export type OrderProposalStatus = 
  
  | 'https://openactive.io/AwaitingSellerConfirmation'
  | 'https://openactive.io/SellerAccepted'
  | 'https://openactive.io/SellerRejected'
  | 'https://openactive.io/CustomerRejected'
  ;

/**
 * OrderProposalStatus - Validation schema (w/ JOI)
 */
export const OrderProposalStatusJoiSchema = Joi.string().valid(
  'https://openactive.io/AwaitingSellerConfirmation',
  'https://openactive.io/SellerAccepted',
  'https://openactive.io/SellerRejected',
  'https://openactive.io/CustomerRejected',
);

/**
 * Runtime validator for OrderProposalStatus.
 *
 * If some data has one of the values of the OrderProposalStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderProposalStatus = validateOrderProposalStatus(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderProposalStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderProposalStatus` will have type `OaValidationError`
 *   const error = maybeOrderProposalStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderProposalStatus` will have type `OrderProposalStatus`
 * const orderProposalStatus = maybeOrderProposalStatus;
 * ```
 */
export function validateOrderProposalStatus(maybeOrderProposalStatus: unknown): OrderProposalStatus | OaValidationError {
  const { value, error } = OrderProposalStatusJoiSchema.validate(maybeOrderProposalStatus);
  if (error) {
    return new OaValidationError('OrderProposalStatus', maybeOrderProposalStatus, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OrderProposalStatus;
}
