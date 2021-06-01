import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * OrderProposalStatus
 */
export declare type OrderProposalStatus = 'https://openactive.io/AwaitingSellerConfirmation' | 'https://openactive.io/SellerAccepted' | 'https://openactive.io/SellerRejected' | 'https://openactive.io/CustomerRejected';
/**
 * OrderProposalStatus - Validation schema (w/ JOI)
 */
export declare const OrderProposalStatusJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for OrderProposalStatus.
 *
 * If some data has one of the values of the OrderProposalStatus enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderProposalStatus = OrderProposalStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderProposalStatus instanceof OaValidationError) {
 *   // From this point on, `maybeOrderProposalStatus` will have type `OaValidationError`
 *   const error = maybeOrderProposalStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderProposalStatus` will have type `OrderProposalStatus`
 * const orderProposalStatus = maybeOrderProposalStatus;
 * ```
 */
export declare function validateOrderProposalStatus(maybeOrderProposalStatus: unknown): OrderProposalStatus | OaValidationError;
