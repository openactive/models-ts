// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * test:TestOpenBookingFlowEnumeration
 *
 * [NOTICE: This enumeration is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * An enumeration of open booking flows that an opportunity can be booked with.
 */
export type TestOpenBookingFlowEnumeration = 
  
  | 'https://openactive.io/test-interface#OpenBookingSimpleFlow'
  | 'https://openactive.io/test-interface#OpenBookingApprovalFlow'
  ;

/**
 * test:TestOpenBookingFlowEnumeration - Validation schema (w/ JOI)
 *
 * [NOTICE: This enumeration is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * An enumeration of open booking flows that an opportunity can be booked with.
 */
export const TestOpenBookingFlowEnumerationJoiSchema = Joi.string().valid(
  'https://openactive.io/test-interface#OpenBookingSimpleFlow',
  'https://openactive.io/test-interface#OpenBookingApprovalFlow',
);

/**
 * Runtime validator for test:TestOpenBookingFlowEnumeration.
 *
 * If some data has one of the values of the test:TestOpenBookingFlowEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTestOpenBookingFlowEnumeration = TestOpenBookingFlowEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTestOpenBookingFlowEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeTestOpenBookingFlowEnumeration` will have type `OaValidationError`
 *   const error = maybeTestOpenBookingFlowEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTestOpenBookingFlowEnumeration` will have type `TestOpenBookingFlowEnumeration`
 * const testOpenBookingFlowEnumeration = maybeTestOpenBookingFlowEnumeration;
 * ```
 */
export function validateTestOpenBookingFlowEnumeration(maybeTestOpenBookingFlowEnumeration: unknown): TestOpenBookingFlowEnumeration | OaValidationError {
  const { value, error } = TestOpenBookingFlowEnumerationJoiSchema.validate(maybeTestOpenBookingFlowEnumeration);
  if (error) {
    return new OaValidationError('TestOpenBookingFlowEnumeration', maybeTestOpenBookingFlowEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as TestOpenBookingFlowEnumeration;
}
