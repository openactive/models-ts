// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:ItemListOrderType
 *
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
export type ItemListOrderType = 
  
  | 'https://schema.org/ItemListUnordered'
  | 'https://schema.org/ItemListOrderDescending'
  | 'https://schema.org/ItemListOrderAscending'
  ;

/**
 * schema:ItemListOrderType - Validation schema (w/ JOI)
 *
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
export const ItemListOrderTypeJoiSchema = Joi.string().valid(
  'https://schema.org/ItemListUnordered',
  'https://schema.org/ItemListOrderDescending',
  'https://schema.org/ItemListOrderAscending',
);

/**
 * Runtime validator for schema:ItemListOrderType.
 *
 * If some data has one of the values of the schema:ItemListOrderType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeItemListOrderType = validateItemListOrderType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeItemListOrderType instanceof OaValidationError) {
 *   // From this point on, `maybeItemListOrderType` will have type `OaValidationError`
 *   const error = maybeItemListOrderType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeItemListOrderType` will have type `ItemListOrderType`
 * const itemListOrderType = maybeItemListOrderType;
 * ```
 */
export function validateItemListOrderType(maybeItemListOrderType: unknown): ItemListOrderType | OaValidationError {
  const { value, error } = ItemListOrderTypeJoiSchema.validate(maybeItemListOrderType);
  if (error) {
    return new OaValidationError('ItemListOrderType', maybeItemListOrderType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ItemListOrderType;
}
