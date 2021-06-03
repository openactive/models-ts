import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ItemListOrderType
 *
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
export declare type ItemListOrderType = 'https://schema.org/ItemListOrderAscending' | 'https://schema.org/ItemListUnordered' | 'https://schema.org/ItemListOrderDescending';
/**
 * schema:ItemListOrderType - Validation schema (w/ JOI)
 *
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 */
export declare const ItemListOrderTypeJoiSchema: Joi.StringSchema;
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
export declare function validateItemListOrderType(maybeItemListOrderType: unknown): ItemListOrderType | OaValidationError;
