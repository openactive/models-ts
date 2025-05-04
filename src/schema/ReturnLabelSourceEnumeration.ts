// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:ReturnLabelSourceEnumeration
 *
 * Enumerates several types of return labels for product returns.
 */
export type ReturnLabelSourceEnumeration = 
  
  | 'https://schema.org/ReturnLabelDownloadAndPrint'
  | 'https://schema.org/ReturnLabelInBox'
  | 'https://schema.org/ReturnLabelCustomerResponsibility'
  ;

/**
 * schema:ReturnLabelSourceEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates several types of return labels for product returns.
 */
export const ReturnLabelSourceEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/ReturnLabelDownloadAndPrint',
  'https://schema.org/ReturnLabelInBox',
  'https://schema.org/ReturnLabelCustomerResponsibility',
);

/**
 * Runtime validator for schema:ReturnLabelSourceEnumeration.
 *
 * If some data has one of the values of the schema:ReturnLabelSourceEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReturnLabelSourceEnumeration = validateReturnLabelSourceEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReturnLabelSourceEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeReturnLabelSourceEnumeration` will have type `OaValidationError`
 *   const error = maybeReturnLabelSourceEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReturnLabelSourceEnumeration` will have type `ReturnLabelSourceEnumeration`
 * const returnLabelSourceEnumeration = maybeReturnLabelSourceEnumeration;
 * ```
 */
export function validateReturnLabelSourceEnumeration(maybeReturnLabelSourceEnumeration: unknown): ReturnLabelSourceEnumeration | OaValidationError {
  const { value, error } = ReturnLabelSourceEnumerationJoiSchema.validate(maybeReturnLabelSourceEnumeration);
  if (error) {
    return new OaValidationError('ReturnLabelSourceEnumeration', maybeReturnLabelSourceEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ReturnLabelSourceEnumeration;
}
