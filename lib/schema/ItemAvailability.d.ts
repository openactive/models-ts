import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:ItemAvailability
 *
 * A list of possible product availability options.
 */
export declare type ItemAvailability = 'https://schema.org/InStoreOnly' | 'https://schema.org/OnlineOnly' | 'https://schema.org/BackOrder' | 'https://schema.org/OutOfStock' | 'https://schema.org/LimitedAvailability' | 'https://schema.org/PreSale' | 'https://schema.org/PreOrder' | 'https://schema.org/InStock' | 'https://schema.org/Discontinued' | 'https://schema.org/SoldOut';
/**
 * schema:ItemAvailability - Validation schema (w/ JOI)
 *
 * A list of possible product availability options.
 */
export declare const ItemAvailabilityJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:ItemAvailability.
 *
 * If some data has one of the values of the schema:ItemAvailability enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeItemAvailability = validateItemAvailability(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeItemAvailability instanceof OaValidationError) {
 *   // From this point on, `maybeItemAvailability` will have type `OaValidationError`
 *   const error = maybeItemAvailability;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeItemAvailability` will have type `ItemAvailability`
 * const itemAvailability = maybeItemAvailability;
 * ```
 */
export declare function validateItemAvailability(maybeItemAvailability: unknown): ItemAvailability | OaValidationError;
