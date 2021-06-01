import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:OfferItemCondition
 *
 * A list of possible conditions for the item.
 */
export declare type OfferItemCondition = 'https://schema.org/DamagedCondition' | 'https://schema.org/UsedCondition' | 'https://schema.org/NewCondition' | 'https://schema.org/RefurbishedCondition';
/**
 * schema:OfferItemCondition - Validation schema (w/ JOI)
 *
 * A list of possible conditions for the item.
 */
export declare const OfferItemConditionJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:OfferItemCondition.
 *
 * If some data has one of the values of the schema:OfferItemCondition enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferItemCondition = OfferItemCondition.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferItemCondition instanceof OaValidationError) {
 *   // From this point on, `maybeOfferItemCondition` will have type `OaValidationError`
 *   const error = maybeOfferItemCondition;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferItemCondition` will have type `OfferItemCondition`
 * const offerItemCondition = maybeOfferItemCondition;
 * ```
 */
export declare function validateOfferItemCondition(maybeOfferItemCondition: unknown): OfferItemCondition | OaValidationError;
