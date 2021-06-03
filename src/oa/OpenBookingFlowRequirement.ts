// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * OpenBookingFlowRequirement
 */
export type OpenBookingFlowRequirement = 
  
  | 'https://openactive.io/OpenBookingIntakeForm'
  | 'https://openactive.io/OpenBookingAttendeeDetails'
  | 'https://openactive.io/OpenBookingApproval'
  | 'https://openactive.io/OpenBookingNegotiation'
  | 'https://openactive.io/OpenBookingMessageExchange'
  ;

/**
 * OpenBookingFlowRequirement - Validation schema (w/ JOI)
 */
export const OpenBookingFlowRequirementJoiSchema = Joi.string().valid(
  'https://openactive.io/OpenBookingIntakeForm',
  'https://openactive.io/OpenBookingAttendeeDetails',
  'https://openactive.io/OpenBookingApproval',
  'https://openactive.io/OpenBookingNegotiation',
  'https://openactive.io/OpenBookingMessageExchange',
);

/**
 * Runtime validator for OpenBookingFlowRequirement.
 *
 * If some data has one of the values of the OpenBookingFlowRequirement enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpenBookingFlowRequirement = validateOpenBookingFlowRequirement(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpenBookingFlowRequirement instanceof OaValidationError) {
 *   // From this point on, `maybeOpenBookingFlowRequirement` will have type `OaValidationError`
 *   const error = maybeOpenBookingFlowRequirement;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpenBookingFlowRequirement` will have type `OpenBookingFlowRequirement`
 * const openBookingFlowRequirement = maybeOpenBookingFlowRequirement;
 * ```
 */
export function validateOpenBookingFlowRequirement(maybeOpenBookingFlowRequirement: unknown): OpenBookingFlowRequirement | OaValidationError {
  const { value, error } = OpenBookingFlowRequirementJoiSchema.validate(maybeOpenBookingFlowRequirement);
  if (error) {
    return new OaValidationError('OpenBookingFlowRequirement', maybeOpenBookingFlowRequirement, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OpenBookingFlowRequirement;
}
