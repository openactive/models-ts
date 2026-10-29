// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:FulfillmentTypeEnumeration
 *
 * A type of product fulfillment.
 */
export type FulfillmentTypeEnumeration = 
  
  | 'https://schema.org/FulfillmentTypeCollectionPoint'
  | 'https://schema.org/FulfillmentTypeDelivery'
  | 'https://schema.org/FulfillmentTypePickupDropoff'
  | 'https://schema.org/FulfillmentTypePickupInStore'
  | 'https://schema.org/FulfillmentTypeScheduledDelivery'
  ;

/**
 * schema:FulfillmentTypeEnumeration - Validation schema (w/ JOI)
 *
 * A type of product fulfillment.
 */
export const FulfillmentTypeEnumerationJoiSchema = Joi.string().valid(
  'https://schema.org/FulfillmentTypeCollectionPoint',
  'https://schema.org/FulfillmentTypeDelivery',
  'https://schema.org/FulfillmentTypePickupDropoff',
  'https://schema.org/FulfillmentTypePickupInStore',
  'https://schema.org/FulfillmentTypeScheduledDelivery',
);

/**
 * Runtime validator for schema:FulfillmentTypeEnumeration.
 *
 * If some data has one of the values of the schema:FulfillmentTypeEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFulfillmentTypeEnumeration = validateFulfillmentTypeEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFulfillmentTypeEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeFulfillmentTypeEnumeration` will have type `OaValidationError`
 *   const error = maybeFulfillmentTypeEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFulfillmentTypeEnumeration` will have type `FulfillmentTypeEnumeration`
 * const fulfillmentTypeEnumeration = maybeFulfillmentTypeEnumeration;
 * ```
 */
export function validateFulfillmentTypeEnumeration(maybeFulfillmentTypeEnumeration: unknown): FulfillmentTypeEnumeration | OaValidationError {
  const { value, error } = FulfillmentTypeEnumerationJoiSchema.validate(maybeFulfillmentTypeEnumeration);
  if (error) {
    return new OaValidationError('FulfillmentTypeEnumeration', maybeFulfillmentTypeEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as FulfillmentTypeEnumeration;
}
