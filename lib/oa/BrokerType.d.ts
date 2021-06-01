import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * BrokerType
 */
export declare type BrokerType = 'https://openactive.io/AgentBroker' | 'https://openactive.io/NoBroker' | 'https://openactive.io/ResellerBroker';
/**
 * BrokerType - Validation schema (w/ JOI)
 */
export declare const BrokerTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for BrokerType.
 *
 * If some data has one of the values of the BrokerType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBrokerType = BrokerType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBrokerType instanceof OaValidationError) {
 *   // From this point on, `maybeBrokerType` will have type `OaValidationError`
 *   const error = maybeBrokerType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBrokerType` will have type `BrokerType`
 * const brokerType = maybeBrokerType;
 * ```
 */
export declare function validateBrokerType(maybeBrokerType: unknown): BrokerType | OaValidationError;
