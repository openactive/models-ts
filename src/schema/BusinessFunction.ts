// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:BusinessFunction
 *
 * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy
 *
 *         
 */
export type BusinessFunction = 
  string
  ;

/**
 * schema:BusinessFunction - Validation schema (w/ JOI)
 *
 * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy
 *
 *         
 */
export const BusinessFunctionJoiSchema = Joi.string().valid(
);

/**
 * Runtime validator for schema:BusinessFunction.
 *
 * If some data has one of the values of the schema:BusinessFunction enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBusinessFunction = BusinessFunction.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBusinessFunction instanceof OaValidationError) {
 *   // From this point on, `maybeBusinessFunction` will have type `OaValidationError`
 *   const error = maybeBusinessFunction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBusinessFunction` will have type `BusinessFunction`
 * const businessFunction = maybeBusinessFunction;
 * ```
 */
export function validateBusinessFunction(maybeBusinessFunction: unknown): BusinessFunction | OaValidationError {
  const { value, error } = BusinessFunctionJoiSchema.validate(maybeBusinessFunction);
  if (error) {
    return new OaValidationError('BusinessFunction', maybeBusinessFunction, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as BusinessFunction;
}
