// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * BrokerType
 */
export type BrokerType = 
  
  | 'https://openactive.io/AgentBroker'
  | 'https://openactive.io/NoBroker'
  | 'https://openactive.io/ResellerBroker'
  ;

/**
 * BrokerType - Validation schema (w/ JOI)
 */
export const BrokerTypeJoiSchema = Joi.string().valid(
  'https://openactive.io/AgentBroker',
  'https://openactive.io/NoBroker',
  'https://openactive.io/ResellerBroker',
);

/**
 * Runtime validator for BrokerType.
 *
 * If some data has one of the values of the BrokerType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBrokerType = validateBrokerType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBrokerType instanceof OaValidationError) {
 *   // From this point on, `maybeBrokerType` will have type `OaValidationError`
 *   const error = maybeBrokerType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBrokerType` will have type `BrokerType`
 * const brokerType = maybeBrokerType;
 * ```
 */
export function validateBrokerType(maybeBrokerType: unknown): BrokerType | OaValidationError {
  const { value, error } = BrokerTypeJoiSchema.validate(maybeBrokerType);
  if (error) {
    return new OaValidationError('BrokerType', maybeBrokerType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as BrokerType;
}
