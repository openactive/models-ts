import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * OpenBookingFlowRequirement
 */
export declare type OpenBookingFlowRequirement = 'https://openactive.io/OpenBookingIntakeForm' | 'https://openactive.io/OpenBookingAttendeeDetails' | 'https://openactive.io/OpenBookingApproval' | 'https://openactive.io/OpenBookingNegotiation' | 'https://openactive.io/OpenBookingMessageExchange';
/**
 * OpenBookingFlowRequirement - Validation schema (w/ JOI)
 */
export declare const OpenBookingFlowRequirementJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for OpenBookingFlowRequirement.
 *
 * If some data has one of the values of the OpenBookingFlowRequirement enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpenBookingFlowRequirement = OpenBookingFlowRequirement.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpenBookingFlowRequirement instanceof OaValidationError) {
 *   // From this point on, `maybeOpenBookingFlowRequirement` will have type `OaValidationError`
 *   const error = maybeOpenBookingFlowRequirement;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpenBookingFlowRequirement` will have type `OpenBookingFlowRequirement`
 * const openBookingFlowRequirement = maybeOpenBookingFlowRequirement;
 * ```
 */
export declare function validateOpenBookingFlowRequirement(maybeOpenBookingFlowRequirement: unknown): OpenBookingFlowRequirement | OaValidationError;
